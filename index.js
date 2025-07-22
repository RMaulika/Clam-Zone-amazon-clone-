const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/https");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51RmYOUBQfJHMfuV9JAGMLEHl9yiEhPpyrHZxSR0S7RLRpU0aHSNPURy0hHOqYTKWFSXI5UOLvpQooyIx9wTYkYiB00evhvMc04");
setGlobalOptions({maxInstances: 10});
const app = express();
app.use(cors({origin: true}));
app.use(express.json());
app.get("/", (req, res) => res.status(200).send("ClamZone Payments API is running"));
app.post("/payments/create", async (req, res) => {
  const total = Number(req.query.total);
  console.log("Payment Request Received for amount >>> ", total);
  if (isNaN(total)) { 
    return res.status(400).send({error: "Invalid total amount"});
  }
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    console.error("Stripe error:", err);
    res.status(500).send({error: err.message});
  }
});

exports.api = onRequest(app);


// http://127.0.0.1:5001/clone-7b619/us-central1/api
