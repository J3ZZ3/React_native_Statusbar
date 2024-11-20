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
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
        style={{ height: 200}} 
        source={require("../assets/images/adaptive-icon.png")} />
        <Image
        style={{ height: 200,width: 200, resizeMode: "contain" }} 
        source={require("../assets/images/adaptive-icon.png")} />
        <Image
        style={{ height: 200, resizeMode: "repeat" }} 
        source={require("../assets/images/adaptive-icon.png")} />
        <Image
        style={{ height: 200, resizeMode: "cover" }} 
        source={require("../assets/images/adaptive-icon.png")} />
        <Image
        style={{ width: 200, resizeMode: "stretch" }} 
        source={require("../assets/images/adaptive-icon.png")} />
        <Image
        style={{ width: 800, height: 800 , resizeMode: "contain" }} 
        onLoadStart={() => console.log("Loading")}
        onLoadEnd={() => console.log("Loaded")}
        source={{uri:"https://i.pinimg.com/736x/59/54/61/59546197baae43e5cd4612bbe1d4424d.jpg" }} />
      </ScrollView>
      <StatusBar backgroundColor="#010789" style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    paddingHorizontal: 20,
  },
});
