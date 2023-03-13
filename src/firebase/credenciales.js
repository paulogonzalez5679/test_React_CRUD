import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyC7FdaXAHAz6UpsfYhD0uy8PEoUxHu7J9c",
  authDomain: "usuariosvacunas.firebaseapp.com",
  projectId: "usuariosvacunas",
  storageBucket: "usuariosvacunas.appspot.com",
  messagingSenderId: "704587014886",
  appId: "1:704587014886:web:1ca6d4e1407dc721d89127",
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
//  const auth= firebaseConfig.auth();

// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
// export const db = getFirestore(firebaseApp)
export default firebaseApp;
// export {auth}