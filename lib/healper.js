import { useContext } from "react";
import { GlobalContext } from "./globalContext";
import date from "date-and-time";

export const getFileEx = (fname) => {
  return fname.slice(((fname.lastIndexOf(".") - 1) >>> 0) + 2);
};

export const getFileNameWithoutExt = (fname) => {
  return fname.substring(0, fname.lastIndexOf("."));
};

export function formatPrice(value, currency, rate) {
  const { currencyCode, getCurrency } = useContext(GlobalContext);
  const selectedCurrency = currency || currencyCode;
  if (selectedCurrency === "USD") {
    return `$${Number(value).toFixed(2)}`;
  } else {
    const ceilValue = Math.ceil(Number(value) * (rate || getCurrency?.BDT));
    // const mod5 = ceilValue % 5;
    // const extra = mod5 > 0 ? 5 - mod5 : 0;
    return `${ceilValue}৳`;
  }
}

export const convertTimeStamp = (timestamp) => {
  try {
    const dt = new Date(timestamp.toDate().toDateString());
    return date.format(dt, "ddd, MMM DD YYYY");
  } catch (err) {
    const dt = new Date(timestamp);
    return date.format(dt, "ddd, MMM DD YYYY");
  }
};

export const convertServerTimeStamp = (timestamp) => {
  try {
    const dt = new Date(timestamp.toDate().toDateString());
    return date.format(dt, "ddd, MMM DD YYYY");
  } catch (err) {
    const dt = new Date(timestamp._seconds * 1000);
    return date.format(dt, "ddd, MMM DD YYYY");
  }
};

export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getProductPrice = (product) => {
  return Number(product.onSale ? product.salePrice : product.price);
};

export const getCartTotal = (products) => {
  return products.reduce(
    (total, item) => total + Number(item.price) * Number(item.quantity),
    0
  );
};

export const getCalculatedPrice = (price, quantity, pCharge = 0.02) => {
  return (price * pCharge + price) * quantity;
};

export const getPaymentFee = (products, fee, discount = 0) => {
  const cartTotal = getCartTotal(products) - discount;
  const temp = Math.ceil(cartTotal * fee);
  return (temp + cartTotal) * fee;
};

export const getVariantUrl = async (ref) => {
  const product = await db.collection("products").doc(ref).get();
  return `/${product?.category}/${product?.slug}`;
};

export const getRealValue = (val) => +val || val;

export async function fetchPostJSON(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data || {}),
    });
    return await response.json();
  } catch (err) {
    return false;
  }
}

export const dateExpired = (firstDate, secondDate) => {
  if (firstDate.setHours(0, 0, 0, 0) <= secondDate.setHours(0, 0, 0, 0)) {
    return true;
  }
  return false;
};

export const timestampToDate = (timestamp, format = "ddd, MMM DD YYYY") => {
  try {
    const dt = new Date(timestamp);
    return date.format(dt, format);
  } catch (err) {
    return "Error";
  }
};

export function firestoreToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
  };
}

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const customTableStyles = {
  headRow: {
    style: {
      // border: "none",
    },
  },
  headCells: {
    style: {
      color: "#202124",
      fontSize: "14px",
    },
  },
  rows: {
    highlightOnHoverStyle: {
      backgroundColor: "#FEF6FA",
      borderBottomColor: "#FFFFFF",
      outline: "1px solid #FFFFFF",
    },
  },
  pagination: {
    style: {
      // border: "none",
    },
  },
};

function convertToLowercase(value) {
  if (typeof value === "string") {
    return value.toLowerCase();
  } else {
    return value;
  }
}
export const orderBy = (data, value, direction) => {
  if (!value) return data;
  if (direction === "asc") {
    return [...data].sort((a, b) =>
      convertToLowercase(a[value]) > convertToLowercase(b[value]) ? 1 : -1
    );
  }
  if (direction === "desc") {
    return [...data].sort((a, b) =>
      convertToLowercase(a[value]) > convertToLowercase(b[value]) ? -1 : 1
    );
  }
  return data;
};

export const getMinVariant = (variants) => {
  const min = variants.reduce((acc, cur) => {
    return acc.price < cur.price ? acc : cur;
  });
  return min;
};

export const validateCouponCode = (couponCode, cartTotal, uid) => {
  const today = new Date();
  if (couponCode.startDate) {
    const startDate = new Date(couponCode.startDate);
    if (startDate > today) {
      return { error: true, message: "Coupon code is not valid yet!" };
    }
  }
  if (couponCode.endDate) {
    const endDate = new Date(couponCode.endDate);
    if (endDate < today) {
      return { error: true, message: "Coupon code is expired!" };
    }
  }
  if (couponCode.minimumAmount) {
    if (cartTotal < couponCode.minimumAmount) {
      return { error: true, message: "Minimum amount is not reached!" };
    }
  }
  if (couponCode.usageLimit) {
    const totalUsed = couponCode.used || 0;
    if (totalUsed >= couponCode.usageLimit) {
      return { error: true, message: "Coupon code is used up!" };
    }
  }
  if (couponCode.usageLimitPerUser) {
    const usedBy = couponCode.usedBy || [];
    const usageByThisUser = usedBy.filter((uid) => uid === uid).length;
    if (usageByThisUser >= couponCode.usageLimitPerUser) {
      return { error: true, message: "Coupon code is used up!" };
    }
  }
  if (couponCode.type === "percentage") {
    const discount = cartTotal * (couponCode.value / 100);
    return { error: false, discount };
  } else {
    return { error: false, discount: couponCode.value };
  }
};
