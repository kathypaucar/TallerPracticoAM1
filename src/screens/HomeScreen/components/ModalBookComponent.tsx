import React, { useState } from "react";
import {
  Image,
  Modal,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { Book } from "../PantallaHomeScreen";
import { stylesGlobal } from "../../../theme/appTheme";
import { TERTIARY_COLOR } from "../../../commons/constants";
import Icon from "@expo/vector-icons/MaterialIcons";

interface Props {
  isVisible: boolean;
  item: Book;
  hiddenModal: () => void; //funcion para acrualizar el estado del modal
  changeStockBooks: (id: number, quantity: number) => void; //funcion para actualizar el carrito
}

export const ModalBookComponent = ({
  isVisible,
  item,
  hiddenModal,
  changeStockBooks,
}: Props) => {
  const { width } = useWindowDimensions();

  //hook useState para gestionar el valor de la cantidad
  const [quantity, setQuantity] = useState<number>(1);

  //funcion para agregar al acrrito
  const handleAddCart = () => {
    //llamamos la funcion para actualizar el stock
    changeStockBooks(item.id, quantity);
    //cerrar model
    hiddenModal();
    //reiniciar la cantidad
    setQuantity(1);
  };
  return (
    <Modal visible={isVisible} animationType="fade" transparent={true}>
      <View style={stylesGlobal.containerModal}>
        <View style={{ ...stylesGlobal.bodyModal, width: width * 0.9 }}>
          <View style={stylesGlobal.headerModal}>
            <Text style={stylesGlobal.titleModal}>
              {item.name} - ${item.price.toFixed(2)}
            </Text>
            <View style={stylesGlobal.iconCart}>
              <Icon name="cancel" size={23} color={TERTIARY_COLOR}
              onPress={hiddenModal}/>
            </View>
          </View>
          <View>
            <Image source={{
                uri: item.pathImage,
              }}
              style={stylesGlobal.imageModal}/>
          </View>
          {item.stock == 0 ? (
            <Text> Libro agotado </Text>
          ) : (
            <>
              <View style={stylesGlobal.containerQuantity}>
                <TouchableOpacity
                style={stylesGlobal.buttonQuantity}
                  onPress={() => setQuantity(quantity - 1)}
                  disabled={quantity == 1}
                >
                  <Text style={stylesGlobal.buttonQuantityText}>-</Text>
                </TouchableOpacity>
                <Text>{quantity}</Text>
                <TouchableOpacity
                style={stylesGlobal.buttonQuantity}
                  onPress={() => setQuantity(quantity + 1)}
                  disabled={quantity == item.stock}
                >
                  <Text style={stylesGlobal.buttonQuantityText}>+</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text style={stylesGlobal.textTotalPrice}>Total: ${(item.price * quantity).toFixed(2)}</Text>
              </View>
              <TouchableOpacity style={stylesGlobal.button} onPress={handleAddCart}>
                <Text  style={stylesGlobal.buttonText}>Agregar Carrito</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};
