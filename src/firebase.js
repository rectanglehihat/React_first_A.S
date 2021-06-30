//firebase.js
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD6tVrxQdqrFqeEE9TI78QuuKjnjW52KL8",
    authDomain: "sparta-react-24009.firebaseapp.com",
    projectId: "sparta-react-24009",
    storageBucket: "sparta-react-24009.appspot.com",
    messagingSenderId: "970713398260",
    appId: "1:970713398260:web:a5d737665c8adbd46c17a1",
    measurementId: "G-3GEPRHJ999"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };