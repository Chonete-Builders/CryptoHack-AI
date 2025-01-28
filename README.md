

# TravelWise
<div align="center">
  
![travelwise Small](https://github.com/user-attachments/assets/00ffa2c5-43d2-4b4d-ad0c-746bc43ec04c)

</div>

## Overview


TravelWise is an AI-powered assistant designed to make your travel experiences seamless and enjoyable. From checking current prices and exploring tours to suggesting must-visit attractions, TravelWise ensures you have all the information you need at your fingertips. 
> This project is an AI Travel Assistant built for [Nosu AI Hackathon](https://nosu-ai-hackathon.devpost.com/?ref_content=default&ref_feature=challenge&ref_medium=portfolio).

> At the moment the model is trained only for Costa Rica.


---

## Technologies Used
- **Model**: [TravelWise Model](https://huggingface.co/jsandinoDev/TravelWise_gpt2)
- **Training Environment**: Google Colab
- **Database**: Supabase with PostgreSQL
- **Hosting**: Hugging Face Spaces / Vercel
- **Other Tools**: React, Next.js, Pythorch, Etc

---

## How It Works

## **Data Collection** 📊  
The data used for TravelWise was collected through a sample of web scraping from various sources such as:  
- Online stores  
- Hotels  
- Tourism services  
- Among others

While this initial dataset serves as a foundation, there is significant room for improvement. Future updates will incorporate more comprehensive and diverse data sources to improve the model's accuracy and reliability.

---

## **Model Training** 🧠  
The AI model behind TravelWise was built using **GPT-2** as the base model, which underwent fine-tuning to better cater to the travel domain.  

### Training Process:  
1. **Platform**: The training was conducted on **Google Colab**, utilizing its GPU acceleration for faster model fine-tuning.  
2. **Dataset Preparation**: The scraped data was cleaned, pre-processed, and formatted into a structure suitable for GPT-2 training.  
3. **Fine-Tuning**: Using Hugging Face’s Transformers library, the model was fine-tuned with travel-specific data to enhance its performance.  
4. **Evaluation**: Early testing shows promising results, but there is a clear need for further refinement of both the dataset and training parameters.

---

## **Deployment** 🚀  
The trained model was deployed using:  
- **Hugging Face Spaces**: The model was hosted on Hugging Face Spaces to make it accessible via API for seamless integration into the application.  
- **Vercel**: The frontend of TravelWise is deployed on **Vercel**, ensuring high performance and scalability for end-users.  

Deployment integrates the AI model with the app's UI for real-time responses, enabling users to interact smoothly with the assistant.

---

## **Integration** 🗄️  
**Supabase** and **PostgreSQL** were used as the backend infrastructure to handle data storage and retrieval:  

- **Supabase**:  
  - Acts as a modern backend-as-a-service (BaaS) platform.  
  - Facilitates real-time data handling and authentication.  

- **PostgreSQL**:  
  - Stores user inputs, preferences, and historical data for better personalization.  
  - Ensures robust and secure data management.  

Together, these technologies enable efficient storage and fast retrieval of data, improving the responsiveness and reliability of TravelWise.

---

