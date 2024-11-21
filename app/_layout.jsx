import Registration from "../components/Registration";
import Login from "../components/LoginClass";
import CounterClass from "../components/CounterClass";
import CustomInput from "../components/CustomInput";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

export default function RootLayout() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    console.log(email, password);
    
  },[email, password])

  return (
    // <Registration />
        // <Login />
        // <CounterClass /> 
    <SafeAreaView style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
        onLoadStart={() => console.log("Background Loading")}
        onLoadEnd={() => console.log("Background Loaded")}
        source={{
          uri: "https://i.pinimg.com/736x/59/54/61/59546197baae43e5cd4612bbe1d4424d.jpg",
        }}
      >
        <CustomInput name={'Email'} onChange={setEmail}/>
        <CustomInput name={'Password'} onChange={setPassword}/>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    paddingHorizontal: 20,
  }
});
