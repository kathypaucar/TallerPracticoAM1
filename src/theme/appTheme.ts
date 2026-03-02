import { StyleSheet } from "react-native";
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TERTIARY_COLOR,
} from "../commons/constants";

export const stylesGlobal = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
    padding: 25,
    backgroundColor: PRIMARY_COLOR,
  },
  containerHome: {
    flex: 1,
    padding: 24,
    backgroundColor: PRIMARY_COLOR,
  },
  title: {
    fontSize: 28,
    fontStyle: "italic",
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
    paddingTop: 30,
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 20,
    color: TERTIARY_COLOR,
    textAlign: "center",
  },
  image: {
    width: 150,
    height: 150,
    marginHorizontal: "auto",
  },
  card: {
    width: "100%",
    borderRadius: 25,
    padding: 25,
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    width: "100%",
    backgroundColor: SECONDARY_COLOR,
    padding: 15,
    borderRadius: 30,
    paddingHorizontal: 20,
    marginBottom: 12,
    borderColor: "#fff",
    borderWidth: 1.5,
    color: "#fff",
  },
  button: {
    width: "100%",
    backgroundColor: TERTIARY_COLOR,
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    marginTop: 100,
    textAlign: "center",
    color: "#FFF",
    fontSize: 16,
  },
  iconHome: {
    flex: 1,
    alignItems: "flex-end",
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  textIConCart: {
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 20,
    fontSize: 12,
    fontWeight: "bold",
    paddingHorizontal: 5,
  },
  headerHome: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
  },
  containerModal: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  bodyModal: {
    padding: 25,
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 10,
    marginHorizontal: 'auto'
  },
  headerModal: {
    flexDirection: "row",
    borderBottomColor: "#CFCFCF",
    borderBottomWidth: 1,
    padding: 10,
    gap: 4
  },
  titleModal: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: 'left'
  },
  imageModal: {
    height: 150,
    width: 150,
    marginHorizontal: 'auto',
    objectFit: 'contain',
    marginVertical: 8
  },
  containerQuantity: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonQuantity: {
    backgroundColor: TERTIARY_COLOR,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    margin: 15,
  },
  buttonQuantityText: {
    color: SECONDARY_COLOR,
    fontSize: 20,
    fontWeight: "bold",
  },
  textTotalPrice: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 13,
    textAlign: 'center',
    color: 'green'
  },
  iconCart:{
    marginTop: 2,
    flex: 1,
    alignItems: 'flex-end'
  },
  headerTable:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textDescriptionTable:{
    fontSize: 15,
    fontWeight: 'bold',
    color: PRIMARY_COLOR
  },
  containerTotalPay:{
    alignItems: 'flex-end',
    marginVertical: 15,
  },
  textTotalPay:{
    fontSize: 17,
    fontWeight: 'bold',
    color: 'green'
  },
  containerItem: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginVertical: 8,
    gap: 8,
    borderWidth: 2,
    borderRadius: 8,
    padding: 8,
    borderColor: TERTIARY_COLOR,
  },
  titleItem: {
    fontSize: 18,
    fontWeight: "semibold",
  },
  subtitleItem: {
    fontSize: 16,
    color: "white",
  },
  containerPrice: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    marginTop: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
  priceItem: {
    color: "green",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonCard: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "green",
    color: "white",
    borderRadius: 16,
  },
  imageProduct: {
    width: 100,
    height: 100,
    objectFit: 'contain'
  }
});
