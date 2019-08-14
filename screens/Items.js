import React from 'react';
import axios from "axios";

import { FlatList, StyleSheet, View } from 'react-native';
import Item from '../components/Item';
export default class Items extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
    this.state = {
      phones: []
    }
  };

  componentDidMount() {
    axios.get('http://c47b8dac.ngrok.io/phones')
      .then(res => {
        this.setState({
          phones: res.data
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    const { navigation } = this.props;
    const { phones } = this.state;
    return (
      <FlatList
        data={phones}
        renderItem={({ item }) =>
          <Item phone={item} onPress={
            () => navigation.navigate('Item',
              {
                phoneNumber: item.number,
                phoneSeller: item.seller,
                phonePrice: item.price,
              })
          } />}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCC',
    alignItems: 'stretch',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
});
