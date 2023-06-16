import { Text, View, StyleSheet, Image, TouchableOpacity, } from "react-native";
import { useNavigation } from '@react-navigation/native';


export const Item = ({ title, info, price, img }) => {

  const navigation = useNavigation();
  return (
    <>
 {/*  send id then with that id do a cal funtion wit that id */}
      <TouchableOpacity activeOpacity={0.9} onPress={()=>{ navigation.navigate('SelectedItem', {title: title, info:info,price:price,})}} style={styles.container}>
        <Image
          style={styles.Image}
          source={{
            uri: img,
          }}
        />
        <View style={styles.infocontainer}>
          <Text style={styles.infotext}>{title}</Text>
          <Text style={styles.infotext}>{info}</Text>
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
