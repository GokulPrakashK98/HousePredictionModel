# PythonForDataScience
## House price prediction model
![](https://github.com/GokulPrakashK98/PythonForDataScience/blob/main/Images/banner_new.jpg?raw=true)
## Description
The real estate market is shaped by various complex factors, and having an accurate prediction system is crucial for informed decision-making by buyers, sellers, and real estate professionals. Employing advanced machine learning techniques, this project aims to develop a predictive model designed specifically for forecasting house prices. This model is capable of forcasting house prices by considering a variety of factors such as property dimensions, location, and number of rooms.
## Functionalities
## 1. Data source and retrieval
The project utilized a dataset sourced from Kaggle, specifically in CSV format, containing housing details from Bangalore, India. It encompasses various attributes such as area type, availability, location coordinates, size, society, total square feet, bathrooms, and sales prices. The [dataset](https://www.kaggle.com/datasets/amitabhajoy/bengaluru-houseprice-data) comprises 13,320 entries of house price information from Bangalore, India.
## 2. Data storage and handling
[Pandas](https://pandas.pydata.org/docs/) was employed to manage the downloaded CSV dataset. Simultaneously, Pandas and [NumPy](https://numpy.org/) were utilized for data cleaning, which involved handling missing values, outliers, and encoding categorical variables. Exploratory data analysis was conducted to unveil correlations between features and the target variable, namely house prices.
## 3.Interface
The project's interface was developed using a Python [Flask](https://flask.palletsprojects.com/en/3.0.x/) server, which utilizes a pre-saved machine learning model to handle HTTP requests. Additionally, an interactive website was constructed using HTML,CSS,JavaScript enabling users to select different features and predict home prices.
## 4. Statistical analysis
Statistical analysis of the dataset was multifaceted, involving exploratory, descriptive, and predictive approaches. Significant features were identified through correlation analysis between factors and the target variable, which were subsequently utilized in building the machine learning model. The model employed was a linear regression model, covering various data science concepts such as data loading and cleaning, outlier detection and removal, feature engineering, dimensionality reduction, gridsearchcv for hyperparameter tuning, and k-fold cross-validation.
## 5. Visualizations
Visualizations were crucial in understanding potential correlations between factors and the target variable. [Matplotlib](https://matplotlib.org/) was primarily utilized for generating scatter plots to explore these relationships comprehensively. These visualizations played a vital role in informing model development and analysis by providing insights into the relationships between various features and predicted house prices.
## Installation and Usage
To utilize the application, one must clone the repository. Essential files housed within the model, server, and website directories are required for the application's functionality. Within the model directory, there exists a pickle file containing the linear regression model crucial for predicting house prices. Before accessing the website, it is imperative to launch the Flask server. Therefore, a Python editor like [VsCode](https://code.visualstudio.com/), [PyCharm](https://www.jetbrains.com/pycharm/), or [Atom](https://atom-editor.cc/) is essential for running the Flask server and make modifications within the model. [Jupyter Notebook](https://jupyter.org/install) is also a great option for visualization and data analysis.
## Libraries covered
1) Python
2) NumPy and Pandas for data cleaning
3) Matplotlib for data visualization
4) Sklearn for model building
5) Jupyter Notebook, Visual Studio code as IDE
6) Python flask for HTTP server
7) HTML/CSS/JavaScript for UI
## Timeline
![](https://github.com/GokulPrakashK98/PythonForDataScience/blob/main/Images/timeline.png?raw=true)
## Group Details
* Group name: Data Scholars
* Group code: G12
* Group repository: https://github.com/GokulPrakashK98/PythonForDataScience
* Tutor responsible: Hänies, Ole
* Group team leader: Kolakkattil, Gokul Prakash
* Group members: Kolakkattil, Gokul Prakash & Balakrishnan, Ruthran Veerasamy

Gokul: 
