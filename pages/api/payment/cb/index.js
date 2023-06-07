var https = require("https");
import admin from "../../../../lib/firebaseAdmin";

const db = admin.firestore();

function ProcessRequest(options, data) {
  return new Promise((resolve, reject) => {
    const request = https.request(options, function (result) {
      let chunks = [];
      result.on("data", function (chunk) {
        chunks.push(chunk);
      });
      result.on("end", function (chunk) {
        resolve(JSON.parse(chunks));
      });
      result.on("error", function (error) {
        reject(error);
      });
    });
    request.write(data);
    request.end();
  });
}
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
    const totalAmount = orderData.data().totalAmount;

    if (!totalAmount) {
      return res.status(400).json({ error: "Invalid data!" });
    }

    const postData = JSON.stringify({
      password: "123456Aa",
      userName: "test",
    });
    const options = {
      hostname: "sandbox.thecitybank.com",
      port: 7788,
      path: "/transaction/token",
      method: "POST",
      key: `-----BEGIN RSA PRIVATE KEY-----\nMIIEpQIBAAKCAQEAus25dn8Ei08uv975bRD+jX0AGKy0H1sMKauJ+LtM9evZhAczazz7690LmN3RMnj06nIiWuLMFXNgf5THJDyQqlLgxUgh+OHVM4dLrsoVxewA9oCaU3LU2QUubszWvBtr5IIZDvBwO96HdP0CtkhYHLImYp8XQhl+DkDLiFWwqHB7vEiXRjNvJkf/xhnpZ4yGa7GQZt5zWYILowdwYBl7txm33jQaokS5gUadA6KeQpQMRKbvlpyUw/xsi70mSbFot65okFNOdFtm9bPmdpernzi2rwpgSIVxL7oKswlNnCn6rlam/XC450Al9CLZqP7TTyZw49Ox2wASrd4PNU5OIQIDAQABAoIBAQCHmBr+Y3aV9HUXuy9MNuC/LTPrtTjN5dXvTV/KF5LmkzsBdgSh29N1Qq9PV/uo6lnE7/H2DNhc3bH3CbR/niLYL26OZSybrrmGPLf3+SJS11tfkrvyxNCxcuxgavmX80Oey7yKtoaRPpcOmTTlwZ+LvNjWD2rfhQeWKvxSSvj/Wd+MhwTrhVT9A3xc1QPBEMZSdRGskO96yRWvj1vL9QnDXPsevTOGBv2zRewBRM7zIXoRoieUzPoTp+rsR3+RsdYg46KxboG8uDmjygekmJ0RtAKogZSAzPz0UECt2v6r+6e3n6OgYfzCbN+gGjDamBr03RJ86Rby/XK4ktzYPD4RAoGBAPLvIGix4YER4BrMRi0ZAXlRPn8dn2byRea2bJ4lFQNAWiaJ35Hmg+rp7qTzVmCfh4Q4FKGo17phbm2SMXwCQYJpfOICFeCpelaU7fPj52Wsw7G65TGHyv5Hkn/W4/87xIzMjQtd53tVOpLX1oWUqKGzn60lDrGochdv8serA0PFAoGBAMTZwdilUvHA3Kn/xCMUt4QO/uXcJTDAPaHiCRAyLTnDPcf5VXl1rcTa0WplgMSJ9rxOvYhDg38K5Yb3xHYqDAQPk4+1hfg6gwFiobDGucHSDhpaVPmdU53OVU+/7sHUcepvBW/yh9RuYe4zvvxENGldXChv7bDFxFG7ao8MUZqtAoGBANFA/vaPekHWJuaOXEhOSMG6JI4T8xEW0PU433idUms5jC20BvrCx5CarjAxVo7l+zH9qG/TYvctI5SIH83El68AtExtJXEeKr3XjNvOzKv805gM94zhfg3nkp5BeKSKU/Q/4aIP4euPb2O7PRJVCag3c+wNhomrIZNkn4gzmx1NAoGBAJiw3EcC/hKd6cxHo0ke4baitx9vIr3s8CGopiUU9rWudzatdZqQKGjg3r2r3DUXWvb4ENYooFAkEKQffhm2RbnEp046nJ9OK54gdpEbpKzuFZhlZzJz0Y8/pDcHBtj8xBv3X/1U3/1sXbQaGVOuSAVOsJSBNZr/3GcVe/NXt9jFAoGAWGc0uPWp7ljs01/dy2mDZErbUK9msSAWTrGSTfOVZeXpW7pm7Y0IF+Ps9jFBnR3tBialBreYClX8RzzqV+s+a8daBnW4TNq5ncL4eJRT8vLOV9hFrnjygn4pbNkkBtevhUnp+8qwDV6MEi8F1gdY8HCwiZskQHaa3LZLw95FjPI=\n-----END RSA PRIVATE KEY-----`,
      cert: `-----BEGIN CERTIFICATE-----\nMIIDdzCCAl8CAU0wDQYJKoZIhvcNAQEFBQAwgasxCzAJBgNVBAYTAkJEMQ4wDAYDVQQIDAVEaGFrYTEOMAwGA1UEBwwFRGhha2ExHjAcBgNVBAoMFVRoZSBDaXR5IEJhbmsgTGltaXRlZDELMAkGA1UECwwCSVQxIDAeBgNVBAMMF3NhbmRib3gudGhlY2l0eWJhbmsuY29tMS0wKwYJKoZIhvcNAQkBFh5yYXNoZWR1bC5oYXNhbkB0aGVjaXR5YmFuay5jb20wHhcNMTkwMjIwMDkxMjIyWhcNMjkwMjE3MDkxMjIyWjBXMQswCQYDVQQGEwJCRDEMMAoGA1UECBMDREhLMQwwCgYDVQQHEwNESEsxDDAKBgNVBAoTA0NCTDELMAkGA1UECxMCSVQxETAPBgNVBAMTCDExMTIyMzMzMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAus25dn8Ei08uv975bRD+jX0AGKy0H1sMKauJ+LtM9evZhAczazz7690LmN3RMnj06nIiWuLMFXNgf5THJDyQqlLgxUgh+OHVM4dLrsoVxewA9oCaU3LU2QUubszWvBtr5IIZDvBwO96HdP0CtkhYHLImYp8XQhl+DkDLiFWwqHB7vEiXRjNvJkf/xhnpZ4yGa7GQZt5zWYILowdwYBl7txm33jQaokS5gUadA6KeQpQMRKbvlpyUw/xsi70mSbFot65okFNOdFtm9bPmdpernzi2rwpgSIVxL7oKswlNnCn6rlam/XC450Al9CLZqP7TTyZw49Ox2wASrd4PNU5OIQIDAQABMA0GCSqGSIb3DQEBBQUAA4IBAQAlSIf0r9R7B+lh1DPtonEnQmEzI+uKId07LGzqjdcId7CoN6v08Vo5YWVdDfOifi1hEyxctDyafhg6TTGhUQhkDy2qPYydvu7Xs5VkgTh45RhrwbYv8bEg5m4UsIXRxh5RD3tTeRcePthDTVZgBqMvLW1LhVQlCRRi/7mCBYMyxa5y/OmHYZQ512uCN+83iutj4KYT676j0FviT1xnbgWmUR9TFsL6cPj6H7eJXHnTjaEZplPLDRNPaFN6mbopvCtmyB0jeF5O1JbM95a1WQc42vkLbHUQSZq7C435P4GarrXhRno5GD33jBPhNodFQxZTonluHmxFwoY/9YVMuKj9\n-----END CERTIFICATE-----`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { transactionId } = await ProcessRequest(options, postData);

    const postDataEcom = JSON.stringify({
      merchantId: "11122333",
      amount: "100",
      currency: "050",
      description: orderId,
      approveUrl: "http://localhost:3000/api/payment/cb/approve",
      cancelUrl: "http://localhost:3000/api/payment/cb/cancel",
      declineUrl: "http://localhost:3000/api/payment/cb/decline",
      passWord: "123456Aa",
      userName: "test",
      proxy: "",
      proxyauth: "",
      secureToken: `${transactionId}`,
    });
    const optionsEcom = {
      hostname: "sandbox.thecitybank.com",
      port: 7788,
      path: "/transaction/createorder",
      key: `-----BEGIN RSA PRIVATE KEY-----\nMIIEpQIBAAKCAQEAus25dn8Ei08uv975bRD+jX0AGKy0H1sMKauJ+LtM9evZhAczazz7690LmN3RMnj06nIiWuLMFXNgf5THJDyQqlLgxUgh+OHVM4dLrsoVxewA9oCaU3LU2QUubszWvBtr5IIZDvBwO96HdP0CtkhYHLImYp8XQhl+DkDLiFWwqHB7vEiXRjNvJkf/xhnpZ4yGa7GQZt5zWYILowdwYBl7txm33jQaokS5gUadA6KeQpQMRKbvlpyUw/xsi70mSbFot65okFNOdFtm9bPmdpernzi2rwpgSIVxL7oKswlNnCn6rlam/XC450Al9CLZqP7TTyZw49Ox2wASrd4PNU5OIQIDAQABAoIBAQCHmBr+Y3aV9HUXuy9MNuC/LTPrtTjN5dXvTV/KF5LmkzsBdgSh29N1Qq9PV/uo6lnE7/H2DNhc3bH3CbR/niLYL26OZSybrrmGPLf3+SJS11tfkrvyxNCxcuxgavmX80Oey7yKtoaRPpcOmTTlwZ+LvNjWD2rfhQeWKvxSSvj/Wd+MhwTrhVT9A3xc1QPBEMZSdRGskO96yRWvj1vL9QnDXPsevTOGBv2zRewBRM7zIXoRoieUzPoTp+rsR3+RsdYg46KxboG8uDmjygekmJ0RtAKogZSAzPz0UECt2v6r+6e3n6OgYfzCbN+gGjDamBr03RJ86Rby/XK4ktzYPD4RAoGBAPLvIGix4YER4BrMRi0ZAXlRPn8dn2byRea2bJ4lFQNAWiaJ35Hmg+rp7qTzVmCfh4Q4FKGo17phbm2SMXwCQYJpfOICFeCpelaU7fPj52Wsw7G65TGHyv5Hkn/W4/87xIzMjQtd53tVOpLX1oWUqKGzn60lDrGochdv8serA0PFAoGBAMTZwdilUvHA3Kn/xCMUt4QO/uXcJTDAPaHiCRAyLTnDPcf5VXl1rcTa0WplgMSJ9rxOvYhDg38K5Yb3xHYqDAQPk4+1hfg6gwFiobDGucHSDhpaVPmdU53OVU+/7sHUcepvBW/yh9RuYe4zvvxENGldXChv7bDFxFG7ao8MUZqtAoGBANFA/vaPekHWJuaOXEhOSMG6JI4T8xEW0PU433idUms5jC20BvrCx5CarjAxVo7l+zH9qG/TYvctI5SIH83El68AtExtJXEeKr3XjNvOzKv805gM94zhfg3nkp5BeKSKU/Q/4aIP4euPb2O7PRJVCag3c+wNhomrIZNkn4gzmx1NAoGBAJiw3EcC/hKd6cxHo0ke4baitx9vIr3s8CGopiUU9rWudzatdZqQKGjg3r2r3DUXWvb4ENYooFAkEKQffhm2RbnEp046nJ9OK54gdpEbpKzuFZhlZzJz0Y8/pDcHBtj8xBv3X/1U3/1sXbQaGVOuSAVOsJSBNZr/3GcVe/NXt9jFAoGAWGc0uPWp7ljs01/dy2mDZErbUK9msSAWTrGSTfOVZeXpW7pm7Y0IF+Ps9jFBnR3tBialBreYClX8RzzqV+s+a8daBnW4TNq5ncL4eJRT8vLOV9hFrnjygn4pbNkkBtevhUnp+8qwDV6MEi8F1gdY8HCwiZskQHaa3LZLw95FjPI=\n-----END RSA PRIVATE KEY-----`,
      cert: `-----BEGIN CERTIFICATE-----\nMIIDdzCCAl8CAU0wDQYJKoZIhvcNAQEFBQAwgasxCzAJBgNVBAYTAkJEMQ4wDAYDVQQIDAVEaGFrYTEOMAwGA1UEBwwFRGhha2ExHjAcBgNVBAoMFVRoZSBDaXR5IEJhbmsgTGltaXRlZDELMAkGA1UECwwCSVQxIDAeBgNVBAMMF3NhbmRib3gudGhlY2l0eWJhbmsuY29tMS0wKwYJKoZIhvcNAQkBFh5yYXNoZWR1bC5oYXNhbkB0aGVjaXR5YmFuay5jb20wHhcNMTkwMjIwMDkxMjIyWhcNMjkwMjE3MDkxMjIyWjBXMQswCQYDVQQGEwJCRDEMMAoGA1UECBMDREhLMQwwCgYDVQQHEwNESEsxDDAKBgNVBAoTA0NCTDELMAkGA1UECxMCSVQxETAPBgNVBAMTCDExMTIyMzMzMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAus25dn8Ei08uv975bRD+jX0AGKy0H1sMKauJ+LtM9evZhAczazz7690LmN3RMnj06nIiWuLMFXNgf5THJDyQqlLgxUgh+OHVM4dLrsoVxewA9oCaU3LU2QUubszWvBtr5IIZDvBwO96HdP0CtkhYHLImYp8XQhl+DkDLiFWwqHB7vEiXRjNvJkf/xhnpZ4yGa7GQZt5zWYILowdwYBl7txm33jQaokS5gUadA6KeQpQMRKbvlpyUw/xsi70mSbFot65okFNOdFtm9bPmdpernzi2rwpgSIVxL7oKswlNnCn6rlam/XC450Al9CLZqP7TTyZw49Ox2wASrd4PNU5OIQIDAQABMA0GCSqGSIb3DQEBBQUAA4IBAQAlSIf0r9R7B+lh1DPtonEnQmEzI+uKId07LGzqjdcId7CoN6v08Vo5YWVdDfOifi1hEyxctDyafhg6TTGhUQhkDy2qPYydvu7Xs5VkgTh45RhrwbYv8bEg5m4UsIXRxh5RD3tTeRcePthDTVZgBqMvLW1LhVQlCRRi/7mCBYMyxa5y/OmHYZQ512uCN+83iutj4KYT676j0FviT1xnbgWmUR9TFsL6cPj6H7eJXHnTjaEZplPLDRNPaFN6mbopvCtmyB0jeF5O1JbM95a1WQc42vkLbHUQSZq7C435P4GarrXhRno5GD33jBPhNodFQxZTonluHmxFwoY/9YVMuKj9\n-----END CERTIFICATE-----`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const cbEcom = await ProcessRequest(optionsEcom, postDataEcom);
    const { url, orderId: oID, sessionId } = cbEcom?.items;

    const redirecUrl = `${url}?ORDERID=${oID}&SESSIONID=${sessionId}`;

    const formData = `<form id="PostForm" name="PostForm" action="${redirecUrl}" method="POST" /><script language='javascript'>var vPostForm = document.PostForm;vPostForm.submit();</script>`;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(formData);
    res.end();
  } else {
    return res.status(400).json({ error: "Bad request!" });
  }
}
