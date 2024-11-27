import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  ImageBackground,
  Alert,
  ToastAndroid,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import * as NavigatorBar from "expo-navigation-bar";
import CustomInput from "./CustomInput";
import validateInput from "../utils/inputValid";
import { RadioButton, RadioGroup } from "./RadioButton";

export default function Registration() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    console.log(fullName);
    console.log(email);
    console.log(phoneNumber);
    console.log(password);
    console.log(errors);
    
  }, [fullName, email, phoneNumber, password, errors]);

  useEffect(() => {
    NavigatorBar.setBackgroundColorAsync("#010789");
    NavigatorBar.setBorderColorAsync("#BDBDBD");
  }, []);

  const handlePress = () => {
    Alert.alert("Alert", "Button Pressed", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
      {
        text: "Cancel",
        style: "cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => console.log("Delete Pressed"),
      },
    ]);
    console.log(alert);
  };

  const handleLongPress = () => {
    ToastAndroid.show("User Long Pressed Button", 5000);
  };

  handleInput = (type, stateName, value) => {
    setErrors(errors => ({ 
      ...errors, 
      [stateName]: validateInput(type, value) }));
  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
        onLoadStart={() => console.log("Loading")}
        onLoadEnd={() => console.log("Loaded")}
        source={{
          uri: "https://i.pinimg.com/736x/59/54/61/59546197baae43e5cd4612bbe1d4424d.jpg",
        }}
      >
        <ScrollView contentContainerStyle={styles.ScrollView}>
          <CustomInput 
          name={"FullName"} 
          onChange={setFullName}
          onBlur={() => handleInput('string', 'fullName', fullName)}
          error={errors?.fullName?.error}
          />
          <RadioGroup 
          groupName="gender" 
          selectedValue={selectedValue} 
          setSelectedValue={setSelectedValue}>
            <RadioButton label={"Male"} value={"male"} />
            <RadioButton label={"Female"} value={"female"} />
          </RadioGroup>
          <CustomInput 
          name={"Email"} 
          onChange={setEmail}
          onBlur={() => handleInput('email', 'email', email)}
          error={errors?.email?.error}
           />
           <CustomInput 
          name={"PhoneNumber"} 
          onChange={setPhoneNumber}
          onBlur={() => handleInput('number', 'phoneNumber', phoneNumber)}
          error={errors?.phoneNumber?.error}
           />
          <CustomInput 
          name={"Password"} 
          onChange={setPassword} 
          onBlur={() => handleInput('password', 'password', password)}
          error={errors?.password?.error || errors?.password?.errors}
          />
          <Pressable style={styles.button}>
            <Text
              style={styles.buttonText}
              onPress={handlePress}
              onLongPress={handleLongPress}
            >
              Press Here
            </Text>
          </Pressable>
          <StatusBar backgroundColor="#010789" style="light" />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    paddingHorizontal: 20,
  },
  ScrollView: {
    gap: 15,
    paddingVertical: 20,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 20,
    textAlign: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "black",
    color: "white",
    padding: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#306A68",
    padding: 15,
    marginTop: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: 16,
  },
});
