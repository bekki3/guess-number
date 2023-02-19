import { Text, View, StyleSheet, Alert} from "react-native";
import { useState, useEffect } from "react";
import PrimaryButton from "../components/PrimaryButton";
import { AntDesign } from '@expo/vector-icons';

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
let rounds = 0;
const GameScreen = ({userNumber, showGameOverScreenHandler, showGameScreenHandler})=>{
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    
    useEffect(()=>{
        if(userNumber===currentGuess){
            showGameOverScreenHandler(rounds);
            showGameScreenHandler();
            console.log("Game Over!");
        }
    })
    const nextGuessHandler= (direction)=>{
        rounds++;
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
        const newRandomNum = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRandomNum);
    }

    return (
      <View style={styles.body}>
        <Text style={styles.title}>Opponent's Guess</Text>
        <View style={styles.container}>
          <Text style={styles.guessNumber}>{currentGuess}</Text>
          <Text style={styles.buttonText}>Lower or Higher?</Text>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <AntDesign name="down" size={16} color="white" />
            </PrimaryButton>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <AntDesign name="up" size={16} color="white" />
            </PrimaryButton>
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
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ddb52f",
        borderWidth: 2,
        borderRadius: 12,
        borderColor: "#ddb52f",
        textAlign:"center",
        paddingHorizontal: 24,
        paddingVertical: 12,
    },
    buttonContainer: {
        flexDirection: "row"
    },
    container: {
        alignItems: "center",
    },
    guessNumber: {
        padding: 12,
        margin: 28,
        fontSize: 24,
        backgroundColor: "#ddb52f",
        borderRadius: 10,
        color: "#eef",
        fontWeight: "bold",
    },
    buttonText: {
        fontSize: 20,
    }
})
export default GameScreen;