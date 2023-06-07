export default async function handler(req, res) {
  const API_KEY = "036c51b528a7fbff29de0d3e021edd6d";
  // const { to, amount } = req.query;

  // if (!to || !amount ) {
  //   return res.status(400).json({ error: "Invalid data!" });
  // }

  try {
    const responce = await fetch(
      `http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}`
    );
    const data = await responce.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ error: "Something went wromg" });
  }
}
