import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

export default function ({navigation}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => {
                navigation.navigate('ShowContact')
            }}>
                <View>
                    <Text style={styles.btnText}>Show Contacts</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {
                navigation.navigate('AddContact')
            }}>
                <View>
                    <Text style={styles.btnText}>Add Contact</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    button: {
        width: '50%',
        alignItems: 'center',
        backgroundColor: '#4483ff',
        paddingVertical: 12,
        marginBottom: 10
    },
    btnText: {
        color: "#fff",
        fontSize: 15
    }
})
