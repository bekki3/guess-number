import { View, Text, Pressable, StyleSheet } from "react-native"
const PrimaryButton = (props)=> {


    return (
      <View style={styles.outerContainer}>
        <Pressable
          style={styles.innerContainer}
          onPress={props.onPress}
          android_ripple={{ color: "#62002c" }}
        >
          <Text style={styles.buttonText}>{props.children} </Text>
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        borderRadius: 28,
        margin: 5,
        overflow: "hidden", 
    },
    innerContainer: {
        backgroundColor: "#72063c",
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        width: 150,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
    }
})
export default PrimaryButton;