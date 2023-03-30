# Counterfactual Visualization

## Installation

Install the required packages by running the following command:

pip install -r requirements.txt

## Running the App

Start the app by executing:

python wgsi.py

## Input Data as JSON Files

To load a dataset, set the DATASET_PATH variable in the app.py file to the path of a .json file.

The .json file should have the following format:

{
  "col": ["X1", "X2"],
  "X": [[1, 65, 57], [45.6, 72.45, 89.55]],
  "cf": [[1, 65, 57], [40.6, 72.45, 90]],
  "y_x": [1, 1, 0],
  "y_c": [0, 0, 1],
  "proba_x": [0.6000000238418579, 0.41999998688697815, 0.011968736536800861],
  "proba_c": [0.4300000071525574, 0.3099999940395355, 0.4600000023841858]
}

Where:

- col: Column names
- X: An array that contains the examples to be explained
- cf: An array that contains the counterfactual examples
- y_x: The predicted class for X
- y_c: The predicted class for the counterfactuals
- proba_x: The predicted probabilities for the examples to be explained
- proba_c: The predicted probabilities for the counterfactuals
