export default async (req, res) => {
  console.log(req);
  res.status(400).json({ error: "Payment failed" });
};
