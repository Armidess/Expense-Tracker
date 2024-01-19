import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyB6fKLgYzrzrCBJzBfNxu8I4FSFOgDfhkM",
	authDomain: "expense-tracker-6c86a.firebaseapp.com",
	databaseURL: "https://expense-tracker-6c86a-default-rtdb.firebaseio.com",
	projectId: "expense-tracker-6c86a",
	storageBucket: "expense-tracker-6c86a.appspot.com",
	messagingSenderId: "776313158459",
	appId: "1:776313158459:web:e24021c32a6bf587f8951e",
	measurementId: "G-9PM7W44NTZ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
