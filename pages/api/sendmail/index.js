const nodemailer = require("nodemailer");
import * as handlebars from "handlebars";
import {
  MAIL_COMPLETED,
  MAIL_CREATE_ACCOUNT,
  MAIL_ON_HOLD,
  MAIL_PROCESSING,
} from "@components/EmailTemplate";
import admin from "@lib/firebaseAdmin";
import {
  convertServerTimeStamp,
  convertTimeStamp,
  getCartTotal,
  getPaymentFee,
} from "@lib/healper";

const db = admin.firestore();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { uid, orderDetails, type } = req.body;
    console.log(orderDetails);
    var transporter = nodemailer.createTransport({
      host: "server275.web-hosting.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      tls: {
        ciphers: "SSLv3",
      },
      auth: {
        user: "orders@curiouscraftltd.com",
        pass: "ProjectCuriousCraft101!",
      },
    });
    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Server is ready to take our messages");
          resolve(success);
        }
      });
    });

    // var transporter = nodemailer.createTransport({
    //   host: "smtp.gmail.com",
    //   port: 465,
    //   secure: true, // true for 465, false for other ports
    //   tls: {
    //     ciphers: "SSLv3",
    //   },
    //   auth: {
    //     user: "avikhandakar",
    //     pass: "gcyulorxjcdpiovm",
    //   },
    // });

    if (!uid || !type) {
      return res.status(500).json({
        statusCode: 500,
        message: "Invalid data!",
      });
    }

    const acceptedType = [
      "create-account",
      "on-hold",
      "processing",
      "completed",
      "canceled",
    ];
    if (!acceptedType.includes(type)) {
      return res.status(500).json({
        statusCode: 500,
        message: "Invalid type!",
      });
    }
    try {
      var userRecord = await admin.auth().getUser(uid);
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({
        statusCode: 500,
        message: error.message,
      });
    }

    const addressRef = db.collection("address").doc(uid);
    const address = await addressRef.get();

    const getSubject = () => {
      if (type == "create-account") {
        return "Hello";
      }
      if (type == "on-hold") {
        return "Your order is on hold";
      }
      if (type == "processing") {
        return "Your order is on processing";
      }
      if (type == "completed") {
        return "Your order is delevered!";
      }
      if (type == "canceled") {
        return "Your order is canceled!";
      }
      return "Mail from Curiouscraft";
    };
    const getTemplate = () => {
      if (type == "create-account") {
        return MAIL_CREATE_ACCOUNT;
      }
      if (type == "on-hold") {
        return MAIL_ON_HOLD;
      }
      if (type == "processing") {
        return MAIL_PROCESSING;
      }
      if (type == "completed") {
        return MAIL_COMPLETED;
      }
      if (type == "canceled") {
        return `<p>Your order has been canceled!</p>`;
      }
      return "Hello there!";
    };

    const template = handlebars.compile(getTemplate());
    const replacements = {
      name: userRecord.displayName,
      year: "2021",
      address: address?.data(),
      ...(orderDetails && {
        createdAt: convertTimeStamp(orderDetails.createdAt.seconds),
      }),
      ...(orderDetails && { orderDetails: orderDetails }),
      ...(orderDetails && { products: orderDetails.products }),
      ...(orderDetails && {
        paymentFee: getPaymentFee(
          orderDetails.products,
          orderDetails.paymentMethod.fee,
          orderDetails.diicount || 0
        ),
        ...(orderDetails && { subtotal: getCartTotal(orderDetails.products) }),
        ...(orderDetails && { coupon: orderDetails.coupon || "" }),
        ...(orderDetails && { discount: orderDetails.discount || 0 }),
      }),
    };
    const htmlToSend = template(replacements);

    var mailOptions = {
      // from: "curiouscraftltd",
      from: '"Curiouscraft" <orders@curiouscraftltd.com>',
      to: userRecord.email,
      subject: getSubject(),
      // attachments: [
      //   {
      //     filename: "Logo-150px.png",
      //     path: "https://colissia.com/wp-content/uploads/2020/09/Logo-150px.png",
      //     cid: "logo",
      //   },
      // ],
      html: htmlToSend,
    };

    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          return console.log(err);
        } else {
          console.log(info);
        }
      });
    });

    return res.status(200).json({ message: "Email send!" });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
