import React from 'react';
import {
    createAppContainer,
    createSwitchNavigator,
} from 'react-navigation';


import Home from './components/home'
import AddContact from './components/add_contacts'
import ShowContact from './components/show_contacts'


export default function RootNavigator() {
    return createAppContainer(createSwitchNavigator({
        Home: Home,
        AddContact: AddContact,
        ShowContact: ShowContact,
    }, {
        initialRouteName: 'Home'
    }))
}
