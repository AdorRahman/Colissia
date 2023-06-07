export default async function handler(req, res) {
  const API_KEY = "7defa38c06a227a335f81fea3e556946516a441aa0bbc775ea830959";
  try {
    const responce = await fetch(`https://api.ipdata.co/?api-key=${API_KEY}`);
    const ipdata = await responce.json();
    return res.status(200).json(ipdata);
  } catch (error) {
    return res.status(400).json({ error: "Something went wromg" });
  }
}
