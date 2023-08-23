//import packeges
import { Text, View, StyleSheet, Image, Button } from "react-native";
/* import { useNavigation } from "@react-navigation/native"; */

//Import from other files
import api from "../API/Data";

//------------Handelers--------------
//------------Delete item------------
export const deleteItemHandeler = async (id) => {
  try {
    const res = await api.delete("/items/" + id);
    res.json;
    /*     navigation.navigate("SelectedItem"); */
  } catch (error) {
    console.log(error);
  }
};

//------------Uppdate item------------
export const uppdateItemHandler = async (id, price) => {
  try {
    await api.patch("/items/" + id, {
      price: price + 10,
    });
  } catch (error) {
    console.log(error);
  }
};

export const SelectedItem = ({ route }) => {
  const { title, description, price, id } = route.params;

  return (
    <>
      <Image
        style={styles.Image}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg",
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "top",
          alignItems: "start",
          marginLeft: 45,
        }}
      >
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.price}>{price} kr</Text>
        <Text style={styles.infotext}>{description}</Text>
        <Button
          title="Buda 10 kr"
          onPress={() => uppdateItemHandler({ id, price })}
        ></Button>
        <Button title="Buda 100 kr"></Button>
        <Button
          title="Delete post"
          color="red"
          onPress={() => deleteItemHandeler(id)}
        ></Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
  },
  infotext: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 17,
  },
  Image: {
    marginLeft: 45,
    marginTop: 10,
    marginBottom: 10,
    width: "80%",
    height: "40%",
  },
  price: {
    fontSize: 20,
    color: "green",
  },
});
