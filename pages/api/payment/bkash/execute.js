import { getBkashToken } from "@lib/bKash";
import admin from "@lib/firebaseAdmin";
import axios from "axios";

const db = admin.firestore();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { paymentID } = req.body;
    if (!paymentID) {
      return res.status(400).json({ error: "Invalid data!" });
    }
    //pay
    const token = await getBkashToken();
    const options = {
      method: "POST",
      url: "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/execute",
      headers: {
        accept: "application/json",
        Authorization: token,
        "X-APP-Key": process.env.BKASH_APP_KEY,
        "content-type": "application/json",
      },
      data: { paymentID: paymentID },
    };
    try {
      const { data } = await axios.request(options);
      if (data.statusCode == "0000") {
        const orderRef = db
          .collection("orders")
          .doc(data.merchantInvoiceNumber);
        // const orderData = await orderRef.get();
        await orderRef.update({
          paid: true,
          transactionDetails: data,
        });
        return res.status(200).json({
          data: {
            ...data,
          },
        });
      } else {
        return res.status(400).json({ error: data.statusMessage });
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: "Payment failed!" });
    }
  } else {
    return res.status(400).json({ error: "Bad request!" });
  }
}
