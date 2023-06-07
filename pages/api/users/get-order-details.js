import admin from "../../../lib/firebaseAdmin";
const db = admin.firestore();
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { token, orderId } = req.body;
    if (!token || !orderId) {
      return res.status(400).json({ error: "Invalid data!" });
    }
    var user = null;
    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      user = decodedToken;
    } catch (error) {
      return res.status(400).json({ error: "Invalid user!" });
    }
    const userId = user.uid;
    const ordersRef = await db.collection("orders").doc(orderId).get();
    if (ordersRef.exists) {
      if (ordersRef.data().userId === userId) {
        return res.status(200).json({ data: ordersRef.data() });
      } else {
        return res.status(400).json({ error: "Invalid user!" });
      }
    } else {
      return res.status(400).json({ error: "Invalid data!" });
    }
  } else {
    return res.status(400).json({ error: "Bad request!" });
  }
}
