import { getBkashToken } from "@lib/bKash";
import admin from "@lib/firebaseAdmin";
import axios from "axios";

const db = admin.firestore();

function formatPrice(value, currency, rate) {
  const selectedCurrency = currency;
  if (selectedCurrency === "USD") {
    return Number(value).toFixed(2);
  } else {
    const ceilValue = Math.ceil(Number(value) * Number(rate));
    return ceilValue;
  }
}
export default async function handler(req, res) {
  if (req.method === "GET") {
    const { orderId } = req.query;
    if (!orderId) {
      return res.status(400).json({ error: "Invalid data!" });
    }
    const orderRef = db.collection("orders").doc(orderId);
    const orderData = await orderRef.get();
    if (!orderData.exists) {
      return res.status(400).json({ error: "Invalid order!" });
    }
    const totalAmount = formatPrice(
      orderData.data().totalAmount,
      orderData.data().selectedCurrency,
      orderData.data().BDT
    );

    if (!totalAmount) {
      return res.status(400).json({ error: "Invalid data!" });
    }
    const token = await getBkashToken();
    const options = {
      method: "POST",
      url: "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/create",
      headers: {
        accept: "application/json",
        Authorization: token,
        "X-APP-Key": process.env.BKASH_APP_KEY,
        "content-type": "application/json",
      },
      data: {
        payerReference: `${orderData.data().userId}`,
        mode: "0011",
        callbackURL: "http://localhost:3002/payment/bkash/verify",
        amount: `${totalAmount}`,
        currency: "BDT",
        intent: "sale",
        merchantInvoiceNumber: `${orderId}`,
      },
    };
    try {
      const { data } = await axios.request(options);
      res.redirect(data.bkashURL, 201);
      res.end();
    } catch (error) {
      console.log(error);
    }
  } else {
    return res.status(400).json({ error: "Bad request!" });
  }
}
