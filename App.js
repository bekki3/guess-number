import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

  let rounds = 0;
  let screen = (              <StartGameScreen showGameScreenHandler={showGameScreenHandler} />
  )
  const showGameScreenHandler = (num)=>{
    setShowGameScreen(!showGameScreen);
    setUserNumber(num);
    console.log(num);
  }
  const showGameOverScreenHandler = (rnd) =>{
    rounds = rnd;
    console.log("showGameOverScreenHandler triggered, rounds: ", rounds);
    setShowGameOverScreen(!showGameOverScreen);
  }


  const [showGameScreen, setShowGameScreen] = useState(false);
  const [showGameOverScreen, setShowGameOverScreen] = useState(false);
  const [userNumber, setUserNumber] = useState(0);

  if(showGameScreen){
    screen = (  
      <GameScreen
        userNumber={userNumber}
        showGameOverScreenHandler={showGameOverScreenHandler}
        showGameScreenHandler={showGameScreenHandler}
      />
    )
  }else if(showGameOverScreen){
    screen = (
      <GameOverScreen
        showGameOverScreenHandler={showGameOverScreenHandler}
        userNumber={userNumber}
        rounds={rounds}
      />
    );
  }else{
    screen = (<StartGameScreen showGameScreenHandler={showGameScreenHandler} />)
  }
      return (
        <LinearGradient colors={["#bdd", "#bdb"]} style={{ flex: 1 }}>
          <StatusBar style="auto" />

          <ImageBackground
            source={require("./assets/dices.jpg")}
            resizeMode="cover"
            style={{ flex: 1 }}
            imageStyle={{ opacity: 0.25 }}
          >
          {screen}
          </ImageBackground>
        </LinearGradient>
      );
  
}

