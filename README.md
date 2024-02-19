# PythonForDataScience
## House price prediction
The real estate market is influenced by multifaceted elements, and an accurate prediction mechanism is pivotal for informed decision-making among buyers, sellers, and real estate experts. Leveraging advanced machine learning methodologies, this project endeavors to formulate a predictive model specifically tailored for predicting house prices. This model is capable of forecasting house prices using a diverse range of factors including dimensions, geographical location, and room count. The model is built based on the [dataset]( https://www.kaggle.com/datasets/amitabhajoy/bengaluru-houseprice-data) with 13320 house price information from Bangalore, India.
## Functionalities
## 1. Data source and retrieval
We  used a dataset from Kaggle, which was available in CSV format containing housing information from Bangalore, India. Including features like area type, availability, location coordinates, size, society, total square feet, bathrooms, balcony and sales prices. 
## 2. Data storage and handling
Pandas has been used to store the downloaded CSV format dataset. However, Pandas and NumPy simultaneously used to clean the dataset by handling missing values, and outliers, and encoding categorical variables. Further, we conducted exploratory data analysis to understand correlations between features and the target variable (house  prices).
## 3.Interface
We opted for Python flask server that uses the saved machine learning model to serve HTTP requests. Then build an interactive website using HTML/CSS/Java script that enables the user to select different features and predict the home prices.
## 4. Statistical analysis
This project involves exploratory, descriptive, and predictive analysis of the dataset. Correlation between factors and target variables have been analyzed and significant features were used for building the machine learning model. We have used a linear regression model and during model building, we have covered almost all data science concepts such as data load and cleaning, outlier detection and removal, feature engineering, dimensionality reduction, gridsearchcv for hyperparameter tunning, k fold crossvalidation, etc.
## 5. Visualizations
In our visualization approach, Matplotlib served as our primary tools. To explore potential correlations between factors and the target variable, we have employed scatter plots. These visualizations are integral to comprehensively understanding the relationships between various features and predicted house prices, aiding in informed model development and analysis.
## Installation and Usage
## Tools covered
1) Python
2) NumPy and Pandas for data cleaning
3) Matplotlib for data visualization
4) Sklearn for model building
5) Jupyter Notebook, Visual Studio code as IDE
6) Python flask for HTTP server
7) HTML/CSS/JavaScript for UI
## Timeline
![](https://github.com/GokulPrakashK98/PythonForDataScience/blob/main/Screenshot%202024-02-19%20173150.png?raw=true)
## How to use


