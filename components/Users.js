import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, FlatList} from 'react-native';
import {getUsers} from "../services/api.service";
import User from "./User";


export default function Users() {
  let [users, setUsers] = useState();
  useEffect(() => {
      getUsers().then(
          value => setUsers([...value])
      )
  }, [])

  return (
      <View>
        <FlatList
            data={users}
            renderItem={({item}) => <User item={item}/>}
            keyExtractor={item => `${item.id}`} //key of item in str type
        />
      </View>
  );
}

let styles = StyleSheet.create({

})