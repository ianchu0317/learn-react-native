import { useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";

export default function Index() {
  const [number, setNumber] = useState(0);
  let myArray = [<Text>Testing 1</Text>, <Text>Testing 2</Text>];
  const [buttonPress, setButtonPress] = useState(false);

  function addNumber() {
    setNumber(number + 1);
    {/*myArray.push(number);*/}
  }

  function restNumber() {
    setNumber(number -1);
    {/*myArray.push(number);*/}
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <Button 
        title="Add number"
        onPress={() => setButtonPress(!buttonPress)}
      />
      
      <View>
      <Text>{number}</Text>
      </View>
    
      <Button 
        title="Rest Number"
        onPress={() => setButtonPress(!buttonPress)}
      />

      {buttonPress && <ScrollView>{myArray}</ScrollView>}

    </View>
  );
}
