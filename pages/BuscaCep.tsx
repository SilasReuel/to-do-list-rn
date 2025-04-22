import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function BuscaCep() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState({
    logradouro:'',  
    cep: '',
    complemento: '',
    unidade: '',
    bairro: '',
    localidade: '',
    uf: '',
    estado: '',
    regiao: '',
    ibge: '',
    gia: '',
    ddd: '',
    siafi: '',
    erro: ''
  });

  async function buscarCEP() {
    let r = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let dados = await r.json();
    setEndereco(dados);
  }

  function cepDados(){
    if(endereco.logradouro != '' && endereco.logradouro != undefined){
      return(
       `
       LOGRADOURO: ${endereco.logradouro}
       CEP: ${endereco.cep} 
       COMPLEMENTO: ${endereco.complemento} 
       UNIDADE: ${endereco.unidade} 
       BAIRRO: ${endereco.bairro} 
       LOCALIDADE: ${endereco.localidade} 
       UF: ${endereco.uf} 
       ESTADO: ${endereco.estado} 
       REGIÃO: ${endereco.regiao} 
       IBGE: ${endereco.ibge} 
       GIA:  ${endereco.gia} 
       DDD: ${endereco.ddd} 
       SIAFI: ${endereco.siafi}`
      );
    }
    else if(endereco.erro){
      return("CEP inválido!");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Consulte seu CEP</Text>
      <TextInput style={styles.textinput} placeholder='CEP' keyboardType='numeric' maxLength={8} value={cep} onChangeText={setCep} />
      <br/>
      <Button title='BUSCAR' onPress={buscarCEP}/>
      <br/>
      <Text style={[styles.mostradados, styles.text]}>{cepDados()}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#fff',
    fontSize: 30,
  },
  textinput: {
    borderColor: '#fff',
    borderRadius: 6,
    borderWidth: 3,
    fontSize: 30,
    color: 'gray',
    textAlign: 'center',
  },
  mostradados: {
    textAlign: 'justify',
  },
});
