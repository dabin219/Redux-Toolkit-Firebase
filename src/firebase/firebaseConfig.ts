import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdvPz6UEBD180hzakLnZmAbI0BLrMnKvk",
  authDomain: "wequilt-6de1f.firebaseapp.com",
  projectId: "wequilt-6de1f",
  storageBucket: "wequilt-6de1f.appspot.com",
  messagingSenderId: "1031601853786",
  appId: "1:1031601853786:web:fe338096782fa051fc4f63",
};

// 초기화
const firebaseApp = initializeApp(firebaseConfig);

// 사용기능 생성 및 export
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export default firebaseApp;
