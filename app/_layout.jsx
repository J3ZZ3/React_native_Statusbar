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
  ImageBackground
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground
        style={{ width: "100%", height: "100%", resizeMode: "cover" }} 
        onLoadStart={() => console.log("Loading")}
        onLoadEnd={() => console.log("Loaded")}
        source={{uri:"https://i.pinimg.com/736x/59/54/61/59546197baae43e5cd4612bbe1d4424d.jpg" }}>
<ScrollView contentContainerStyle={styles.ScrollView}>

<Text style={styles.title}>Form</Text>
<View style={styles.form}>
<TextInput 
style={styles.input} 
placeholder="First Name" 
placeholderTextColor={"white"}  
onChangeText={(text) => {console.log(text)}}/>
</View>
<View style={styles.form}>
<TextInput 
style={styles.input} 
placeholder="Last Name" 
placeholderTextColor={"white"}  
onChangeText={(text) => {console.log(text)}}/>
</View>
<View style={styles.form}>
<TextInput 
style={styles.input} 
placeholder="Age" 
placeholderTextColor={"white"}  
onChangeText={(text) => {console.log(text)}}/>
</View>
<View style={styles.form}>
<TextInput 
style={styles.input} 
placeholder="Phone Number" 
placeholderTextColor={"white"}  
onChangeText={(text) => {console.log(text)}}/>
</View>
<View style={styles.form}>
<TextInput 
style={styles.input} 
placeholder="Email" 
placeholderTextColor={"white"}  
onChangeText={(text) => {console.log(text)}}/>
</View>
<View style={styles.form}>
<TextInput 
style={styles.input} 
placeholder="Password" 
placeholderTextColor={"white"}  
onChangeText={(text) => {console.log(text)}}/>
</View>
<View style={styles.form}>
<TextInput 
style={styles.input} 
placeholder="Confirm Password" 
placeholderTextColor={"white"}  
onChangeText={(text) => {console.log(text)}}/>
</View>
<View style={styles.form}>
<TextInput 
style={styles.input} 
placeholder="House No." 
placeholderTextColor={"white"}  
onChangeText={(text) => {console.log(text)}}/>
</View>
<View style={styles.form}>
<TextInput 
style={styles.input} 
placeholder="Street Name" 
placeholderTextColor={"white"}  
onChangeText={(text) => {console.log(text)}}/>
</View>
<View style={styles.form}>
<TextInput 
style={styles.input} 
placeholder="City" 
placeholderTextColor={"white"}  
onChangeText={(text) => {console.log(text)}}/>
</View>
<View style={styles.form}>
<TextInput 
style={styles.input} 
placeholder="Province" 
placeholderTextColor={"white"}  
onChangeText={(text) => {console.log(text)}}/>
</View>
<Pressable style={styles.button}>
  <Text style={styles.buttonText}>Press Here</Text>
</Pressable>
<StatusBar backgroundColor="#010789" style='light'/>
</ScrollView>
</ImageBackground>
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
  ScrollView: {
    gap:15,
    paddingVertical:20
      },
      title: {
        color: "white",
        fontSize: 24,
        fontWeight: "700",
        marginTop: 20,
        textAlign: "center",
        alignItems: "center"
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
    })

