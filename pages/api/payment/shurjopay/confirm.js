import admin from "../../../../lib/firebaseAdmin";
const parser = require("fast-xml-parser");

const db = admin.firestore();
const decryptionServerUrl = "https://shurjotest.com/merchant/decrypt.php";
const updateOrder = async (data) => {
  const txId = data.txID;
  const orderId = txId?.slice(3);
  const orderRef = db.collection("orders").doc(orderId);
  const orderData = await orderRef.get();
  if (!orderData.exists) {
    return false;
  }
  try {
    const result = await orderRef.update({
      paid: true,
      status: "completed",
      transactionDetails: data,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const cancelOrder = async (data) => {
  const txId = data.txID;
  const orderId = txId?.slice(3);
  const orderRef = db.collection("orders").doc(orderId);
  const orderData = await orderRef.get();
  if (!orderData.exists) {
    return false;
  }
  try {
    const result = await orderRef.update({
      paid: false,
      status: "canceled",
      transactionDetails: data,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { spdata } = req.body;
    if (!spdata) {
      return res.status(400).json({ error: "Bad request!" });
    }

    try {
      const response = await fetch(`${decryptionServerUrl}?data=${spdata}`);
      const xmlData = await response.text();

      if (parser.validate(xmlData) === true) {
        const jsonData = parser.parse(xmlData);
        const { spResponse } = jsonData;
        console.log(spResponse);
        const { spCode, spCodeDes } = spResponse;
        if (spCode === 0 && spCodeDes === "Successful") {
          await updateOrder(spResponse);
          // if (result) {
          //   return res.status(200).json({ success: { data: spResponse } });
          // } else {
          //   return res.status(400).json({ error: "Something went wrong!" });
          // }
        } else {
          await cancelOrder(spResponse);
        }
        res.writeHead(302, {
          'Location': `/payment/verify/${spResponse.txID?.slice(3)}`
        });
        res.end();
      } else {
        return res.status(400).json({ error: "Invalid data!" });
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: "Invalid data!" });
    }
  } else {
    return res.status(400).json({ error: "Bad request!" });
  }
}
