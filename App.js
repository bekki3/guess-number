import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {

  const showGameScreenHandler = (num)=>{
    setShowGameScreen(!showGameScreen);
    setUserNumber(num);
    console.log(num);
  }

  const [showGameScreen, setShowGameScreen] = useState(false);
  const [userNumber, setUserNumber] = useState(0);
      return (
        <LinearGradient colors={["#bdd", "#bdb"]} style={{ flex: 1 }}>
          <StatusBar style="auto" />
    
          <ImageBackground
            source={require("./assets/dices.jpg")}
            resizeMode="cover"
            style={{ flex: 1 }}
            imageStyle= {{opacity: 0.25}}
          >
            {!showGameScreen?<StartGameScreen  showGameScreenHandler= {showGameScreenHandler}/>:<GameScreen userNumber={userNumber} />}
            
          </ImageBackground>
        </LinearGradient>
    
      );
  
}

