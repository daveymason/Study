import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';

   

const FormSection = (props) => (
   <ScrollView style={{backgroundColor: 'white', padding: 8}}>
    <Text
    style={{ marginLeft: 3 }}
    >
      {props.label}
    </Text>
    <TextInput 
      style={{ borderWidth: 1, borderColor: 'grey', borderRadius: 10, padding: 3 }}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      value={props.value}
    >
    </TextInput>
   </ScrollView> 
   )
 

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [breed, setBreed] = useState('');
  const [toy, setToy] = useState('');

  return (
  <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#ecf0f1', padding: 50 }}>
    <FormSection 
      label={'E-mail:'} 
      placeholder={'fuzzykins@mail.com'}
      value={email}
      onChangeText={setEmail}
    />
    <FormSection 
      label={'Password:'} 
      placeholder={'123C@tDog'}
      value={password}
      onChangeText={setPassword}
      secureTextEntry
    />
    <FormSection 
      label={'Pet Name:'} 
      placeholder={'Cuddles'}
      value={name}
      onChangeText={setName}
    />
    <FormSection 
      label={'Pet DoB:'} 
      placeholder={'17/02/2020'}
      value={birthday}
      onChangeText={setBirthday}
    />
    <FormSection 
      label={'Breed'} 
      placeholder={'Goliath birdeater'}
      value={breed}
      onChangeText={setBreed}
    />
    <FormSection 
      label={'Favorite Toy'} 
      placeholder={'Bone'}
      value={toy}
      onChangeText={setToy}
    />
  </View>
)};