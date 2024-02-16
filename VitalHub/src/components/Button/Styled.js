import styled from "styled-components";

export const Button = styled.TouchableOpacity`
    width: 90%;
    height: 50px;

    background-color: #496bba;
    border: 1px solid #496bba;
    margin-top: 40px;
    padding: 12px 8px 12px 8px;
    border-radius: 5px;

    align-items: center;
    justify-content: center;
`


export const ButtonGoogle = styled(Button)`
    background-color: #FAFAFA;
    margin-top: 20px;
    padding: 10px;
    flex-direction: row;
    gap: 20px;
`

export const DoctorButton = styled.TouchableOpacity`
    width: 100px;
    height: 39px;
    border-radius: 5px;
    border: 2px solid #496BBA;
    justify-content: center;
    align-items: center;
    
`