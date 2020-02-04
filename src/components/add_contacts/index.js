import React, {useEffect, useState} from 'react'
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {addContact, updateContact} from "../../helper";


const AddContact = ({navigation}) => {

    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        Address: '',
    });

    const [contactId, setContactId] = useState(null);

    const onChange = (key, value) => {

        setFormData({
            ...formData,
            [key]: value,
        })

    }

    useEffect(() => {
        if (navigation.getParam('data') !== undefined) {
            const dd = navigation.getParam('data');
            // alert(JSON.stringify(dd))
            setContactId(dd.Id);
            setFormData({
                ...dd
            })
        }
    }, []);


    const onSubmit = () => {
        if (!validate()) return;
        if (contactId) {
            updateContact(contactId, formData).then(() => {
                alert('contact has been updated successfully');
                clear();
            }).catch(e => {
                console.log(JSON.stringify(e))
            })
        } else {
            for (let key in formData) {
                console.log(key, formData[key])
            }
            addContact(formData).then(() => {
                alert('contact has been added successfully');
                clear();
            }).catch(e => {
                console.log(JSON.stringify(e))
            })
        }

    }
    const validate = () => {
        const rst = formData.FirstName !== '' && formData.LastName !== ''
            && formData.Email !== '' && formData.Address !== '';
        !rst && alert('you have to fill all fields');

        return rst;
    }

    const clear = () => {
        setFormData({
            FirstName: '',
            LastName: '',
            Email: '',
            Address: '',
        })
    }

    return (
        <KeyboardAvoidingView behavior={'position'} keyboardVerticalOffset={-100}
                              contentContainerStyle={styles.mainContainer}>
            <View style={styles.headContainer}>
                <Text style={styles.headText}>{contactId ? 'Update the Contact' : 'Add new Contact'}</Text>
            </View>

            <View style={styles.formContainer}>

                <View style={styles.formTextInputContainer}>
                    <Text style={styles.formTextInputTitle}>First Name *</Text>
                    <TextInput onChangeText={v => {
                        onChange("FirstName", v)
                    }} value={formData.FirstName} style={styles.formTextInput}/>
                </View>
                <View style={styles.formTextInputContainer}>
                    <Text style={styles.formTextInputTitle}>Last Name *</Text>
                    <TextInput onChangeText={v => {
                        onChange("LastName", v)
                    }} value={formData.LastName} style={styles.formTextInput}/>
                </View>
                <View style={styles.formTextInputContainer}>
                    <Text style={styles.formTextInputTitle}>Email *</Text>
                    <TextInput onChangeText={v => {
                        onChange("Email", v)
                    }} value={formData.Email} style={styles.formTextInput}/>
                </View>
                <View style={styles.formTextInputContainer}>
                    <Text style={styles.formTextInputTitle}>Address *</Text>
                    <TextInput onChangeText={v => {
                        onChange("Address", v)
                    }} value={formData.Address} style={styles.formTextInput}/>
                </View>

                <View style={styles.formBtns}>

                    <TouchableOpacity style={styles.formClearBtn} onPress={clear}>
                        <Text style={styles.formBtnText}>Clear</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.formSubmitBtn} onPress={onSubmit}>
                        <Text style={styles.formBtnText}>{contactId ? 'update' : 'submit'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    headContainer: {
        width: "100%",
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: "black"

    },
    headText: {
        fontSize: 20,
        textAlign: "center"
    },
    formContainer: {
        width: '90%',
        paddingHorizontal: 10,
        paddingVertical: 10,

        marginVertical: 20
    },

    formTextInputContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
        backgroundColor: '#ffffff',

    },
    formTextInputTitle: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 17
    },
    formTextInput: {
        fontWeight: '100',
        marginLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: "grey"
    },

    formBtns: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: "center"
    },
    formClearBtn: {
        backgroundColor: '#7db8ff',
        width: '40%',
        paddingVertical: 10,
        marginRight: 10,
    },
    formSubmitBtn: {
        backgroundColor: '#5683ff',
        width: '40%',
        paddingVertical: 10
    },
    formBtnText: {
        textAlign: 'center',
        color: 'white'
    }
})


export default AddContact;
