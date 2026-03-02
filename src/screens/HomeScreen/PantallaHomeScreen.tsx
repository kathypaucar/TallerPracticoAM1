import React, { useState } from 'react';
import { Alert, FlatList, Text, View } from 'react-native';
import { CardProductComponent } from './components/CardProductComponent';
import { ModalCartComponent } from './components/ModalCartComponent';
import { stylesGlobal } from '../../theme/appTheme';
import Icon from '@expo/vector-icons/MaterialIcons';
import { SECONDARY_COLOR } from '../../commons/constants';


export interface Book{
    id: number;
    name: string;
    autor: string;
    price: number;
    stock: number;
    pathImage: string;
}

export interface Cart {
    id: number;
    name: string;
    price: number;
    quantity: number;
    total: number; 
}

export const PantallaHomeScreen = () => {
    //datos de prueba
    const books: Book[] = [
        {id: 1, name: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', price: 13.50, stock: 12, pathImage: 'https://th.bing.com/th/id/R.23cbfb45b8cb98335d8434a1fea25529?rik=NggbOB9GE6XUIQ&pid=ImgRaw&r=0'},
        {id: 2, name: 'Cien años de Soledad', autor: 'Gabriel García Marquéz', price: 11.00, stock: 5, pathImage: 'https://tse2.mm.bing.net/th/id/OIP.-YV7CE9vWmI3-dDs_KS2cAHaJ-?rs=1&pid=ImgDetMain&o=7&rm=3'},
        {id: 3, name: '1984', autor: 'George Orwell', price: 18.40, stock: 6, pathImage: 'https://tse2.mm.bing.net/th/id/OIP.BsKGSymHT_Yo6DyorJWcAgHaKp?rs=1&pid=ImgDetMain&o=7&rm=3'},
        {id: 4, name: 'Orgullo y prejuicio', autor: 'Jane Austen', price: 9.30, stock: 10, pathImage: 'https://th.bing.com/th/id/R.d7b7ee71c8ac3dd4ef2c81f12b685c3e?rik=7UoMa8U1KSBNsQ&pid=ImgRaw&r=0'},
        {id: 5, name: 'El Principito', autor: 'Antoine de Saint-Exupéry', price: 16.99, stock: 13, pathImage: 'https://tse2.mm.bing.net/th/id/OIP.Cb4_JkLC0ur-t15j-woO2AHaKZ?rs=1&pid=ImgDetMain&o=7&rm=3'},
        {id: 6, name: 'Crimen y castigo', autor: 'Fiódor Dostoyevski', price: 13.55, stock: 2, pathImage: 'https://tse4.mm.bing.net/th/id/OIP.oNLERherUqJhuvcHRiiBOAHaLQ?rs=1&pid=ImgDetMain&o=7&rm=3'},
        {id: 7, name: 'La Odisea', autor: 'Homero', price: 12.00, stock: 1, pathImage: 'https://tse2.mm.bing.net/th/id/OIP.SgV2uzvgRr-T4OgablCy9gHaKO?rs=1&pid=ImgDetMain&o=7&rm=3'},
        {id: 8, name: 'Hamlet', autor: 'William Shakespeare', price: 6.90, stock: 4, pathImage: 'https://tse4.mm.bing.net/th/id/OIP.XYiwcSjDuOsgUFmRahFfwwHaLH?rs=1&pid=ImgDetMain&o=7&rm=3'},
        {id: 9, name: 'Matar a un ruiseñor', autor: 'Harper Lee', price: 17.20, stock: 2, pathImage: 'https://th.bing.com/th/id/R.2c99cfb1833edb2a46093ce3eb468427?rik=4FgBrpB2cA3HQg&pid=ImgRaw&r=0'},
        {id: 10, name: 'El Señor de los Anillos', autor: 'J. R. R. Tolkien', price: 8.50, stock: 7, pathImage: 'https://tse1.mm.bing.net/th/id/OIP.9GzxbKnD0gJhS6wW1faVpAHaLU?rs=1&pid=ImgDetMain&o=7&rm=3'},
    ];

    //hook useState para gestionar la informacion de los libros
    const [booksState, setBooksState] = useState<Book[]>(books)

    //hook useState para gestionar el estado del carrito de compras
    const [cart, setCart] = useState<Cart[]>([]);
    

    //hook useState para el estado del modal
    const [showModal, setShowModal] = useState<boolean>(false);

    //funcion que actualiza el estado del modal 
    const hiddenModal = (): void => {
        setShowModal(!showModal);
    }

      //funcion para comprar
      const handleBuy = (): void => {
        //cerrar modal
        hiddenModal();
        setCart([]);
      };

    //funcion para modificar el valor del stock de los libros 
    const changeStockBook = (id: number, quantity: number): void => {
        const bookExist = cart.find(book => book.id === id)
        if(bookExist){
            Alert.alert("Error", "Ya añadiste este producto al carrito")
            return;
        }
        const updateBooks = booksState.map(book => book.id == id
            ? {...book, stock: book.stock - quantity}
            : book);

            //modificar el arreglo de libros
            setBooksState(updateBooks);
            //llamamos a la funcion para añadir libros al carrito
            addBook(id, quantity);
            
    } 

    //funcion para agregar libreos al arreglo del carrito
    const addBook = (id: number, quantity: number): void => {
        const book = booksState.find(book => book.id == id);
        //si no existe el libro
        if(!book){
            return;
        }

        //objeto para agregar al acrrito
        const newCart: Cart = {
            id: book.id,
            name: book.name,
            price: book.price,
            quantity: quantity,
            total: book.price * quantity
        }

        //agregar al arreglo del carrito
        setCart([...cart, newCart]);
    }
    return (
        <View style={stylesGlobal.containerHome}>
            
            <View style={stylesGlobal.headerHome}>
                <Text style={stylesGlobal.title}>Catálogo de Libros</Text>
                <View style={stylesGlobal.iconHome}>
                    <Text style={stylesGlobal.textIConCart}>{cart.length}</Text>
                    <View style={{justifyContent:'flex-end'}}>
                        <Icon name='shopping-cart' 
                        size= {25} 
                        color={SECONDARY_COLOR}
                        onPress={hiddenModal}/>
                    </View>
                </View>
            </View>
            <View>
                <FlatList
                data={booksState}
                renderItem={({item}) => <CardProductComponent item={item} changeStockBooks={changeStockBook}/>}
                keyExtractor={item => item.id.toString()}
                />
            </View>
            <ModalCartComponent 
            isVisible={showModal}
            cart={cart}
            hiddenModal={hiddenModal}
            handleBuy={handleBuy}/>
        </View>
    )
}
