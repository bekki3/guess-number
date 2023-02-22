import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Text, useWindowDimensions } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
// console.log(Dimensions.get("screen").height);
const StartGameScreen = (props) =>{
  
  const {width, height} = useWindowDimensions();
  const numberInputHandler = (inputText) =>{
    setEnteredNumber(inputText);
  }
  const resetEnteredNumber = () =>{
    setEnteredNumber("");
  }
  const confirmInputHandler = () =>{
    const chosenNumber = parseInt(enteredNumber);
    if(isNaN(chosenNumber)||chosenNumber<=0||chosenNumber>99)
    {
      Alert.alert("Error!", "Enter number between 1 and 99.", [
        {
          text: "OK",
          style: "destructive",
          onPress: resetEnteredNumber
        },
      ]);
      return;
    }
    else{
      props.showGameScreenHandler(chosenNumber);
    }
  }
  
  const [enteredNumber, setEnteredNumber] = useState("");
  //console.log(width, height);

    return (
      <View style={styles.bodyContainer}>
        <View>
          <Text style={styles.title}>Guess my number!</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.numberInput}
            keyboardType="number-pad"
            maxLength={2}
            autoCorrect={false}
            autoFocus
            value={enteredNumber}
            onChangeText={numberInputHandler}
          />
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetEnteredNumber}>Reset</PrimaryButton>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    );
}
// let deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
    bodyContainer: {
    },
    title: {
      // marginTop: deviceWidth < 700 ? 100 : 20,
      textAlign: "center",
      fontSize:24,
      color: "#8e0329"
    },
    inputContainer: {
        padding: 16,
        margin: 20,
        marginTop: 100,
        backgroundColor: "#4e0329",
        borderRadius: 8,
        elevation: 0,
        alignItems: "center",
    },
    numberInput: {
        height: 100,
        width: 50,
        textAlign: "center",
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 3,
        color: "#ddb52f",
        marginVertical: 8,
        fontWeight: "bold", 

    },
    buttonContainer: {
        flexDirection: "row",
    }
});
export default StartGameScreen;