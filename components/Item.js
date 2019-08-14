import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import itemImage from '../assets/800px-Vietnamobile_Logo.svg.png'

export default function ListItem(props) {
    const { phone, onPress } = props;
    return (
        <TouchableOpacity
            activeOpacity={0.3}
            onPress={onPress}
        >
            <View style={styles.container}>
                <Image source={itemImage} style={styles.itemImage}></Image>
                <View style={styles.content}>
                    <Text style={styles.phoneNumber}>{phone.number}</Text>
                    <Text style={styles.price}>{phone.price}</Text>
                </View>

            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#FFF',
        marginBottom: 10,
    },
    content: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginLeft: 16,

    },
    itemImage: {
        width: 40,
        height: 40,

    },
    phoneNumber: {
        fontWeight: '700',
        fontSize: 16,

    },
    price: {
        fontSize: 12,

    }


});