import { Text, View, StyleSheet, Alert} from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
const generateRandomBetween = (min, max, exclude)=>{
    const randomNum = Math.floor(Math.random()*(max-min)) + min;

    if(randomNum === exclude){
      return generateRandomBetween(min, max, exclude);
    }else{
        return randomNum;
    }
}

let minBoundary= 1;
let maxBoundary=100;

const GameScreen = ({userNumber})=>{
    const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    if(userNumber===currentGuess){
        console.log("Game Over!");
    }
    const nextGuessHandler= (direction)=>{
        
        if((direction === "lower" && currentGuess<userNumber)||direction==="greater" && currentGuess > userNumber)
        {
            Alert.alert("", "Don't lie bro...", [
                {
                  text: "Sorry!",
                  style: "destructive",
                },
              ]);
            return;
        }
        if(direction==="lower"){
            maxBoundary = currentGuess;
        }else{
            minBoundary = currentGuess + 1;
        }
        console.log(minBoundary, maxBoundary);
        const newRandomNum = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRandomNum);
    }

    return (
        <View style={styles.body}>
            <Text style={styles.title}>Opponent's Guess</Text>
            <Text>{currentGuess}</Text>
            <View>
                <Text>Higher or Lower?</Text>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>+</PrimaryButton>
                </View>
                
            </View>
            <View>
                <Text>Log Rounds</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    body: {
        padding: 20,
        flex: 1,
        justifyContent: "center"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ddb52f",
        borderWidth: 2,
        borderRadius: 12,
        borderColor: "#ddb52f",
        textAlign:"center",
        padding: 12,
    },
    buttonContainer: {
        flexDirection: "row"
    }
})
export default GameScreen;