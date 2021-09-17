import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, FlatList} from 'react-native';

export default function User({item}) {
    console.log({item});
    return (
        <View style={[styles.userBox, styles.margins, styles.sizes, styles.align]}>
            <Text>
                {item.id} -- {item.name}
            </Text>
        </View>
    );
}

let styles = StyleSheet.create({
    userBox: {
        flex: 2,
        backgroundColor: 'silver'
    },
    margins: {
        marginBottom: '5px',
        padding: '10px'
    },
    sizes: {
        width: '80%',
        height: '100px'
    },
    align: {
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center'
    }
});