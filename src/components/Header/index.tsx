import { BackButton, BackIcon, Container, LogoImg} from './styles'
import Logo from '@assets/logo.png'
import { useNavigation } from '@react-navigation/native'

type Props = {
    showBackButton?: boolean
}


export function Header({showBackButton = false} : Props) {

    const navigation = useNavigation();
    function handlerGoBack() {
        navigation.navigate('groups');
    }

    return(
        <Container>
            {
                showBackButton && <BackButton onPress={handlerGoBack}>
                <BackIcon />
            </BackButton>
            }
            <LogoImg source={Logo} />
        </Container>
    )
}