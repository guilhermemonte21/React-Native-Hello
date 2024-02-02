import { useState } from "react"
import { BoxInput } from "../../Components/BoxInput"
import { ContainerForm, InputRow, ScrollForm } from "./style"

export function Home(){

    const [cep, setCep] = useState('09210020')
    const [logradouro, setLogradouro] = useState();
    const [bairro, setBairro] = useState();
    const [cidade, setCidade] = useState();
    const [estado, setEstado] = useState();
    const [uf, setUf] = useState();
    return(
        <>
        <ScrollForm>
            <ContainerForm>
                <BoxInput 
                    textLabel='Informar o Cep'
                    placeholder='Cep..'
                    keyType='numeric'
                    maxLenght={9}
                    fieldWidth={100}
                    fieldValue={cep}
                    onChangeText={ (tx) => {setCep(tx)}}
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