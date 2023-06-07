import admin from "@lib/firebaseAdmin";
import * as crypto from "crypto";
const ip = require("ip");

const db = admin.firestore();

const formatKey = (key, type) => {
  if (type === "PRIVATE") {
    return /begin/i.test(key)
      ? key.trim()
      : `-----BEGIN PRIVATE KEY-----\n${key.trim()}\n-----END PRIVATE KEY-----`;
  }
  if (type === "PUBLIC") {
    return /begin/i.test(key)
      ? key.trim()
      : `-----BEGIN PUBLIC KEY-----\n${key.trim()}\n-----END PUBLIC KEY-----`;
  }
};

const genKeys = (publicKey, privateKey) => {
  return {
    publicKey: formatKey(publicKey, "PUBLIC"),
    privateKey: formatKey(privateKey, "PRIVATE"),
  };
};

const baseURL = "https://api.mynagad.com";
// const baseURL = "http://sandbox.mynagad.com:10080";
const merchantID = "686085636097278";
// const merchantID = "683002007104225";
const merchantNumber = "01733723608";
const headers = {
  "X-KM-Api-Version": "v-0.2.0",
};
const returnURL = "https://curiouscraft.vercel.app/api/payment/nagad/confirm";
const priKey =
  "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCaEOuV0JRTLH0ITuNIs7fRphd51JsFoRcnLJIAoZC7Z5kEwH4xX0UVv5TbB8toFtirp8IbeP3mvmXyUu9i/J8LMVmspSg3DlhIRSzC1EUUUEpbsVXYlDFQXisePnQlGbVnQ1g7E74HFglP8EEskE4/Eb2ZbUnhrUbG0muZhTS8wk0TidKZHn2yGB9HzMmLG0WHBcR0kPU3sr2tabyw9BYI8jLxWoZ/2Lw/+/DHpllAkXFZS46Kg+de06QM51Ub5GXAk0pKe5LFmizg0rrRoK4xdetaflk/rIfuUztzdvHif25WaZAz0OjfTb4GcPsJhOmL1BSUuCzlvDRN2BMGYdpFAgMBAAECggEAetZ0z51fNbWp9x7W7teD/18bJqMR+voGuNA7lM880371LSnBM+JO9dkreTuMvXBBzxNRm4/reLdkF0Jy5Yyfzk/JvPJtzv/b+btVxf1zGpAtyU/qL2VwsDB01odbGV2XGj9CsM+72nCCej8H590i1fxyHEtb9divLsUEz4G6m6hcJElUteH8TMQM4RPLtOTOh/ACL5TFjhgONCyc+KpibZzK/CsjH9wno2qteVlcA0NJPR53p2G5v6AaTkVAC0IWwCjVgjsknJdPhtrdvxVF0dUC631W1b/RQXqzLsjVfmktmzhqgSytMzbOFCP4uPRFjEb6jwNqTdKXOHyWz1otHQKBgQDjkh4NiNAqCtghFeAJp9Yz37XuAf5wnndOKVlI5hZaod3vGH+U9BenMZe6N7FtOfFPZV4vRB38asvHmf3VkLz650NABYl2Zb79oSNnJCw+/BNvG/YF/jAVqTfye5GLdHjOnutT+sWyEq/6+g2+84X2f6gnbyFxuolyGa6KKMISTwKBgQCtUBGQosjxrfXQtvmds9Awy1zb+JOZm28P9cCFP0AxDZLoT1P81XJ9uIVbZkteBzUCHtiUtjTrewtxXAUnI6Hjd4phw7hegXSfkCNlj15VnAeOgFP66su3Tv+U3C+XxNKKPI5tt4qSp9oyj21n/QZFdHlNBSVqQHEgL31C3ZwJKwKBgFrZMzwt+QQ/rgaPSBAyu5Wb4nIww5XL/U7rvOQYTqZB5mqT+iLJy0OIzcyefStgrVAH5LCz3dCuBcoaVLZUgM0dU8CUNUtZ1QRFtu9vBmbilROPMwkzb5jGJDqeT/0/MxcxZDrzasbrJOvptWEcsMc2MTgE6nIPiN1PGVm4abmLAoGAbxJef3RkFcdoP5/Ub8Y6idr7Ixq29X3Q+siD3qF/sTBC01FrwSDGZF4qUT5I1PUHetlr8jqnxbawybCwuLm0WcRV0nwNn7uVk2Fb3g245mK90QzbRXbOoicl0zAd7EU+rUtL+HLlg0HBrB+RfVCCgWa5Cqxeoy6zkW39+Clwg8sCgYEAoJK7Miznvjo2i29egqe+jZETOw4kL0WQNA7ALCBns83N0z6srtn4HHGQJ4A8EEdVQUbPbDglVobmsLaP7nD6s6S5o3TEoR+VeXHONxYoanXLPDWaZiS96YoFfWB8ZiwdDK4YDL38X8s/h64AWEZXt6JHWu9ka5Yh+ty+8MMgSR4=";
