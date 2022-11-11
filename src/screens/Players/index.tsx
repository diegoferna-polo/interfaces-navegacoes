import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Highligh } from "@components/HIghlight";
import { Input } from "@components/Input";
import { Container, Form } from "./styles";

export function Players() {
    return(
        <Container>
            <Header showBackButton/>

            <Highligh 
                title="Nome da turma"
                subtitle="adicione a galera e separe os times"
            />
            <Form>
                <Input placeholder="Nome do jogador" autoCorrect={false}/>
                <ButtonIcon icon="add" />
            </Form>
        </Container>
    )
}