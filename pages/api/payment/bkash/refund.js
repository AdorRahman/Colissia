import { getBkashToken } from "@lib/bKash";
import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { paymentId, trxID } = req.body;
    if (!paymentId || !trxID) {
      return res.status(400).json({ error: "Invalid data!" });
    }
    const token = await getBkashToken();
    const options = {
      method: "POST",
      url: "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/payment/refund",
      headers: {
        accept: "application/json",
        Authorization: token,
        "X-APP-Key": process.env.BKASH_APP_KEY,
        "content-type": "application/json",
      },
      data: { paymentId, trxID },
    };
    try {
      const { data } = await axios.request(options);
      if (data.statusCode == "0000") {
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
