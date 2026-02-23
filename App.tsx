import { StackNavigator } from './src/navigator/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';


export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}

export default App;
