import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
} from "react-native";
import { DATA } from "../API/Data";
import { Item } from "../API/GetItemList";

export function HomeScreen() {
  return (
    <>
      <ScrollView style={styles.scrollView}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              info={item.info}
              price={item.price}
              img={item.img}
            />
          )}
          keyExtractor={(item) => item.id}
        />

        {/*            <View style={styles.container}>
            <Image
                style={styles.Image}
                source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg',
                }}
            />
                <View style={styles.infocontainer}>
                    <Text style={styles.infotext}>Fredrik</Text>
                    <Text style={styles.infotext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at cursus arcu, vitae convallis felis.</Text>
                    <Text style={styles.price}>200 kr</Text>
                </View>

            </View> */}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    display: "flex",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
    backgroundColor: "#ffffff",
    borderRadius: 20,
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
    borderRadius: 20,
  },
  price: {
    color: "green",
  },
});
