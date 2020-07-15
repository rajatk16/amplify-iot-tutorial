import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Amplify, {PubSub} from 'aws-amplify'
import {AWSIoTProvider} from '@aws-amplify/pubsub/lib/Providers'

Amplify.configure({
  Auth: {
    identityPoolId: 'us-east-1:e98e0875-957d-4eb8-9188-036b12aa85ec',
    region: 'us-east-1',
    userPoolId: 'us-east-1_Hg857HnGJ',
    userPoolWebClientId: '3mda5opn49lsutvsbu390vmt12',
  },
});

Amplify.addPluggable(
  new AWSIoTProvider({
      aws_pubsub_region: 'us-east-1',
      aws_pubsub_endpoint: 'wss://a5jlh5mgikrwc-ats.iot.us-east-1.amazonaws.com/mqtt',
  }),
);

PubSub.subscribe('infovision_ecommerce_express_store').subscribe({
  next: data => console.log(data.value),
  error: error => console.log(error),
  close: () => console.log('Done')
})

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
