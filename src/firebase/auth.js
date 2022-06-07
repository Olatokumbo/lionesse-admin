import { auth } from "./config";

export const signin = async (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const signout = () => {
  return auth
    .signOut()
    .then(() => {})
    .catch((error) => {
      throw new Error(error.message);
    });
};