//Nagad Gateway Server Public Key
const pubKey =
  "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAiCWvxDZZesS1g1lQfilVt8l3X5aMbXg5WOCYdG7q5C+Qevw0upm3tyYiKIwzXbqexnPNTHwRU7Ul7t8jP6nNVS/jLm35WFy6G9qRyXqMc1dHlwjpYwRNovLc12iTn1C5lCqIfiT+B/O/py1eIwNXgqQf39GDMJ3SesonowWioMJNXm3o80wscLMwjeezYGsyHcrnyYI2LnwfIMTSVN4T92Yy77SmE8xPydcdkgUaFxhK16qCGXMV3mF/VFx67LpZm8Sw3v135hxYX8wG1tCBKlL4psJF4+9vSy4W+8R5ieeqhrvRH+2MKLiKbDnewzKonFLbn2aKNrJefXYY7klaawIDAQAB";

// const priKey =
//   "MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCJakyLqojWTDAVUdNJLvuXhROV+LXymqnukBrmiWwTYnJYm9r5cKHj1hYQRhU5eiy6NmFVJqJtwpxyyDSCWSoSmIQMoO2KjYyB5cDajRF45v1GmSeyiIn0hl55qM8ohJGjXQVPfXiqEB5c5REJ8Toy83gzGE3ApmLipoegnwMkewsTNDbe5xZdxN1qfKiRiCL720FtQfIwPDp9ZqbG2OQbdyZUB8I08irKJ0x/psM4SjXasglHBK5G1DX7BmwcB/PRbC0cHYy3pXDmLI8pZl1NehLzbav0Y4fP4MdnpQnfzZJdpaGVE0oI15lq+KZ0tbllNcS+/4MSwW+afvOw9bazAgMBAAECggEAIkenUsw3GKam9BqWh9I1p0Xmbeo+kYftznqai1pK4McVWW9//+wOJsU4edTR5KXK1KVOQKzDpnf/CU9SchYGPd9YScI3n/HR1HHZW2wHqM6O7na0hYA0UhDXLqhjDWuM3WEOOxdE67/bozbtujo4V4+PM8fjVaTsVDhQ60vfv9CnJJ7dLnhqcoovidOwZTHwG+pQtAwbX0ICgKSrc0elv8ZtfwlEvgIrtSiLAO1/CAf+uReUXyBCZhS4Xl7LroKZGiZ80/JE5mc67V/yImVKHBe0aZwgDHgtHh63/50/cAyuUfKyreAH0VLEwy54UCGramPQqYlIReMEbi6U4GC5AQKBgQDfDnHCH1rBvBWfkxPivl/yNKmENBkVikGWBwHNA3wVQ+xZ1Oqmjw3zuHY0xOH0GtK8l3Jy5dRL4DYlwB1qgd/Cxh0mmOv7/C3SviRk7W6FKqdpJLyaE/bqI9AmRCZBpX2PMje6Mm8QHp6+1QpPnN/SenOvoQg/WWYM1DNXUJsfMwKBgQCdtddE7A5IBvgZX2o9vTLZY/3KVuHgJm9dQNbfvtXw+IQfwssPqjrvoU6hPBWHbCZl6FCl2tRh/QfYR/N7H2PvRFfbbeWHw9+xwFP1pdgMug4cTAt4rkRJRLjEnZCNvSMVHrri+fAgpv296nOhwmY/qw5Smi9rMkRY6BoNCiEKgQKBgAaRnFQFLF0MNu7OHAXPaW/ukRdtmVeDDM9oQWtSMPNHXsx+crKY/+YvhnujWKwhphcbtqkfj5L0dWPDNpqOXJKV1wHt+vUexhKwus2mGF0flnKIPG2lLN5UU6rs0tuYDgyLhAyds5ub6zzfdUBG9Gh0ZrfDXETRUyoJjcGChC71AoGAfmSciL0SWQFU1qjUcXRvCzCK1h25WrYS7E6pppm/xia1ZOrtaLmKEEBbzvZjXqv7PhLoh3OQYJO0NM69QMCQi9JfAxnZKWx+m2tDHozyUIjQBDehve8UBRBRcCnDDwU015lQN9YNb23Fz+3VDB/LaF1D1kmBlUys3//r2OV0Q4ECgYBnpo6ZFmrHvV9IMIGjP7XIlVa1uiMCt41FVyINB9SJnamGGauW/pyENvEVh+ueuthSg37e/l0Xu0nm/XGqyKCqkAfBbL2Uj/j5FyDFrpF27PkANDo99CdqL5A4NQzZ69QRlCQ4wnNCq6GsYy2WEJyU2D+K8EBSQcwLsrI7QL7fvQ==";
// const pubKey =
//   "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjBH1pFNSSRKPuMcNxmU5jZ1x8K9LPFM4XSu11m7uCfLUSE4SEjL30w3ockFvwAcuJffCUwtSpbjr34cSTD7EFG1Jqk9Gg0fQCKvPaU54jjMJoP2toR9fGmQV7y9fz31UVxSk97AqWZZLJBT2lmv76AgpVV0k0xtb/0VIv8pd/j6TIz9SFfsTQOugHkhyRzzhvZisiKzOAAWNX8RMpG+iqQi4p9W9VrmmiCfFDmLFnMrwhncnMsvlXB8QSJCq2irrx3HG0SJJCbS5+atz+E1iqO8QaPJ05snxv82Mf4NlZ4gZK0Pq/VvJ20lSkR+0nk+s/v3BgIyle78wjZP1vWLU4wIDAQAB";

