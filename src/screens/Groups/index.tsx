import { Button } from '@components/Button';
import { Groucard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highligh } from '@components/HIghlight';
import { ListEmpty } from '@components/ListEmpty';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { Container} from './styles';

export  function Groups() {
  const [groups, setGroups] = useState<string[]>([])
  return (
    <Container>
        <Header /> 
        <Highligh 
            title="Turmas"
            subtitle="jogue com a sua turma"
        />
        <FlatList 
          data={groups}
          keyExtractor={item => item}
          ListEmptyComponent={<ListEmpty message='Que tal cadastrar a primeira turma?'/>}
          contentContainerStyle={groups.length === 0 && {flex: 1} }
          renderItem={({item}) => (
            <Groucard 
              title={item}
            />
          )}
        />
        <Button title='Enviar' />
    </Container>
  );
}


