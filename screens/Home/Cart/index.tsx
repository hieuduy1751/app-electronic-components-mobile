import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CartItem from "./CartItem";

const Cart = ({ navigation }: any) => {
  const mockData = [
    {
      id: 1,
      name: "MacBook Pro 16-inch (2021) ",
      price: 2499,
      image: require("../../../assets/images/macbook16.png"),
      navigation,
    },
    {
      id: 2,
      name: "MacBook Pro 16-inch (2021) ",
      price: 2499,
      image: require("../../../assets/images/macbook16.png"),
      navigation,
    },
    {
      id: 3,
      name: "MacBook Pro 16-inch (2021) ",
      price: 2499,
      image: require("../../../assets/images/macbook16.png"),
      navigation,
    },
    {
      id: 4,
      name: "MacBook Pro 16-inch (2021) ",
      price: 2499,
      image: require("../../../assets/images/macbook16.png"),
      navigation,
    },
    {
      id: 5,
      name: "MacBook Pro 16-inch (2021) ",
      price: 2499,
      image: require("../../../assets/images/macbook16.png"),
      navigation,
    },
    {
      id: 6,
      name: "MacBook Pro 16-inch (2021) ",
      price: 2499,
      image: require("../../../assets/images/macbook16.png"),
      navigation,
    },
  ];
  return (
    <SafeAreaView
      style={{
        width: "100%",
        flex: 1,
        display:"flex",
      }}
    >
      <View
        style={{
          width: "100%",
          paddingHorizontal: 30,
          backgroundColor: "#F4FAFF",
          flex:1,
        }}
      >
        <FlatList
          // style={{ height: "100%", backgroundColor: "red" }}
          data={mockData}
          renderItem={CartItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal={false}
          extraData={{
            navigation,
          }}
        />
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 28,
            }}
          >
            Total
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 28,
            }}
          >
            $
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 60,
            marginVertical: 20,
          }}
        >
          <TouchableOpacity
            style={{
              width: "100%",
              height: 60,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "orange",
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                color: "white",
              }}
            >
              ADD TO CART
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
