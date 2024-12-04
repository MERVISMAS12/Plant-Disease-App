import os
import numpy as np
from keras.models import load_model
from keras.preprocessing import image
import gradio as gr
from PIL import Image

# Path to the model file
model_path = 'rice_crop_model.h5'

# Check if the model file exists
if not os.path.exists(model_path):
    raise FileNotFoundError(f"Model file not found at {model_path}. Please verify the file path and location.")

# Load the trained model
model = load_model(model_path)

# Class indices from the training process
class_indices = {
    'Bacterial Leaf Blight': 0,
    'Brown Spot': 1,
    'Healthy': 2,
    'Leaf Blast': 3,
    'Leaf Scald': 4,
    'Narrow Brown Spot': 5
}

# Preprocessing function for the image
def preprocess_image(img):
    img = img.resize((224, 224))  # Resize to 224x224
    img_array = image.img_to_array(img)  # Convert image to array
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
    img_array /= 255.0  # Normalize pixel values to [0, 1]
    return img_array

# Prediction function
def predict_disease(img):
    img_array = preprocess_image(img)

    # Predict using the loaded model
    prediction = model.predict(img_array)
    predicted_class = np.argmax(prediction[0])  # Get the index of the highest score

    # Map the predicted index to the class label
    for label, index in class_indices.items():
        if index == predicted_class:
            confidence = prediction[0][predicted_class]
            return f'Predicted disease: {label}\nConfidence: {confidence:.2f}'

# Gradio interface
interface = gr.Interface(
    fn=predict_disease,
    inputs=gr.Image(type="pil"),
    outputs="text",
    title="Rice Crop Disease Detection",
    description="Upload an image of a rice crop leaf to predict the disease class."
)

# Launch the Gradio app
interface.launch(server_name="0.0.0.0", server_port=7860)
