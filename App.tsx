import { Routes } from './src/routes'
import Theme from '@theme/index';
import { ThemeProvider } from 'styled-components'
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import { Loading } from '@components/Loading';
import { StatusBar } from 'react-native';


export default function App() {
  const [fontsLoader] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={Theme}>
        <StatusBar 
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        { 
          fontsLoader ? <Routes /> : <Loading />
        }
    </ThemeProvider>
  );
}

