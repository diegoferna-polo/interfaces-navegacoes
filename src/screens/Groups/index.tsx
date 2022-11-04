import { Groucard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highligh } from '@components/HIghlight';
import { Container} from './styles';

export  function Groups() {
  return (
    <Container>
        <Header /> 
        <Highligh 
            title="Turmas"
            subtitle="jogue com a sua turma"
        />
        <Groucard title='Groups'/>
    </Container>
  );
}


