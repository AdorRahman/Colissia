import admin from "@lib/firebaseAdmin";
const db = admin.firestore();

export default async (req, res) => {
  if (req.method === "POST") {
    const { token, orderId, viewCode, paymentDetails } = req.body;
    if (!token || !orderId) {
      return res.status(500).json({
        statusCode: 500,
        message: "Invalid request!",
      });
    }
    if (!viewCode && !paymentDetails) {
      return res.status(500).json({
        statusCode: 500,
        message: "Invalid request!",
      });
    }

    var customer = null;

    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      customer = decodedToken;
    } catch (error) {
      return res.status(400).json({
        statusCode: 400,
        message: "Invalid user!",
      });
    }
    const orderRef = db.collection("orders").doc(orderId);
    const orderData = await orderRef.get();
    if (!orderData.exists) {
      return res.status(400).json({
        statusCode: 400,
        message: "Invalid order!",
      });
    }
    if (orderData.data().userId !== customer.uid && customer.admin !== true) {
      return res.status(400).json({
        statusCode: 400,
        message: "Invalid order!",
      });
    }

    try {
      await orderRef.update({
        ...(paymentDetails && { paymentDetails: paymentDetails }),
        ...(viewCode && { viewCode: true }),
      });
      return res.status(200).json({
        statusCode: 200,
        message: "Success!",
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        statusCode: 400,
        message: "Server error!",
      });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};
