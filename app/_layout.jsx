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
  ToastAndroid
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {

  const handlePress = () => {
    Alert.alert(
      'Alert', 'Button Pressed',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
        {text: 'Cancel', style: 'cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Delete', style: 'destructive', onPress: () => console.log('Delete Pressed')},
      ]
  )}

  const handleLongPress = () => {
    ToastAndroid.show('User Long Pressed Button', 5000);
  }
  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground
        resizeMode="cover"
        style={{ width: "100%", height: "100%"  }} 
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
<Pressable style={styles.button}>
  <Text style={styles.buttonText} onPress={handlePress} onLongPress={handleLongPress}>Press Here</Text>
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

