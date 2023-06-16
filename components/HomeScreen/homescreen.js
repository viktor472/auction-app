import React from "react";
import {
  StyleSheet,
  ScrollView,
  FlatList,
  View,
} from "react-native";
import { DATA } from "../API/Data";
import { Item } from "../API/GetItemList";

export function HomeScreen() {
  return (
    <>
      <ScrollView style={styles.scrollView}>
        <View>
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
            keyExtractor={item => item.id}
          />
        </View>
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
