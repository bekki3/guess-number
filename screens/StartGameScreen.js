import { TextInput, Pressable, View, StyleSheet } from "react-native";
import PrimaryButton from "../PrimaryButton";
const StartGameScreen = () =>{

    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.numberInput}
          keyboardType="number-pad"
          maxLength={2}
          autoCorrect={false}
          autoFocus
        />
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        margin: 20,
        marginTop: 100,
        backgroundColor: "#72063c",
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