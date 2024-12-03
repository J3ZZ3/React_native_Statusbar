import { ActivityIndicator, View, Text } from 'react-native';

const StartPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>Loading...</Text>
      <ActivityIndicator size="large" color="#000000" />
    </View>
  );
};

export default StartPage;