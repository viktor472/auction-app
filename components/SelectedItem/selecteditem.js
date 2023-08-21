{
  /*  send id then with that id do a cal funtion wit that id */
}

import { Text, View, StyleSheet, Image, Button } from "react-native";

export const SelectedItem = ({ route }) => {
  const { title, description, price } = route.params;

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
        <Button title="Buda 10 kr"></Button>
        <Button title="Buda 100 kr"></Button>
        <Button
          title="Delete post"
          color="red"
          onPress={() => deleteTaskHandeler(id)}
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
