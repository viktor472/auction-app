{
  /*  send id then with that id do a cal funtion wit that id */
}

import { Text, View, StyleSheet, Image } from "react-native";

export const SelectedItem = ({ route }) => {
  const { title, info, price, img } = route.params;
  return (
    <>
      <Image
        style={styles.Image}
        source={{
          uri: img,
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
        <Text style={styles.infotext}>{info}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    marginTop: 10,
  },
  infotext: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 17,
  },
  Image: {
    marginLeft: 45,
    marginTop: 10,
    width: 350,
    height: 350,
  },
  price: {
    fontSize: 20,
    color: "green",
  },
});
