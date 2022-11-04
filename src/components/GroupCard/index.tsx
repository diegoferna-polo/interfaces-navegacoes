import { TouchableOpacityProps } from 'react-native'
import { Container, Title, Icon} from './styles'

type Props = TouchableOpacityProps & {
    title: string
}
export function Groucard ({title, ...rest} : Props) {
    return(
        <Container
            {...rest}
        >
            <Icon />
            <Title>
                {title}
            </Title>
        </Container>
    )
}