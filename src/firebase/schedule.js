import { firestore } from "../firebase/config";
export const scheduleCreate = (
  locationId,
  clientId,
  facial,
  RF,
  Cocoon,
  EMS
) => {
  return firestore.collection("schedules").add({
    locationId,
    clientId,
    facial,
    RF,
    Cocoon,
    EMS,
  });
};
