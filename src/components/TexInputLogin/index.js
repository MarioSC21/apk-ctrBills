import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'

const InputTrasnparent = ({ label, value, icon, ...props }) => {
  // console.log(props.background);
  return (
    <TextInput
      label={label}
      placeholder={label}
      value={value}
      onChangeText={!props.onChangeText ? null : props.onChangeText}
      style={styles.input}
      outlineColor='rgba(52, 52, 52, 0.5)'
      underlineColor='transparent'
      activeOutlineColor='#C2788E'
      right={<TextInput.Icon name={icon} color='#fff' />}
      theme={{
        colors: {
          placeholder: 'white',
          text: 'white',
          primary: 'white',
          underlineColor: 'transparent',
          background: props.background
        },
        roundness: 23
      }}
      mode='outlined'
    />
  )
}

const TextInputLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [eye, setEye] = useState(true)
  const inputParameters = {
    label: '',
    value: null,
    onChangeText: null,
    icon: '',
    background: 'rgba(52, 52, 52, 0.5)'
  }
  return (
    <View style={styles.inputContainer2}>
      <InputTrasnparent label={inputParameters.label = 'Email'} value={inputParameters.value = email} icon={inputParameters.icon = 'email'} {...inputParameters} />
      <TextInput
        label='Password'
        placeholder='Password'
        value={password}
        onChangeText={(password) => setPassword(password)}
        style={styles.input}
        outlineColor='rgba(52, 52, 52, 0.6)'
        activeOutlineColor='#C2788E'
        right={
          <TextInput.Icon
            name='eye'
            onPress={() => setEye(!eye)}
            color='#fff'
          />
          }
        secureTextEntry={eye}
        theme={{
          colors: {
            placeholder: 'white',
            text: 'white',
            primary: 'white',
            underlineColor: 'transparent',
            background: 'rgba(52, 52, 52, 0.6)'
          },
          roundness: 23
        }}
        mode='outlined'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer2: {
    width: '100%',
    alignItems: 'center',
    marginBottom: '2%',
    marginVertical: '3%',
    justifyContent: 'center'
  },
  input: {
    width: '80%',
    marginBottom: 15
  }
})
export default TextInputLogin
