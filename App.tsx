import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import _tarefa from './types/_tarefa';

export default function App() {
  const [texto, setTexto] = useState<string>('')
  const [tarefas, setTarefas] = useState<_tarefa[]>([])

  function adicionarTarefa(){
    if(texto==''){
      alert("Insira um texto!");
      return;
    }

    let tarefa: _tarefa = {
      id: tarefas.length +1,
      texto
    };

    setTarefas([...tarefas, tarefa]);
  }

  function mostrarTarefas(){
    return tarefas.map(t => <Text>{t.texto}</Text>)
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={texto} onChangeText={setTexto}/>
      <Button title='Adicionar tarefa' onPress={adicionarTarefa}/>
      {mostrarTarefas()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 2,
  }
});