const { privateKey, publicKey } = genKeys(pubKey, priKey);
const getDate = () => {
  const now = new Date();
  const day =
    `${now.getDate()}`.length === 1 ? `0${now.getDate()}` : `${now.getDate()}`;
  const hour =
    `${now.getHours()}`.length === 1
      ? `0${now.getHours()}`
      : `${now.getHours()}`;
  const minute =
    `${now.getMinutes()}`.length === 1
      ? `0${now.getMinutes()}`
      : `${now.getMinutes()}`;
  const second =
    `${now.getSeconds()}`.length === 1
      ? `0${now.getSeconds()}`
      : `${now.getSeconds()}`;
  const month =
    now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : `${now.getMonth()}`;
  const year = now.getFullYear();
  return `${year}${month}${day}${hour}${minute}${second}`;
};

const createHash = (string) => {
  return crypto.createHash("sha1").update(string).digest("hex").toUpperCase();
};

const encrypt = (data) => {
  const signerObject = crypto.publicEncrypt(
    { key: publicKey, padding: crypto.constants.RSA_PKCS1_PADDING },
    Buffer.from(JSON.stringify(data))
  );
  return signerObject.toString("base64");
};
const sign = (data) => {
  const signerObject = crypto.createSign("SHA256");
  signerObject.update(JSON.stringify(data));
  signerObject.end();
  const signed = signerObject.sign(privateKey, "base64");
  return signed;
};

