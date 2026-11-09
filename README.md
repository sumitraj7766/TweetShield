# TweetShield – AI-Powered Tweet Classification

An AI-powered application that analyzes tweets and identifies potentially racist or sexist content using Natural Language Processing (NLP) and Machine Learning.

TweetShield combines a machine learning model, a FastAPI backend, and an Android application built with React Native and Expo.

## 🚀 Project Overview

Social media platforms contain harmful content, including racist and sexist language. Manually identifying such content at scale is difficult.

TweetShield aims to help identify potentially harmful tweets automatically by classifying user-submitted text into two categories:

- **Class 0:** Non-racist / Non-sexist
- **Class 1:** Potentially racist / Sexist

The application provides a prediction and confidence score through an Android interface.

> Disclaimer: TweetShield is an experimental classification tool. Its predictions are not definitive judgments and may contain false positives or false negatives.

## ✨ Features

- AI-based tweet classification.
- Text preprocessing using NLP techniques.
- TF-IDF feature extraction.
- Logistic Regression classification.
- FastAPI REST API.
- Cloud-hosted backend.
- React Native Android application.
- Prediction confidence display.
- Android APK generation.

## 🧠 Complete Project Workflow

The project was developed through the following stages:

1. **Problem Identification:** Identified the need to detect potentially racist and sexist content on social media.
2. **Dataset Collection:** Obtained a labelled Twitter dataset for binary text classification.
3. **Data Inspection:** Examined the dataset structure, columns, labels, missing values, and duplicates.
4. **Data Cleaning:** Removed duplicate records and cleaned tweet text.
5. **Exploratory Data Analysis:** Examined label distribution, class imbalance, and tweet patterns.
6. **Text Preprocessing:** Applied text normalization, tokenization, stopword removal, and stemming.
7. **Feature Extraction:** Converted text into numerical features using TF-IDF.
8. **Model Training:** Trained a Logistic Regression classifier.
9. **Model Evaluation:** Evaluated the model using accuracy, precision, recall, F1-score, and a confusion matrix.
10. **Model Saving:** Saved the trained model and TF-IDF vectorizer as `.pkl` files.
11. **Backend Development:** Developed a REST API using FastAPI.
12. **Backend Deployment:** Deployed the API using Render.
13. **Android Development:** Built the mobile application using React Native and Expo.
14. **API Integration:** Connected the Android application to the deployed backend.
15. **APK Generation:** Generated an Android APK using Expo EAS Build.

## 📊 Dataset

The project uses a labelled Twitter text dataset containing the following columns:

| Column  | Description          |
| ------- | -------------------- |
| `id`    | Tweet identifier     |
| `label` | Classification label |
| `tweet` | Tweet text           |

**Original dataset size:** 31,962 rows  
**Cleaned dataset size:** 29,528 rows

Class labels:

- `0` – Non-racist / Non-sexist
- `1` – Potentially racist / Sexist

