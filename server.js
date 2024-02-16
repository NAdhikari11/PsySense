const express = require('express');
const { spawn } = require('child_process');
const cors = require('cors'); // import cors

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// add cors middleware
app.use(cors());

app.post('/predict', (req, res) => {
  // Get the input data from the request body
  const { hrv, temp, eda, br, spo2, steps } = req.body;

  // Spawn a child process to run the Python script
  const pythonProcess = spawn('python', ['D:/MiniProject-I/PsySense-main/Backend/model.py', hrv, temp, eda, br, spo2, steps], {
    detached: true,
    stdio: ['pipe', 'pipe', 'pipe'],
  });

  // Capture the stdout output of the child process
  let output = '';
  pythonProcess.stdout.on('data', (data) => {
    output += data.toString();
  });

  // When the child process exits, send the output back to the client
  pythonProcess.on('exit', (code) => {
    if (code !== 0) {
      res.status(500).send('Prediction failed');
    } else {
      res.send(output);
    }
  });
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
