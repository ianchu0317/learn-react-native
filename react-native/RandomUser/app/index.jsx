import React, {useState} from "react";
import { Text, View, TextInput, Button, Alert, ScrollView} from "react-native";
import Axios from 'axios';

{/*
const UserInput = () => {
  const [number, setNumber] = useState("");
  return (
    <View>
    {/*User input} 
    <TextInput
      style={{height: 40, padding: 5}}
      placeholder="Ingrese la cantidad de usuarios a buscar"
      onChangeText={newNumber => setNumber(newNumber)}
      defaultValue={number}
      />

    {}

    </View>
    
    );
}
*/}
const UserResults = props => {
  return (
    <View>
    <Text>{props.isVisible ? props.users :null}</Text>
    </View>
  );
}

export default function Index() {
  const [numberOfUsers, setNumber] = useState("");
  const apiUrl = "https://randomuser.me/api/";
  let allUsers = [];
  let resultVisible=false;
  
  {/* Sleep function */}
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  {/* Fetch API */}
  async function fetchUsers (){
    try {
      {/* Fetch la cantidad de usuarios que pidieron*/}
      for (let i=1; i<=numberOfUsers; i++){
        const response = await Axios.get(apiUrl);
        const user = response.data.results[0];
        const userName = `${user.name.first} ${user.name.last}`;

        /* ALmacenar data*/
        allUsers.push(
          <View>
            <Text>{userName}</Text>
          </View>
          );
        await sleep(200);
      }    

      resultVisible=true;
      console.log(resultVisible)
      console.log(allUsers);

    } catch(error) {
      console.error(error);
    }
  }


  return (
    <View style={{padding: 10}}>
      <TextInput
      style={{height: 40, padding: 5, borderBlockColor: "#00000"}}
      placeholder="Ingrese la cantidad de usuarios a buscar"
      onChangeText={newNumber => setNumber(newNumber)}
      defaultValue={numberOfUsers}
      /> 

    <Button 
      title="Send"
      onPress={fetchUsers}
    />

    <UserResults isVisible={resultVisible} users={allUsers}/>
    <Text> {resultVisible} </Text>
    </View>
  );
}
