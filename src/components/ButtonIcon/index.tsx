import { TouchableHighlightProps } from "react-native";
import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";
import { MaterialIcons } from '@expo/vector-icons'

type Props = TouchableHighlightProps & {
    icon: keyof typeof MaterialIcons.glyphMap
    type?: ButtonIconTypeStyleProps
}


export function ButtonIcon({ icon, type = 'PRIMARY'}: Props){
    return(
        <Container>
            <Icon 
                name={icon}
                type={type}
            />
        </Container>
    )
}