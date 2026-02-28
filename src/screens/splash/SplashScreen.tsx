import { StyleSheet, Text, View } from 'react-native'
import React, { use, useEffect } from 'react'
import { navigate } from '../../navigation/NavigationUtils';

const SplashScreen = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('Main')
      // Navigate to the main screen after 3 seconds
      // You can use your navigation library here to navigate to the main screen
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})