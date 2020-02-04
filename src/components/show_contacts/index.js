import React, {useEffect, useState} from 'react';
import {Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {deleteContact, getContacts} from "../../helper";

const ShowContacts = ({navigation}) => {

    const [contactsList, setContactsList] = useState([]);

    const fetchContacts = () => {
        getContacts().then(res => {
            setContactsList(res.data)
        }).catch(e => {
            alert(JSON.stringify(e))
        })
    }

    const deleteCont = (id) => {

        Alert.alert('Delete Contact', 'Are you sure?', [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            {
                text: 'OK', onPress: () => {
                    deleteContact(id).then(() => {
                            fetchContacts();
                            alert('Contact has been deleted')
                        }
                    ).catch(e => {
                        alert(JSON.stringify(e));
                    })
                }
            },
        ],)
        // deleteContact(id).then(() => {
        //         fetchContacts();
        //         alert('Contact has been deleted')
        //     }
        // ).catch(e => {
        //     alert(JSON.stringify(e));
        // })
    }

    useEffect(() => {
        fetchContacts();
    }, []);


    return (
        <ScrollView contentContainerStyle={styles.mainContainer}>
            {
                contactsList.map(({id, firstName, lastName, email, address}, index) => {
                    return (
                        <View key={"contact_" + index} style={styles.contactCard}>

                            <View style={styles.contactCardContents}>
                                <View style={styles.contactCardItem}>
                                    <Text style={styles.contactCardItemKey}>first Name:</Text>
                                    <Text style={styles.contactCardItemValue}>{firstName}</Text>
                                </View>
                                <View style={styles.contactCardItem}>
                                    <Text style={styles.contactCardItemKey}>lastName:</Text>
                                    <Text style={styles.contactCardItemValue}>{lastName}</Text>
                                </View>
                                <View style={styles.contactCardItem}>
                                    <Text style={styles.contactCardItemKey}>email:</Text>
                                    <Text style={styles.contactCardItemValue}>{email}</Text>
                                </View>
                                <View style={styles.contactCardItem}>
                                    <Text style={styles.contactCardItemKey}>address:</Text>
                                    <Text style={styles.contactCardItemValue}>{address}</Text>
                                </View>


                            </View>
                            <View style={styles.contactCardItemBtns}>
                                <TouchableOpacity style={styles.contactCardItemDlBtn}
                                                  onPress={() => {
                                                      deleteCont(id)
                                                  }}>
                                    <Text style={styles.contactCardItemBtnText}>Delete</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.contactCardItemEdBtn}
                                                  onPress={() => {
                                                      navigation.navigate('AddContact', {
                                                          data: {
                                                              Id: id,
                                                              FirstName: firstName,
                                                              LastName: lastName,
                                                              Email: email,
                                                              Address: address
                                                          }
                                                      })
                                                  }}>
                                    <Text style={styles.contactCardItemBtnText}>Edit</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    )
                })
            }
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    contactCard: {
        width: '90%',
        paddingHorizontal: 20,
        paddingVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
        backgroundColor: '#ffffff',
        marginBottom: 20
    },
    contactCardContents: {
        marginBottom: 10,
    },
    contactCardItem: {
        flexDirection: 'row'
    },
    contactCardItemKey: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 17
    },
    contactCardItemValue: {
        fontWeight: '100',
        marginLeft: 10
    },
    contactCardItemBtns: {
        flexDirection: 'row'
    },
    contactCardItemDlBtn: {
        backgroundColor: 'red',
        width: '40%',
        paddingVertical: 10,
        marginRight: 10,
    },
    contactCardItemEdBtn: {
        backgroundColor: '#5683ff',
        width: '40%',
        paddingVertical: 10
    },
    contactCardItemBtnText: {
        textAlign: 'center',
        color: 'white'
    }
})


export default ShowContacts
