import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highligh } from "@components/HIghlight";
import { Input } from "@components/Input";
import { Text } from "react-native";
import { Container, Content, Icon } from "./styles";

export function NewGroup() {
    return(
        <Container>
            <Header showBackButton/>

            <Content>
                <Icon />
                <Highligh 
                    title="Nova turma"
                    subtitle="crie a turma para adicionar pessoas"
                />
                <Input 
                    placeholder="Nome da turma"
                />
                <Button 
                    title="Criar"
                    style={{marginTop: 20}}
                />
            </Content>
        </Container>
    )
}