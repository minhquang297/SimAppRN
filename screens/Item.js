import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class Item extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('phoneNumber')
    }
  };

  render() {
    const { navigation, onAddToCartClick } = this.props;
    const phoneSeller = navigation.getParam('phoneSeller');
    const phonePrice = navigation.getParam('phonePrice');

    return (
      <View style={styles.container}>
        <Text>{phoneSeller}</Text>
        <Text>{phonePrice}</Text>
        <TouchableOpacity onPress={onAddToCartClick}>
          <Text style={styles.cartText}>Mua +</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
  cartText: {
    textTransform: 'uppercase',
    fontSize: 16,
    color: '#2f95dc'
  }
});
