import { Text, StyleSheet, View, Button, Image } from "react-native";
import PrimaryButton from "../components/PrimaryButton";


const GameOverScreen = ({showGameOverScreenHandler, userNumber, rounds})=>{
    return (
      <View style={styles.body}>
        <Text style={styles.title}>Game Over!</Text>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/success_image.png")}
            style={styles.victoryImage}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds to
          guess the number <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={showGameOverScreenHandler}> Go Home! </PrimaryButton>
      </View>
    );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 24,
    color: "#555",
  },
  victoryImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 20,
    overflow: "hidden",
    margin: 50
  },
  summaryText: {
    fontSize: 18,
    margin: 20,
  },
  highlight: {
    fontSize: 24,
    color: "#9e4369",
    fontWeight: "bold"
  }
});
export default GameOverScreen;