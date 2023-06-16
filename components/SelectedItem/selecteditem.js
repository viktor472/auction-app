


{/*  send id then with that id do a cal funtion wit that id */}




import { Text, View, StyleSheet, Image, } from 'react-native';


export const SelectedItem = ({ route, Item })=>{


    const { title, info, price } = route.params
    return<>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.infotext}>{title}</Text>
          <Text style={styles.infotext}>{info}</Text>
          <Text style={styles.price}>{price} kr</Text>
        </View>
    </>
}

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
  