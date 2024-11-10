
import 'react-native-gesture-handler';
import { gestureHandlerRootHOC, GestureHandlerRootView } from 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';


function App() {
  return (
    <>
      <StatusBar
        style="light"
        translucent
        backgroundColor="transparent"
      />
      <GestureHandlerRootView>

          <Home />

      </GestureHandlerRootView>
    </>
  );
}

export default gestureHandlerRootHOC(App);
