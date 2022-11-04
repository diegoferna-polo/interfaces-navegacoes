import { BackButton, BackIcon, Container, LogoImg} from './styles'
import Logo from '@assets/logo.png'

type Props = {
    showBackButton?: boolean
}


export function Header({showBackButton = false} : Props) {
    return(
        <Container>
            {
                showBackButton && <BackButton>
                <BackIcon />
            </BackButton>
            }
            <LogoImg source={Logo} />
        </Container>
    )
}