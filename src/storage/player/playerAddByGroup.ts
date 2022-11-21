import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { PlayerGetByGroup } from "./playersGetByGroup";


export async function PlayerAddByGroup(newPlayer: PlayerStorageDTO, group: string){
    try{
        // '@ignite-teams:players-Amigos'
        // '@ignite-teams:players-RPG'
        const storedPlayers = await PlayerGetByGroup(group)

        const playerAlreadyExists = storedPlayers.filter(player => player.name === newPlayer.name)

        if(playerAlreadyExists.length > 0){
            throw new AppError('Essa pessoa já esta adicionada em um time aqui.')
        }

        const storage = JSON.stringify([...storedPlayers, newPlayer])

        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
    }catch(error){
        throw(error)
    }
}