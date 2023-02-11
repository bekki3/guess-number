import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = (props) =>{
  
  const numberInputHandler = (inputText) =>{
    setEnteredNumber(inputText);
  }

  const resetEnteredNumber = () =>{
    setEnteredNumber("");
  }
  const confirmInputHandler = () =>{
    // console.log(enteredNumber);
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
    return (
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
    );
}
const styles = StyleSheet.create({
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