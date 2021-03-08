import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Alert_, update} from './store/action';
const Home = () => {
  const [value, onChangeText] = useState();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <View>
      <Text>home</Text>
      <Text>{state.email}</Text>
      <Text>{state.username}</Text>
      <Text>{state.gender}</Text>
      <Text>{state.age}</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <Button title="press me" onPress={() => dispatch(update(value))} />
    </View>
  );
};

export default Home;
