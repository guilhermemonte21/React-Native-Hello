import styled from "styled-components"

export const BtnIncrement = styled.TouchableOpacity`
    border-Radius:8px;
    align-Items: center;
    justify-Content: center; 
     background-color:green;
    width:180;
    height:40;
`

export const BtnDecrement = styled(BtnIncrement)`
    background-color: red;
    width:180;
    height:40;
    border-radius:8px;
    align-Items: center;
    justify-Content: center;
`