{
  /* 
<View style={styles.container}>
    <Image
        style={styles.Image}
        source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg',
        }}/>
    <View style={styles.infocontainer}>
        <Text style={styles.infotext}>Fredrik</Text>
        <Text style={styles.infotext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at cursus arcu, vitae convallis felis.</Text>
        <Text style={styles.price}>200 kr</Text>
        </View> 
</View> 
*/
}

import { Text, View, StyleSheet, Image } from "react-native";

export const Item = ({ title, info, price, img }) => {
  return (
    <>
      <View style={styles.container}>
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
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
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
    borderTopStartRadius: 10,
    borderBottomLeftRadius: 10,
  },
  price: {
    color: "green",
  },
});
