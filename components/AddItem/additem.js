import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
  Text,
} from "react-native";

export function AddItem() {
  const [titel, onChangeTitel] = useState("");
  const [price, onChangePrice] = useState("");
  const [description, onChangeDescription] = useState("");

  const newitem = async () => {
    try {
      api.post("/items", {
        titel: titel,
        description: description,
        price: price,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <SafeAreaView style={styles.subcontainer}>
          <Text style={styles.title}>Skapa din annons</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeTitel}
            value={titel}
            placeholder="Titel"
          />
          <TextInput
            style={styles.description}
            onChangeText={onChangeDescription}
            value={description}
            placeholder="Descrition"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePrice}
            value={price}
            placeholder="price"
            keyboardType="numeric"
          />
          <Button title="Post" color="black" onPress={() => newitem()} />
        </SafeAreaView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  subcontainer: {
    margin: 100,
    width: "90%",
    height: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4444",
    backgroundColor: "#ffffff",
  },
  title: {
    margin: 20,
    fontSize: 20,
  },
  input: {
    margin: 20,
    padding: 15,
    width: 200,
    height: 20,
    textAlign: "center",
    backgroundColor: "#edf2f4",
  },
  description: {
    margin: 10,
    padding: 5,
    width: 200,
    height: 100,
    backgroundColor: "#edf2f4",
  },
  presbutton: {
    color: "black",
  },
});

/*  
  
  how to read
  const [item, setItem] = useState([]); 

  const getAd = async () => {
    try {
      const response = await api.get('/items');
      setItem(response.data);
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(()=>{
    getAd(setItem);
  },[]);

*/
