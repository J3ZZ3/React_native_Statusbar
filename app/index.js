import { ActivityIndicator, View, Text } from 'react-native';
import {Drawer} from 'expo-router/drawer';
const StartPage = () => {
  return (
    <Stack>
    <Drawer/>
    <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>Loading...</Text>
      <ActivityIndicator size="large" color="#000000" />
    </View>
    </Stack>
  );
};

export default StartPage;