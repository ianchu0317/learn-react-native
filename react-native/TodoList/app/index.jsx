import { Text, 
  View, 
  StyleSheet, 
  SafeAreaView, 
  Button, 
  Image, 
  Alert} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Axios from 'axios';
import { useState } from "react";


const MyCheckBox = props => {
  return (
  <View style={styles.checkBoxContainer}>
    <BouncyCheckbox
      size={"30"}
      fillColor="yellow"
      unFillColor="#FFFFFF"
      text={props.text}
      iconStyle={{ borderColor: "red" }}
      innerIconStyle={{ borderWidth: 2 }}
      textStyle={{ fontFamily: "JosefinSans-Regular" }}
    />
  </View>);
}

export default function Index() {
  const apiURL = 'https://jsonplaceholder.typicode.com/todos';
  const [taskList, setTasklist] = useState([]);

  // fetch 10 random tasks
  async function fetchTasks(){
    let randomArray = [];
    const response = await Axios.get(apiURL);
    const responseData = response.data;

    // select 10 random tasks from array
    for (let i = 1; i<=10; i++){
      randomArray.push(
        responseData[Math.floor(Math.random()*responseData.length)].title
      );
    }
    // update render values
    setTasklist(randomArray);
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* User Banner and Button */}
      <View style={styles.buttonBox}>
        <Image 
          source={require('../assets/images/productive.png')}
          style={styles.imageBanner} 
        />
        <Button 
          title="Get Random List"
          onPress={async () => {
            Alert.alert("Button Pressed", "User pressed the button");
            await fetchTasks();
          }}
          color={"#30b68f"}
        />
      </View>

      {/* Manage tasks */}
      <View style={styles.taskView}>
        <MyCheckBox text={taskList[0]}/>
        <MyCheckBox text={taskList[1]}/>
        <MyCheckBox text={taskList[2]}/>
        <MyCheckBox text={taskList[3]}/>
        <MyCheckBox text={taskList[4]}/>
        <MyCheckBox text={taskList[5]}/>
        <MyCheckBox text={taskList[6]}/>
        <MyCheckBox text={taskList[7]}/>
        <MyCheckBox text={taskList[8]}/>
        <MyCheckBox text={taskList[9]}/>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b9e5e1"
  },
  taskView: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
  },

  imageBanner:{
    height: "300"
  },
  buttonBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  checkBoxContainer: {
    paddingBlockStart: 2,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center"
  }
});
