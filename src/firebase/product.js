import firebase, { firestore } from "./config";

export const productCreate = (name, brand, minPrice, maxPrice) => {
  return firestore.collection("products").add({
    name,
    brand,
    minPrice,
    maxPrice,
    timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

export const productUpdate = (id, name) => {
  return firestore.collection("products").doc(id).update(name);
};

export const productDelete = (id) => {
  return firestore.collection("products").doc(id).delete();
};
