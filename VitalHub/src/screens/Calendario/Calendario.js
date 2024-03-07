import { Button } from "../../Components/Button/style";
// import { ButtonTitle } from "../../Components/ButtonTitle/style";
import CalendarComponent from "../../Components/CalendarBig/CalendarBig";
import InputSelect from "../../Components/Select/Select";
import { useState } from "react";
import { ConfirmConsultModal } from "../../Components/ConfirmConsultModal/ConfirmConsultModal";
import { Label } from "../../components/Text/Style";
import { Container } from "../../components/Container/Style";

export const DateSelect = ({ navigation }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  return (
    <Container>
      
        <Title>Selecionar data</Title>

        <CalendarComponent />
        <Label>Selecione um horário disponível</Label>
        <InputSelect>
          <InputSelect />
        </InputSelect>
        <Button onPress={() => {setShowConfirmModal(true)}}>
          <ButtonTitle>Confirmar</ButtonTitle>
        </Button>

        <LinkCode onPress={() => {navigation.navigate("MedicSelect")}}>Cancelar</LinkCode>

        <ConfirmConsultModal
          visible={showConfirmModal}
          data={"28 de fevereiro"}
          nomeMedico={"Lima Mei"}
          especialidadeMedico={"Cardiologista"}
          localConsulta={"Santo André - SP"}
          tipoConsulta={"Rotina"}
          setShowConfirmModal={setShowConfirmModal}
          navigation={() => navigation.navigate("Main")}
        />
     
    </Container>
  );
};