import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import Item from './screens/Item'
import Items from './screens/Items'
import Cart from './screens/Cart'
import Orders from './screens/Orders'
import Settings from './screens/Settings'
const color = {
  ACTIVE: '#147efb',
  INACTIVE: '#CCC'
}
const ItemStack = createStackNavigator({
  Items,
  Item
});
ItemStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => {
    return <Icon name="ios-planet"
      size={36}
      color={focused ? color.ACTIVE : color.INACTIVE}
    />
  }
}
const CartStack = createStackNavigator({
  Cart
});
CartStack.navigationOptions = {
  tabBarLabel: "Cart",
  tabBarIcon: ({ focused }) => {
    return <Icon name="ios-cart"
      size={36}
      color={focused ? color.ACTIVE : color.INACTIVE}
    />
  }
}

const OrderStack = createStackNavigator({
  Orders
});
OrderStack.navigationOptions = {
  tabBarLabel: "Orders",
  tabBarIcon: ({ focused }) => {
    return <Icon name="ios-wallet"
      size={36}
      color={focused ? color.ACTIVE : color.INACTIVE}
    />
  }
}

const SettingStack = createStackNavigator({
  Settings
});
SettingStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => {
    return <Icon name="ios-cog"
      size={36}
      color={focused ? color.ACTIVE : color.INACTIVE}
    />
  }
}

const AppNavigator = createBottomTabNavigator({
  ItemStack,
  CartStack,
  OrderStack,
  SettingStack

});

export default AppNavigator;
