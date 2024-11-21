import Registration from "../components/Registration";
import Login from "../components/Login";
import CounterClass from "../components/CounterClass";
import CustomInput from "../components/CustomInput";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native-web";

export default function RootLayout() {

  
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [confirmPassword, setConfirmPassword] = useState('')


  // useEffect(() => {
  //   console.log(firstName, lastName, email, password, confirmPassword);
    
  // },[firstName, lastName, email, password, confirmPassword])

  return (
        <Login />
        // <CounterClass /> 

  );
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "black",
//     flex: 1,
//     paddingHorizontal: 20,
//   },
//   bg: {
//     width: "100%",
//      height: "100%",
//   },
//   form: {
//     backgroundColor: '',
//   }
// });
