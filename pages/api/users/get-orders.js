import admin from "../../../lib/firebaseAdmin";
const db = admin.firestore();
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { token } = req.body;
    var user = null;
    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      user = decodedToken;
    } catch (error) {
      return res.status(400).json({ error: "Invalid user!" });
    }
    const userId = user.uid;
    let orders = [];
    const ordersRef = await db
      .collection("orders")
      .where("userId", "==", userId)
      .orderBy("createdAt", "desc")
      .get();
    ordersRef.forEach(function (doc) {
      orders.push(doc.data());
    });
    return res.status(200).json({ data: orders });
  } else {
    return res.status(400).json({ error: "Bad request!" });
  }
}
