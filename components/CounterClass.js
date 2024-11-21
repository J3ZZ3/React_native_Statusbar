import { Component } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default class CounterClass extends Component {
    constructor () {
super()
        this.state = {
            counter : 0
        }

        this.handleDecrement = this.handleDecrement.bind(this)
        this.handleIncrement = this.handleIncrement.bind(this)

    }

    handleIncrement() {
        this.setState(state => state.counter += 1)

    }

    handleDecrement() {
        this.setState(state => state.counter -= 1)
    }

    render() {
        return(
<SafeAreaView style={styles.container}>
    <View  style={styles.counterCont}>
    <Pressable style={styles.button}>
              <Text style={styles.buttonText} onPress={this.handleDecrement}>
                Minus
              </Text>
            </Pressable>
            <Text style={styles.counterText}>{this.state.counter}</Text>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText} onPress={this.handleIncrement}>
                Add
              </Text>
            </Pressable>
    </View>
</SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
        paddingHorizontal: 20,
      },
    button: {
        backgroundColor: "#306A68",
        padding: 15,
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
      counterCont: {
        flexDirection: 'row',
        gap: 20
      },
      counterText:{
        color: '#BDBDBD',
      }
})
