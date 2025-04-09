import { useState } from "react";
import { RefreshControl, Text, View, ScrollView} from "react-native";
import Axios from 'axios';

/* PROCEDIMIENTOS
  - Ubicar elementos de UI
    - Texto Inicial
    - Refresh
  - Añadir funcionalidades
    - fetch api
    - actualizar dato
*/ 
export default function Index() {

  const [catFactText, setCatFactText] = useState('Please reload page.');
  const [refreshing, setRefreshing] = useState(false);
  const apiURL = 'https://catfact.ninja/fact';

  // fetch random cat data
  async function fetchCatFact(){
    setRefreshing(true);
    try {
      const response = await Axios.get(apiURL);
      setCatFactText(response.data.fact);
      setRefreshing(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }}
    >
      {/* Scroll y render de usuario*/}
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={fetchCatFact}/>
        }>
        {!refreshing && <Text>{catFactText}</Text>}
        {refreshing && <Text>{catFactText}</Text>}
      </ScrollView>

    </View>
  );
}
