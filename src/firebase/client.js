import { firestore } from "./config";

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

export const totalClients = async () => {
  const clients = await firestore.collection("clients").get();
  return clients.size;
};
