import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';

export const Header = styled.Image`
    width: 100%;
    height: 280px;
    margin-bottom: 10px;

`
export const DoctorHeader = styled(LinearGradient).attrs({
    colors: ['#60BFC5', '#496BBA'],
    start:{x:-0.03, y:1.5},
    end: {x:1, y:0}
})`
    width:100%;
height: 144px;
border-radius: 0px 0px 15px 15px;
flex-direction: row;


/* elevation:20; */
`
