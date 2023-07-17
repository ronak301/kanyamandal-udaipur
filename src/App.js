import * as React from "react";
import { initializeApp } from "firebase/app";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./Home";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyD9eI1Blt8fUTnxd4u3b1A3DjNIVDqxmqU",
    authDomain: "kanyamandal-udaipur.firebaseapp.com",
    projectId: "kanyamandal-udaipur",
    storageBucket: "kanyamandal-udaipur.appspot.com",
    messagingSenderId: "503386453190",
    appId: "1:503386453190:web:93403d9f94edb6955493c7",
  };

  // Initialize Firebase
  initializeApp(firebaseConfig);
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  );
}

export default App;
