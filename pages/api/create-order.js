import admin from "@lib/firebaseAdmin";
import {
  dateExpired,
  formatPrice,
  getCartTotal,
  getPaymentFee,
} from "@lib/healper";
import date from "date-and-time";

const db = admin.firestore();

async function validateProducts(products) {
  var productRef = null;
  try {
    for (let product of products) {
      productRef = await db
        .collection("products")
        .doc(`${product.productId}`)
        .get();
      if (!productRef.exists) {
        console.log("Product not found");
        return false;
      }
      const dbProduct = productRef.data();
      const dbProductVariants = dbProduct.variants.find(
        (p) => p.id == product.selectedVariant.id
      );
      const dbProductPrice =
        dbProductVariants.salePrice || dbProductVariants.price;
      const validateProduct = dbProductPrice === product.price;
      if (!validateProduct) {
        console.log("Product price not match");
        return false;
      }
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
const validateCheckout = async (req) => {
  const { products, paymentMethod, token } = req.body;
  if (!products || !paymentMethod || !token) {
    return false;
  }
  if (paymentMethod.fee < 0.01) {
    return false;
  }
  const isOk = await validateProducts(products);
  return isOk;
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      paymentMethod,
      products,
      couponCodeId,
      token,
      selectedCurrency,
      BDT,
    } = req.body;
    const fee = paymentMethod.fee;
    var user = null;
    var discount = 0;
    var couponData = null;
    const now = new Date();
    const checkoutId = `${date.format(now, "DDMMHHmmssSSS")}`.toUpperCase();

    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      user = decodedToken;
    } catch (error) {
      return res.status(400).json({ error: "Invalid user!" });
    }

    const isOk = await validateCheckout(req);

    if (!isOk) {
      return res.status(400).json({ error: "Invalid checkout!" });
    }

    const cartTotal = getCartTotal(products);
    //Coupon code check
    if (couponCodeId) {
      const couponRef = db.collection("promo").doc(couponCodeId);
      const coupon = await couponRef.get();
      const today = new Date();

      if (coupon.exists) {
        couponData = coupon.data();
        if (couponData.minimumAmount) {
          if (Number(couponData.minimumAmount) > cartTotal) {
            return res.status(400).json({
              error: `Minimum amount for this coupon code is : ${formatPrice(
                couponData.minimumAmount
              )}`,
            });
          }
        }
        if (couponData.start) {
          const startDate = new Date(couponData.start);
          if (!dateExpired(startDate, today)) {
            return res.status(400).json({
              error: `This coupon code will be valid from : ${couponData.start}`,
            });
          }
        }
        if (couponData.end) {
          const endDate = new Date(couponData.end);
          if (dateExpired(endDate, today)) {
            return res.status(400).json({ error: "Expired coupon code!" });
          }
        }
        if (couponData.usageLimit) {
          const usageLimit = Number(couponData.usageLimit);
          const couponTotalUsed = Number(couponData.used);
          if (couponTotalUsed >= usageLimit) {
            return res.status(400).json({ error: "Expired coupon code!" });
          }
        }
        if (couponData.type == "fixed") {
          discount = Number(couponData.discount) || 0;
        } else {
          discount = cartTotal * (Number(couponData.discount) / 100) || 0;
        }
        if (couponData.usageLimitPerUser) {
          const usageLimitPerUser = Number(couponData.usageLimitPerUser);
          const usageByThisUser = couponData.usedBy.filter(
            (uid) => uid === user.uid
          ).length;
          if (usageByThisUser >= usageLimitPerUser) {
            return res
              .status(400)
              .json({ error: "You cant use this coupon code anymore!" });
          }
        }
      } else {
        return res.status(400).json({ error: "Invalid coupon code!" });
      }
    }

    const paymentFee = getPaymentFee(products, fee, discount);
    const TOTAL_AMOUNT = cartTotal + paymentFee - discount;

    try {
      const ref = await db
        .collection("orders")
        .doc(checkoutId)
        .set({
          products: products,
          id: checkoutId,
          totalAmount: TOTAL_AMOUNT.toFixed(2),
          selectedCurrency: selectedCurrency,
          BDT: BDT,
          userId: user.uid,
          userEmail: user.email,
          paymentMethod: paymentMethod,
          createdAt: Date.now(),
          paid: false,
          status: "on-hold",
          couponCodeId: couponCodeId,
          discount: discount,
          new: true,
        });
      if (couponCodeId) {
        const oldUsedBy = couponData.usedBy;
        oldUsedBy.push(user.uid);
        await db
          .collection("promo")
          .doc(couponCodeId)
          .update({
            used: admin.firestore.FieldValue.increment(1),
            usedBy: oldUsedBy,
          });
      }
      const orderRef = db.collection("orders").doc(checkoutId);
      const orderData = await orderRef.get();
      // const sendMail = await fetchPostJSON(
      //   "https://curiouscraft.vercel.app/api/sendmail",
      //   {
      //     type: "on-hold",
      //     uid: user.uid,
      //     orderDetails: orderData?.data(),
      //   }
      // );
      return res.status(200).json({
        data: {
          amount: TOTAL_AMOUNT.toFixed(2),
          id: checkoutId,
          userId: user.uid,
          paymentMethod: paymentMethod,
          couponCodeId: couponCodeId,
          paid: false,
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: "Server error!" });
    }
  } else {
    return res.status(400).json({ error: "Bad request!" });
  }
}
