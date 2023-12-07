import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animatable.Image
        source={require("../assets/splash_example2.png")}
        style={styles.logo}
        duration={2000}
        animation={"pulse"}
      />

      <Animatable.Text style={styles.text} duration={2000} animation={"pulse"}>
        Splash
      </Animatable.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#13182e",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  logo: {
    width: 65,
    height: 65,
    marginRight: 8,
  },
  text: {
    color: "white",
    fontSize: 32,
    fontWeight: "700",
  },
});

export default Splash;
