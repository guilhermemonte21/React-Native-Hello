import { useEffect, useState } from "react"
import { BoxInput } from "../../Components/BoxInput"
import { ContainerForm, InputRow, ScrollForm } from "./style"
import axios from "axios";


export function Home(){

    const [cep, setCep] = useState("")
    const [logradouro, setLogradouro] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [uf, setUf] = useState("");

    useEffect(() => {
        const getAdress = async () => {
            if (cep !== "")
            try {
        const url = `https://viacep.com.br/ws/`
              const resposta = await axios.get(
                `${url}/${cep}/json/`
              );
              const data = resposta.data;
              if(!data.erro){
              setLogradouro(data.logradouro),
              setBairro(data.bairro),
              setCidade(data.cidade),
              setEstado(data.estado),
              setUf(data.uf)
              }
              else{ console.log('Cep esta incorreto')}
            } catch {
            }
          };
          getAdress();
    }, [cep]);
    
      
    return(
        <>
        <ScrollForm>
            <ContainerForm>
                <BoxInput 
                    textLabel='Informar o Cep'
                    placeholder='Cep....'
                    keyType='numeric'
                    maxLenght={9}
                    fieldWidth={100}
                    fieldValue={cep}
                    onChangeText={(tx) => {setCep(tx)}}
                    editable={true}
                    />
                    <BoxInput 
                    textLabel='Logradouro'
                    placeholder='Logradouro...'
                    fieldValue={logradouro}
                    

                    />
                    <BoxInput 
                    textLabel='Bairro'
                    placeholder='Bairro...'
                    fieldValue={bairro}
                    />
                    <BoxInput 
                    textLabel='Cidade'
                    placeholder='Cidade...'
                    fieldValue={cidade}
                    />
                     <InputRow>
            <BoxInput
            textLabel='Estado'
            placeholder='Estado...'
            fieldWidth={60}
            fieldValue={estado}
            />
            <BoxInput
            textLabel='UF'
            placeholder='UF'
            fieldWidth={30}
            fieldValue={uf}
            />
            </InputRow>


            </ContainerForm>
            
            
        </ScrollForm>
        </>
    )
}