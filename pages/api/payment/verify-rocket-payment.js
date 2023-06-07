import admin from "../../../lib/firebaseAdmin";

const db = admin.firestore();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { checkoutId, userId, rocketNumber, trxId } = req.body;
    if (!checkoutId || !userId || !rocketNumber || !trxId) {
      return res.status(400).json({ error: "Invalid data!" });
    }

    const orderRef = db.collection("orders").doc(checkoutId);
    const order = await orderRef.get();

    if (!userId == order.userId) {
      return res.status(400).json({ error: "Invalid user!" });
    }

    try {
      const updateOrder = await orderRef.update({
        phoneNumber: rocketNumber,
        transactionID: trxId,
      });
      return res.status(200).json({
        message: {
          checkoutId: checkoutId,
        },
      });
    } catch (error) {
      return res.status(400).json({ error: "Server error!" });
    }
  } else {
    return res.status(400).json({ error: "Bad request" });
  }
}
