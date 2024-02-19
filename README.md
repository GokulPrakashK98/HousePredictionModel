# PythonForDataScience
## House price prediction
The real estate market is influenced by multifaceted elements, and an accurate prediction mechanism is pivotal for informed decision-making among buyers, sellers, and real estate experts. Leveraging advanced machine learning methodologies, this project endeavors to formulate a predictive model specifically tailored for predicting house prices. This model is capable of forecasting house prices using a diverse range of factors including dimensions, geographical location, and room count.
## Functionalities
## 1. Data source and retrieval
The project utilized a dataset sourced from Kaggle, specifically in CSV format, containing housing details from Bangalore, India. It encompasses various attributes such as area type, availability, location coordinates, size, society, total square feet, bathrooms, balcony count, and sales prices. The [dataset](https://www.kaggle.com/datasets/amitabhajoy/bengaluru-houseprice-data) comprises 13,320 entries of house price information from Bangalore, India.
## 2. Data storage and handling
[Pandas](https://pandas.pydata.org/docs/) was employed to manage the downloaded CSV dataset. Simultaneously, Pandas and [NumPy](https://numpy.org/) were utilized for data cleaning, which involved handling missing values, outliers, and encoding categorical variables. Exploratory data analysis was conducted to unveil correlations between features and the target variable, namely house prices.
## 3.Interface
The project's interface was developed using a Python [Flask](https://flask.palletsprojects.com/en/3.0.x/) server, which utilizes a pre-saved machine learning model to handle HTTP requests. Additionally, an interactive website was constructed using HTML,CSS,JavaScript enabling users to select different features and predict home prices.
## 4. Statistical analysis
Statistical analysis of the dataset was multifaceted, involving exploratory, descriptive, and predictive approaches. Significant features were identified through correlation analysis between factors and the target variable, which were subsequently utilized in building the machine learning model. The model employed was a linear regression model, covering various data science concepts such as data loading and cleaning, outlier detection and removal, feature engineering, dimensionality reduction, gridsearchcv for hyperparameter tuning, and k-fold cross-validation.
## 5. Visualizations
Visualizations were crucial in understanding potential correlations between factors and the target variable. [Matplotlib](https://matplotlib.org/) was primarily utilized for generating scatter plots to explore these relationships comprehensively. These visualizations played a vital role in informing model development and analysis by providing insights into the relationships between various features and predicted house prices.
## Installation and Usage
Clone the repository. Files located within the model, server, and website directories are necessary for the application's operation. A pickle file in the model directory contains the linear regression model for predicting house prices. Launch the Flask server before accessing the website. So, a python editor is required to run the flask server and also to make changes in the model. [Jupyter Notebook](https://jupyter.org/install) can be an option for this.
## Tools covered
1) Python
2) NumPy and Pandas for data cleaning
3) Matplotlib for data visualization
4) Sklearn for model building
5) Jupyter Notebook, Visual Studio code as IDE
6) Python flask for HTTP server
7) HTML/CSS/JavaScript for UI
## Timeline
![](https://github.com/GokulPrakashK98/PythonForDataScience/blob/main/Images/timeline.png?raw=true)
## How to use

