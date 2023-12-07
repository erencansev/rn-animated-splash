import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#212a54", // Arka plan rengi
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffff", // Yazı rengi
  },
});

export default HomeScreen;
