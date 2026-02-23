import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from "../commons/constants";

 export const stylesGlobal = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
    backgroundColor: PRIMARY_COLOR
  },
  title: {
    fontSize: 28,
    fontStyle: "italic",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 30,
    color: "#fff"
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 20,
    color: TERTIARY_COLOR,
    textAlign: "center"
  },
  image: {
    width: 150,
    height: 150,
    marginHorizontal: "auto"
  },
  card: {
    width: '100%',
    borderRadius: 25,
    padding: 25,
    alignItems: "center",
    marginTop: 10
  },
  input: {
    width: '100%',
    backgroundColor: SECONDARY_COLOR,
    padding: 15,
    borderRadius: 30,
    paddingHorizontal: 20,
    marginBottom: 12,
    borderColor: "#fff",
    borderWidth: 1.5,
    color: '#fff',
  },
  button: {
    width: '100%',
    backgroundColor: TERTIARY_COLOR,
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold"
  },
  link: {
    marginTop: 100,
    textAlign: "center",
    color: "#FFF",
    fontSize: 16
  }
});