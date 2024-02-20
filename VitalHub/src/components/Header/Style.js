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


elevation:10;
`

export const Card = styled.View`
    height: 102px;
    width: 90%;
    flex-direction: row;
    
    background-color: #fff;
    border-radius: 5px;
    shadow-color: #000;
  shadow-opacity: 0.08;
  shadow-offset: -2px  4px;
  shadow-radius: 25px;
  elevation: 10;
    margin-top: 20px;
`
export const Horario = styled.TouchableOpacity`
    height: 26px;
    width: 100px;
    background-color: #E8FCFD;
    border-radius:5px;
    color: #49B3BA;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-top: 10px;
    
`