const decrypt = (data) => {
  const decrtypted = crypto
    .privateDecrypt(
      { key: privateKey, padding: crypto.constants.RSA_PKCS1_PADDING },
      Buffer.from(data, "base64")
    )
    .toString();
  return JSON.parse(decrtypted);
};

//Confirm payment
const confirmPayment = async (data, clientType) => {
  const { amount, challenge, orderId, paymentReferenceId, productDetails } =
    data;
  const confirmEndpoint = `${baseURL}/api/dfs/check-out/complete/${paymentReferenceId}`;
  // const confirmEndpoint = `${baseURL}/remote-payment-gateway-1.0/api/dfs/check-out/complete/${paymentReferenceId}`;
  const sensitiveData = {
    merchantId: merchantID,
    orderId,
    amount,
    currencyCode: "050",
    challenge,
  };
  const payload = {
    paymentRefId: paymentReferenceId,
    sensitiveData: encrypt(sensitiveData),
    signature: sign(sensitiveData),
    merchantCallbackURL: returnURL,
    additionalMerchantInfo: {
      ...productDetails,
    },
  };
  const result = await fetch(confirmEndpoint, {
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      ...headers,
      "X-KM-IP-V4": ip.address(),
      "X-KM-Client-Type": clientType,
    },
    method: "POST",
  });
  return result.json();
};

//Create payment
const createPayment = async ({
  amount,
  orderId,
  productDetails,
  clientType,
}) => {
  const endpoint = `${baseURL}/api/dfs/check-out/initialize/${merchantID}/${orderId}`;
  // const endpoint = `${baseURL}/remote-payment-gateway-1.0/api/dfs/check-out/initialize/${merchantID}/${orderId}`;
  const timestamp = getDate();
  const sensitive = {
    merchantId: merchantID,
    datetime: timestamp,
    orderId,
    challenge: createHash(orderId),
  };
  const payload = {
    accountNumber: merchantNumber,
    dateTime: timestamp,
    sensitiveData: encrypt(sensitive),
    signature: sign(sensitive),
  };
  const result = await fetch(endpoint, {
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      ...headers,
      "X-KM-IP-V4": ip.address(),
      "X-KM-Client-Type": clientType,
    },
    method: "POST",
  });
  // console.log(await result.json());
  const { sensitiveData } = await result.json();
  console.log(result);

  const decrypted = decrypt(sensitiveData);
  console.log(decrypted);
  const { paymentReferenceId, challenge } = decrypted;
  const confirmArgs = {
    paymentReferenceId,
    challenge,
    orderId,
    amount,
    productDetails,
    ip: ip.address(),
  };
  const { callBackUrl } = await confirmPayment(confirmArgs, clientType);
  return callBackUrl;
};

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { orderId } = req.query;

    if (!orderId) {
      return res.status(400).json({ error: "Invalid data!" });
    }

    const orderRef = db.collection("orders").doc(orderId);
    const orderData = await orderRef.get();

    if (!orderData.exists) {
      return res.status(400).json({ error: "Invalid data!" });
    }
    // console.log(orderData.data());
    const totalAmount = orderData.data().totalAmount;

    if (!totalAmount) {
      return res.status(400).json({ error: "Invalid data!" });
    }

    const URL = await createPayment({
      clientType: "PC_WEB",
      orderId: orderId,
      amount: totalAmount,
    });
    if (URL) {
      return res.redirect(URL);
    } else {
      return res.status(400).json({ error: "Bad request!" });
    }
  } else {
    return res.status(400).json({ error: "Bad request!" });
  }
}
