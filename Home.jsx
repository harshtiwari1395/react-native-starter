
import React, { useState } from "react";
import { StyleSheet, Text,Button,  TouchableHighlight, View, Modal ,Alert,Pressable ,TouchableOpacity} from "react-native";

const TouchableHighlightExample = (props) => {
  const [count, setCount] = useState(0);
  const [show, setShow]= useState(false);
  const onPress = () => setCount(count + 1);
  const { navigation } = props
  return (
    <View style={styles.container}>
         <View style={styles.countContainer}> <Text >{count}</Text></View>
                <Button
        title="Press me"
        onPress={onPress}
      />
      <View><br/></View>
                      <Button
        title="Press me too"
        onPress={()=>setShow(!show)}
      />
     
             <Modal
        animationType="slide"
        
        visible={show}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setShow(show=>!show);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setShow(show=>!show)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <br/>
            <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Another')}>
        <Text style={styles.buttonText}>Go to Detail Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  countText: {
    color: "#FF00FF"
  }
});

export default TouchableHighlightExample;