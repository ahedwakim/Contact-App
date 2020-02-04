import React, {Component} from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import RootNavigator from './routes';

class App extends Component {
    render() {
        const Nav = RootNavigator();
        return (
            <View style={styles.containers}>
                <Nav/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containers: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

export default App;
