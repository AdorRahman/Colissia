import axios from "axios";

async function getBkashToken() {
  const options = {
    method: "POST",
    url: "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/token/grant",
    headers: {
      accept: "application/json",
      username: process.env.BKASH_USERNAME,
      password: process.env.BKASH_PASSWORD,
      "content-type": "application/json",
    },
    data: {
      app_key: process.env.BKASH_APP_KEY,
      app_secret: process.env.BKASH_APP_SECRET,
    },
  };
  try {
    const { data } = await axios.request(options);
    return data.id_token;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { getBkashToken };
