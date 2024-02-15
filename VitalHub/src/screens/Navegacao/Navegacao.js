import { Button, View } from "react-native"

export const Navegacao = ({navigation}) => {
    return(
        <View>
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />
            <Button
                title="RecuperarSenha"
                onPress={() => navigation.navigate("RecuperarSenha")}
            />
            <Button
                title="VerificarEmail"
                onPress={() => navigation.navigate("VerificarEmail")}
            />
            <Button
                title="RedefinirSenha"
                onPress={() => navigation.navigate("RedefinirSenha")}
            />
            <Button
                title="Criar Conta"
                onPress={() => navigation.navigate("CriarConta")}
            />
            <Button
                title="Perfil"
                onPress={() => navigation.navigate("Perfil")}
            />
            <Button
                title="PerfilMedico"
                onPress={() => navigation.navigate("PerfilMedico")}
            />
        </View>
    )
}