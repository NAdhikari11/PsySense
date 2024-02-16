import sys

import pandas as pd


dataset = pd.read_csv('D:\MiniProject-I\PsySense-main\Psysense_final2.csv')
X = dataset.iloc[:, :-1].values
y = dataset.iloc[:, -1].values

from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.25, random_state = 0)

from sklearn.preprocessing import StandardScaler
sc = StandardScaler()
X_train = sc.fit_transform(X_train)
X_test = sc.transform(X_test)

from sklearn.neighbors import KNeighborsClassifier
classifier = KNeighborsClassifier(n_neighbors = 5, metric = 'minkowski', p=2)
classifier.fit(X_train, y_train)

hrv = float(sys.argv[1])
temp = float(sys.argv[2])
eda = float(sys.argv[3])
br = float(sys.argv[4])
spo2 = float(sys.argv[5])
steps = float(sys.argv[6])

X_new = [[hrv, temp, eda, br, spo2, steps]]

print(classifier.predict(sc.transform(X_new)))

