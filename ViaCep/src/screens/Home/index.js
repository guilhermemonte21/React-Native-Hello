import { BoxInput } from "../../Components/BoxInput"
import { ContainerForm, ScrollForm } from "./style"

export function Home(){
    return(
        <>
        <ScrollForm>
            <ContainerForm>
                <BoxInput 
                    textLabel='Informar o Cep'
                    placeholder='Cep..'
                    keyType='numeric'
                    maxLenght={9}/>
            </ContainerForm>
        </ScrollForm>
        </>
    )
}