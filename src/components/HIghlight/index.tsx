import {Container, Subtitle, Title} from './styles'

type Props = {
    title: string,
    subtitle: string
}

export function Highligh ({title, subtitle} : Pros) {
    return(
        <Container>
            <Title>
                {title}
            </Title>
            <Subtitle>
                {subtitle}
            </Subtitle>
        </Container>
    )
}