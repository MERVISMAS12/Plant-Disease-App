import pickle
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS to allow communication with Node.js backend

# Model training code based on your provided image
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

# Load the dataset (assuming it is in the current directory)
df = pd.read_csv('Crop_recommendation.csv')

# Extract features and target
features = df[['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']]
target = df['label']

# Train-test split
Xtrain, Xtest, Ytrain, Ytest = train_test_split(features, target, test_size=0.2, random_state=2)

# Train RandomForest model
RF = RandomForestClassifier(n_estimators=20, random_state=0)
RF.fit(Xtrain, Ytrain)

# Prediction endpoint
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        # Extract input features from the request
        features = np.array([[
            data['nitrogen'],
            data['phosphate'],
            data['potassium'],
            data['temperature'],
            data['ph'],
            data['humidity'],
            data['rainfall']
        ]])
        
        # Predict crop name
        prediction = RF.predict(features)
        
        return jsonify({'prediction': prediction[0]})
    
    except Exception as e:
        print(f"Error during prediction: {e}")
        return jsonify({'error': 'Prediction error'}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)
