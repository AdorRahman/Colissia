import admin from "../../../lib/firebaseAdmin";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { token, name, email, password } = req.body;
    if (!token || !name || !email || !password) {
      return res.status(400).json({ error: "Invalid data!" });
    }
    let requestedBy = null;
    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      requestedBy = decodedToken;
    } catch (error) {
      return res.status(400).json({ error: "Invalid user!" });
    }
    if (requestedBy.admin === true) {
      try {
        const userRecord = await admin.auth().createUser({
          email,
          password,
          displayName: name,
        });
        return res.status(200).json({ data: userRecord });
      } catch (error) {
        console.log(error);
        return res.status(400).json({ error: "Bad request!" });
      }
    } else {
      return res.status(400).json({ error: "Access denied!" });
    }
  } else {
    return res.status(400).json({ error: "Bad request!" });
  }
}
