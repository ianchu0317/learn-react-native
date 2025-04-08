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
  const myUsers = props[1];
  return (
    <View>
      <Text>{myUsers}</Text>
    </View>
  );
}

export default function Index() {

  const [numberOfUsers, setNumber] = useState("");
  const [resultVisible, setResultVisible] = useState(false);
  const [allUsers, setAllUsers] = useState([]);


  {/* Sleep function */}
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };


  /* Fetch API */
  async function fetchUsers(){
    try {
      const apiUrl = "https://randomuser.me/api/?results=" + numberOfUsers;
      const response = await Axios.get(apiUrl);
      let users = [];

      {/* Limpiar data */}
      for (let i=0; i<numberOfUsers; i++){
        const userData = response.data.results[i];
        const userName = `${userData.name.first} ${userData.name.last}`;
        users.push(

          <Text> {userName} {"\n"}</Text>
        );
      }    
      
      /* ALmacenar data */
      setAllUsers(users);

      console.log(allUsers);
    
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <View style={{
      flex: 1,
      padding: 10, 
      justifyContent: "center", 
      alignContent: "center"}}>
      
      <TextInput
      placeholder="Ingrese la cantidad de usuarios a buscar"
      onChangeText={newNumber => setNumber(newNumber)}
      defaultValue={numberOfUsers}
      /> 

      <Button 
        title="Send"
        onPress={async () => {
          setResultVisible(true);
          await fetchUsers();
        }}
      />

    {/* Imprimir resultado de búsqueda */}
    {resultVisible && <ScrollView>
      <Text>{allUsers}</Text>      
    
    </ScrollView>}
    </View>
  );
}
