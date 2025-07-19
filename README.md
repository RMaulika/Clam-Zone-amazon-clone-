# 🛒 ClamZone - Amazon Clone with Stripe Payments

ClamZone is a full-stack e-commerce web application inspired by Amazon. It allows users to browse products, add them to a basket, sign in securely, and complete purchases using Stripe for payment processing. The project is built using React for the frontend and Firebase for backend services like authentication, Firestore database, and cloud functions.

## 🚀 Features

- 🔐 User Authentication (Login / Logout) using Firebase Auth
- 🛍️ Add to Basket and Checkout functionality
- 💳 Stripe Payment Integration (test cards supported)
- 🧾 Order History stored in Firestore per user
- ☁️ Firebase Functions API for secure backend logic
- 📦 Responsive UI built with React and React Router

## 🛠️ Tech Stack

- Frontend: React, React Router, Context API
- Backend: Firebase (Auth, Firestore, Cloud Functions)
- Payment: Stripe
- Styling: CSS (BEM naming)

## ⚙️ Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/clamzone-amazon-clone.git
cd clamzone-amazon-clone
npm install
cd functions
npm install
```

## Test Stripe Card
Use this card for testing payments:

Card Number: 4242 4242 4242 4242
Exp: Any future date
CVV: Any 3 digits


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
