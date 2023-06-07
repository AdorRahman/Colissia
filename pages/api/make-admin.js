import admin from "@lib/firebaseAdmin";

export default async (req, res) => {
  if (req.method === "POST") {
    const { email, secret } = req.body;
    if (!email || !secret) {
      return res.status(500).json({
        statusCode: 500,
        message: "Invalid data!",
      });
    }

    if (secret !== process.env.ADMIN_SECRET) {
      return res.status(500).json({
        statusCode: 500,
        message: "Invalid request!",
      });
    }

    try {
      const userRecord = await admin.auth().getUserByEmail(email);
      const roles = userRecord.customClaims || {};
      roles.admin = true;
      await admin.auth().setCustomUserClaims(userRecord.uid, {
        ...roles,
      });
      return res.status(200).json({
        statusCode: 200,
        message: "success",
      });
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({
        statusCode: 500,
        message: err.message,
      });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};
