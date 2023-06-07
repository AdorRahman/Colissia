const ip = require("ip");
import admin from "../../../../lib/firebaseAdmin";

const SERVER_URL_TEST = "https://shurjotest.com";
const SERVER_URL_PROD = "https://shurjopay.com";
const APP_ENV = "prod"; //test or prod

const db = admin.firestore();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { orderId } = req.query;

    if (!orderId) {
      return res.status(400).json({ error: "Invalid data!" });
    }

    const orderRef = db.collection("orders").doc(orderId);
    const orderData = await orderRef.get();

    if (!orderData.exists) {
      return res.status(400).json({ error: "Invalid data!" });
    }
    // console.log(orderData.data());
    const totalAmount = orderData.data().totalAmount;

    if (!totalAmount) {
      return res.status(400).json({ error: "Invalid data!" });
    }

    const userIP = ip.address();
    const paymentOption = "shurjopay";
    const returnURL =
      "https://curiouscraft.vercel.app/api/payment/shurjopay/confirm";

    const ShurjoConfigTest = {
      merchantName: "curiouscraftcard",
      merchantPass: "CMRLW05UzEtd",
      uniqID: `CCC${orderId}`,
      paymentURL: `${SERVER_URL_TEST}/sp-data.php`,
      decodeURL: `${SERVER_URL_TEST}/merchant/decrypt.php`,
    };
    const ShurjoConfigProd = {
      merchantName: "curiouscrafts",
      merchantPass: "oNm6Wo0qhzRa",
      uniqID: `CCF${orderId}`,
      paymentURL: `${SERVER_URL_PROD}/sp-data.php`,
      decodeURL: `${SERVER_URL_PROD}/merchant/decrypt.php`,
    };

    const ShurjoConfig =
      APP_ENV == "prod" ? ShurjoConfigProd : ShurjoConfigTest;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append(
      "spdata",
      `<?xml version="1.0" encoding="utf-8"?><shurjoPay><merchantName>${ShurjoConfig.merchantName}</merchantName><merchantPass>${ShurjoConfig.merchantPass}</merchantPass><userIP>${userIP}</userIP><uniqID>${ShurjoConfig.uniqID}</uniqID><totalAmount>${totalAmount}</totalAmount><paymentOption>${paymentOption}</paymentOption><returnURL>${returnURL}</returnURL></shurjoPay>`
    );

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    const response = await fetch(ShurjoConfig.paymentURL, requestOptions);

    const data = await response.text();
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  } else {
    return res.status(400).json({ error: "Bad request!" });
  }
}
