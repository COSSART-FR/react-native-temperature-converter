import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    justifyContent: "center"
  },
  input: {
    backgroundColor: "white",
    height: 50,
    borderRadius: 20,
    paddingLeft: 25,
  },
  unit: {
    position: "absolute",
    fontSize: 35,
    alignSelf: "flex-end",
    paddingRight: 25,
  },
});

export { s };
