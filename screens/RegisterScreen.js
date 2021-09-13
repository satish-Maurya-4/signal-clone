import { StatusBar } from 'expo-status-bar'
import React, { useState, useLayoutEffect } from 'react'
import { StyleSheet, KeyboardAvoidingView, View } from 'react-native'
import { Button, Text, Input } from 'react-native-elements'
import { auth } from '../firebase'

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: '',
    })
  }, [navigation])

  const Register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoUrl:
            imageUrl ||
            'https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png',
        })
      })
      .catch((error) => alert(error.message))
  }
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h3>Create a Signal account</Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="First Name"
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <Input
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Input
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Input
          placeholder="Profile picture URL (optional)"
          onChangeText={(text) => setImageUrl(text)}
          value={imageUrl}
          onSubmitEditing={Register}
        />
      </View>
      <Button containerStyle={styles.button} title="Register" />
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
  },
})
