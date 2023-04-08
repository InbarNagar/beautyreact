import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, marginRight, Image } from 'react-native';

const ScreenOne = () => {

    return (
        <View>
            <Text style={style.titleText} >welcome to beauty me</Text>

            <View>
                <Button style={style.BT}  color="#a0522d" title='בעלי עסקים'></Button>
                <Button style={style.BT} title='לקוחות'></Button>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {

    },
    titleText: {
        padding: 50,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "#a0522d"

    },
    BT:{
        color:"#a0522d",
        padding:20,
        borderColor:"#a0522d"
    }
})

export default ScreenOne;