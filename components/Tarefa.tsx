import { Button, StyleSheet, Text, View } from "react-native"
import _tarefa from "../types/_tarefa"

type TarefaProp ={
    dados:_tarefa,
    handleDeletePress:any;
}

export default function Tarefa(props:TarefaProp){
    return <View>
                <Text style={styles.tarefa}>{props.dados.texto}</Text>
                <Text>{"\n"}</Text>
                <Button color={'red'} title="Excluir" onPress={() => props.handleDeletePress(props.dados.id)}/>
            </View>
}

const styles = StyleSheet.create({
    div:{
        borderWidth: 1
    },
    tarefa:{
        color: 'white',
        fontSize: 20,
    }
})