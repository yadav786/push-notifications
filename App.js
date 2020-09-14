import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import * as Notifications from 'expo-notifications';

export default function App() {

  const triggerNotificationHandlers = () => {
    Notifications.scheduleNotificationAsync({
        content: {
            title: "My First Local Notification",
            body: "This is the first local notification we are sending!"
        },
        trigger: {
          seconds: 10,
        }
    });
  }

  return (
    <View style={styles.container}>
      <Button title="Trigger Notification" onPress={triggerNotificationHandlers}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