Dataset reference:
[Kaggle – Twitter Sentiment Analysis](https://www.kaggle.com/arkhoshghalb/twitter-sentiment-analysis-hatred-speech)

Note: This is a reference to the related Kaggle dataset. Confirm the exact original download source before treating it as the dataset's definitive provenance.

## 🧹 Data Preprocessing

The following techniques were used:

- Text normalization.
- Removal of unwanted characters and noise.
- Tokenization.
- Stopword removal while preserving negations.
- Porter stemming.
- Duplicate removal.

Libraries used:

- Pandas
- NumPy
- NLTK
- Regular Expressions

## 🔍 Exploratory Data Analysis

EDA was performed to understand:

- Distribution of class labels.
- Imbalance between the two classes.
- Tweet text patterns.
- Common words and text characteristics.

Visualization tools:

- Matplotlib
- Seaborn

## ⚙️ Feature Extraction

**TF-IDF (Term Frequency–Inverse Document Frequency)** was used to convert tweet text into numerical vectors.

Configuration:

- Maximum features: 5,000

Documentation: [Scikit-learn TF-IDF Vectorizer](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.TfidfVectorizer.html)

## 🤖 Machine Learning Model

Algorithm: **Logistic Regression**

The model was trained on TF-IDF features to classify tweets into two categories.

Classification threshold: `0.65`

Saved model files:

- `twitter_classifier.pkl`
- `tfidf_vectorizer.pkl`

## 📈 Model Evaluation

Final test-set results:

| Metric              |  Score |
| ------------------- | -----: |
| Accuracy            | 94.77% |
| Precision (Class 1) | 59.92% |
| Recall (Class 1)    | 70.47% |
| F1-score (Class 1)  | 64.77% |

Confusion Matrix:

|          | Predicted 0 | Predicted 1 |
| -------- | ----------: | ----------: |
| Actual 0 |        5313 |         190 |
| Actual 1 |         119 |         284 |

The results show that the model performs well overall, but positive-class predictions still have limitations.

## 🛠️ Technology Stack

| Category                | Technologies          |
| ----------------------- | --------------------- |
| Programming Language    | Python                |
| Data Processing         | Pandas, NumPy         |
| NLP                     | NLTK                  |
| Machine Learning        | Scikit-learn          |
| Feature Extraction      | TF-IDF                |
| Classification          | Logistic Regression   |
| Backend                 | FastAPI               |
| Backend Hosting         | Render                |
| Mobile Development      | React Native          |
| Mobile Framework        | Expo                  |
| API Communication       | REST API              |
| Android Build           | Expo EAS Build        |
| Development Environment | Google Colab, VS Code |
| Version Control         | Git, GitHub           |

## 🌐 Project Links

### Machine Learning

- [Original Classifier GitHub Repository](https://github.com/sumitraj7766/twitter-racist-sexist-classifier)
- Google Colab Notebook: **[Add your actual Colab notebook link here]**

### Backend

- [TweetShield Backend Repository](https://github.com/sumitraj7766/tweetshield-backend)
- [Live Backend API](https://tweetshield-api.onrender.com)
- [Interactive API Documentation](https://tweetshield-api.onrender.com/docs)

### Android Application

- [Android APK Build and Installation Page](https://expo.dev/accounts/sumitkpatel07/projects/tweetshield/builds/14987823-0544-4a9a-b3f2-6eafa2ff500c)

## 🔌 API Usage

**Endpoint:**

`POST https://tweetshield-api.onrender.com/predict`

Example request:

```json
{
  "tweet": "Your tweet text goes here"
}
```

The API returns classification information, including:

- `prediction`
- `label`
- `confidence`
- `threshold`

You can test the API using its interactive documentation:

[Open Swagger API Documentation](https://tweetshield-api.onrender.com/docs)

## 📱 Android Application

The Android application was developed using React Native and Expo.

Application flow:

1. Open TweetShield.
2. Navigate to the tweet analysis screen.
3. Enter a tweet.
4. Submit the tweet for analysis.
5. The app sends the text to the FastAPI backend.
6. The backend preprocesses the text and runs the trained model.
7. The app displays the prediction and confidence.

## 📂 Suggested Repository Structure

```text
TweetShield/
│
├── README.md
│
├── notebook/
│   └── TweetShield_Colab_Notebook.ipynb
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   ├── twitter_classifier.pkl
│   └── tfidf_vectorizer.pkl
│
├── mobile/
│   ├── app.json
│   ├── eas.json
│   ├── package.json
│   ├── src/
│   └── assets/
│
├── dataset/
│   └── README.md
│
└── screenshots/
    └── app-screenshots/
```

This is the proposed structure for the consolidated repository; files should be placed here when the existing projects are combined.

## 🔮 Future Improvements

- Improve positive-class precision and recall.
- Experiment with advanced NLP models such as BERT.
- Add multilingual tweet classification.
- Improve model explainability.
- Add user feedback for incorrect predictions.
- Improve handling of ambiguous language and context.
- Explore integration with social media moderation workflows.

## 👨‍💻 Developer

**Sumit Kumar**

B.Tech – Electrical and Electronics Engineering  
Loknayak Jai Prakash Institute of Technology (LNJPIT), Chapra

- GitHub: [sumitraj7766](https://github.com/sumitraj7766)
- Portfolio: [Personal Portfolio](https://sumitraj7766.github.io/portfolio)
- LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/shreyansh90/)

## 📄 License

Choose and add an appropriate open-source license before publishing the consolidated repository.

---

**TweetShield v1.0 – AI-powered tweet classification.**
