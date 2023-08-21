import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Item = ({ title, description, price, img, id }) => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          navigation.navigate("SelectedItem", {
            title: title,
            description: description,
            price: price,
            img: img,
            id: id,
          });
        }}
        style={styles.container}
      >
        <Image
          style={styles.Image}
          source={{
            uri: img,
          }}
        />
        <View style={styles.infocontainer}>
          <Text style={styles.infotext}>{title}</Text>
          <Text style={styles.infotext}>{description}</Text>
          <Text style={styles.price}>{price} kr</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    margin: 5,
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
  infocontainer: {
    display: "flex",
    justifyContent: "center",
    paddingLeft: 20,
    width: 250,
  },
  infotext: {
    paddingBottom: 10,
  },
  Image: {
    width: 150,
    height: 150,
  },
  price: {
    color: "green",
  },
});
