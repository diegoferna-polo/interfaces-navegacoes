import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";
import { groupGetAll } from "./groupGetAll";


export async function groupCreate(newGroup: string) {
    try{
        const storeGroups = await groupGetAll()

        const groupAlreadyExistis = storeGroups.includes(newGroup)

        if(groupAlreadyExistis){
            throw new AppError('Já existe um grupo cadastrado com esse nome.')
        } 

        const storage = JSON.stringify([...storeGroups, newGroup])
        await AsyncStorage.setItem(GROUP_COLLECTION, storage);
    }catch(error){  
        if(error instanceof AppError){
            Alert.alert('Novo Grupo', error.message)
        }else {
            Alert.alert('Novo Grupo','Não foi possível criar um novo grupo.')
            console.log(error)

        }
    }
}