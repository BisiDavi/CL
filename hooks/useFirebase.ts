import { onValue, ref, set } from "firebase/database";
import { initializeDB } from "@/utils/firebase_config";

export default function useFirebase() {
  function writeData(data: any, dbNode: string) {
    const db = initializeDB();
    return set(ref(db, dbNode), data);
  }

  function readData(dbNode: string) {
    const db = initializeDB();
    const dataRef = ref(db, dbNode);
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      return data;
    });
  }

  return { writeData, readData };
}
