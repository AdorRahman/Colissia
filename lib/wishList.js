import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function addToWishlist(productId, userId) {
  const wishlist = await getWishlist(userId);
  if (wishlist.includes(productId)) {
    return;
  }
  wishlist.push(productId);
  await setWishlist(userId, wishlist);
}

export async function removeFromWishlist(productId, userId) {
  const wishlist = await getWishlist(userId);
  const index = wishlist.indexOf(productId);
  if (index === -1) {
    return;
  }
  wishlist.splice(index, 1);
  await setWishlist(userId, wishlist);
}

export async function toggleWishlist(productId, userId) {
  const wishlist = await getWishlist(userId);
  const index = wishlist.indexOf(productId);
  if (index === -1) {
    await addToWishlist(productId, userId);
  } else {
    await removeFromWishlist(productId, userId);
  }
}

export async function getWishlist(userId) {
  const userDocRef = doc(db, "users", userId);
  const userDocSnap = await getDoc(userDocRef);
  const userData = userDocSnap.data();
  return userData.wishlist || [];
}

export async function setWishlist(userId, wishlist) {
  const userDocRef = doc(db, "users", userId);
  await updateDoc(userDocRef, {
    wishlist,
  });
}

export async function getWishlistProducts(userId) {
  const wishlist = await getWishlist(userId);
  const products = [];
  for (const productId of wishlist) {
    const productDocRef = doc(db, "products", productId);
    const productDocSnap = await getDoc(productDocRef);
    const productData = productDocSnap.data();
    products.push(productData);
  }
  return products;
}

export async function isProductInWishlist(productId, userId) {
  const wishlist = await getWishlist(userId);
  return wishlist.includes(productId);
}

export async function countWishlistProducts(userId) {
  const wishlist = await getWishlist(userId);
  return wishlist.length;
}
