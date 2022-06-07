import { firestore } from "./config";

/**
 * Finds a user by its Id
 * @param userId
 */
export const getUserById = async (id) => {
  try {
    const snapshot = await firestore.collection("users").doc(id).get();
    if (!snapshot.exists) return null;
    return snapshot.data();
  } catch (error) {
    throw error;
  }
};
