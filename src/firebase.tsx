import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // firebase 설정과 관련된 개인 정보
  apiKey: "AIzaSyDI72qlNmNRaKwuP5xN9EF2_z--uxcFSw8",
  authDomain: "remind-f0305.firebaseapp.com",
  projectId: "remind-f0305",
  storageBucket: "remind-f0305.appspot.com",
  messagingSenderId: "321910204228",
  appId: "1:321910204228:web:ae5c33e7105e721d361911",
  measurementId: "G-R41JC2SYCZ",
};

const firebase = initializeApp(firebaseConfig);

const fireStore = getFirestore(firebase);

const auth = getAuth(firebase);

export { fireStore, auth };
