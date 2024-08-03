import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './app/navigations/TabNavigation';
import { SafeAreaView } from 'react-native-safe-area-context'; 


export default function App() {
  return (
    <NavigationContainer >
        <TabNavigation  /> 
    </NavigationContainer>
  );
}

