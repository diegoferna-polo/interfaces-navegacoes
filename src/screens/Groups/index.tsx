import { Button } from '@components/Button';
import { Groucard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highligh } from '@components/HIghlight';
import { ListEmpty } from '@components/ListEmpty';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { groupGetAll } from '@storage/group/groupGetAll';
import { useEffect, useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { Container} from './styles';

export  function Groups() {
  const [groups, setGroups] = useState<string[]>([])
  const navigation = useNavigation();

  function handlerNewGroup() {
    navigation.navigate('new')
  }

  async function fetchGroups() {
    try {
      const data = await groupGetAll()
      setGroups(data)
    }catch(error){
      console.log(error)
    }
  }

  function handlerOpenGroup(group: string){
    navigation.navigate('players', {group})
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  },[]))

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
              onPress={() => handlerOpenGroup(item)}
            />
          )}
        />
        <Button 
          title='Criar nova turma' 
          onPress={handlerNewGroup}
        />
    </Container>
  );
}


