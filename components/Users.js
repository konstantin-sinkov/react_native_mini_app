import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import {getUsers} from "../services/api.service";


export default function Users() {
  let [users, setUsers] = useState();
  useEffect(() => {
      getUsers().then(
          value => setUsers([...value])
      )
  }, [])

  return (<View>
        <Text>Users Page</Text>
      </View>
  );
}

let styles = StyleSheet.create({

})