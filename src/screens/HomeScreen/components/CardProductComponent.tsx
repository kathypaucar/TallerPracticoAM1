import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Book } from "../PantallaHomeScreen";
import { ModalBookComponent } from "./ModalBookComponent";
import Icon from "@expo/vector-icons/MaterialIcons";
import { PRIMARY_COLOR, TERTIARY_COLOR } from "../../../commons/constants";
import { stylesGlobal } from "../../../theme/appTheme";

interface Props {
  item: Book;
  changeStockBooks: (id: number, quantity: number) => void;
}

export const CardProductComponent = ({ item, changeStockBooks }: Props) => {
  //hook useState para el estado del modal
  const [showModal, setShowModal] = useState<boolean>(false);

  //funcion para modificar el estado del modal
  const hiddenModal = (): void => {
    setShowModal(!showModal);
  };
  return (
    <View>
      <View style={stylesGlobal.containerItem}>
        <Image
          style={stylesGlobal.imageProduct}
          source={{
            uri: item.pathImage,
          }}
        />
        <View>
          <View>
            <Text style={stylesGlobal.titleItem}>{item.name}</Text>
            <Text style={stylesGlobal.subtitleItem}>{item.autor}</Text>
          </View>

          <View style={stylesGlobal.containerPrice}>
            <Text style={stylesGlobal.priceItem}>${item.price.toFixed(2)}</Text>
            <TouchableOpacity style={stylesGlobal.buttonCard}  onPress={hiddenModal}>
              <Icon
                name="add-shopping-cart"
                size={18}
                color={stylesGlobal.buttonCard.color}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ModalBookComponent
        isVisible={showModal}
        item={item}
        hiddenModal={hiddenModal}
        changeStockBooks={changeStockBooks}
      />
    </View>
  );
};
