import { SafeAreaView } from 'react-native-safe-area-context';
import {PantallaInicioSesionScreen} from './screens/PantallaInicioSesionScreen'
import { PantallaRegistroScreen } from './screens/PantallaRegistroScreen';


export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PantallaRegistroScreen/>
    </SafeAreaView>
  )
}

export default App;
