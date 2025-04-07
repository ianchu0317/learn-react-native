import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {
  const [number, setNumber] = useState(0);

  function addNumber() {
    setNumber(number + 1);
  }

  function restNumber() {
    setNumber(number -1);
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
        onPress={addNumber}
      />
      
      <View>
      <Text>{number}</Text>
      </View>
    
      <Button 
        title="Rest Number"
        onPress={restNumber}
      />

    </View>
  );
}
