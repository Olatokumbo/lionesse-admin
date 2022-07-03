import firebase, { firestore } from "./config";

/**
 * Finds a client by its Id
 * @param userId
 */
export const getClientById = async (userId) => {
  try {
    const snapshot = await firestore.collection("clients").doc(userId).get();
    if (!snapshot.exists) return null;
    return snapshot.data();
  } catch (error) {
    throw error;
  }
};

/**
 * Returns a list of clients
 */
export const clients = async () => {
  let clients = [];
  try {
    const querySnapShot = await firestore.collection("clients").get();
    querySnapShot.forEach((doc) => {
      clients.push(doc.data());
    });
    return clients;
  } catch (error) {
    throw error;
  }
};
/**
 * Gets the Total Number of Clients
 */
export const totalClients = async () => {
  const clients = await firestore.collection("clients").get();
  return clients.size;
};

/**
 * Creates A new Client
 * @param {*} firstName
 * @param {*} lastName
 * @param {*} email
 * @param {*} age
 * @param {*} sex
 * @param {*} callCenter
 * @param {*} clientClass
 * @param {*} memberId
 * @param {*} phone
 */
export const clientCreate = (
  firstName,
  lastName,
  email,
  age,
  sex,
  callCenter,
  clientClass,
  ratings,
  phone,
  address
) => {
  return firestore.collection("clients").add({
    firstName,
    lastName,
    email,
    age,
    sex,
    callCenter,
    clientClass,
    ratings,
    phone,
    address,
    timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

export const clientDelete = (id) => {
  return firestore.collection("clients").doc(id).delete();
};
