import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, View, SafeAreaView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Item } from "../API/GetItemList";
import api from "../API/Data";

export function HomeScreen() {
  const [item, setItem] = useState([]);

  useFocusEffect(() => {
    const getAd = async () => {
      try {
        const response = await api.get("/items");
        setItem(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAd();

    return () => {
      // cleanup function
    };
  });

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <FlatList
            data={item}
            renderItem={({ item }) => (
              <Item
                title={item.title}
                description={item.description}
                price={item.price}
                img={
                  "https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg"
                }
                id={item._id}
              />
            )}
            keyExtractor={(item) => item._id}
          />
        </View>
      </SafeAreaView>
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
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  price: {
    color: "green",
  },
});
