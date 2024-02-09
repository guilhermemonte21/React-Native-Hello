import styled from "styled-components";

export const LinkMedium = styled.Text`
    font-size: 14px;
    color: #8c8a97;
    text-decoration: underline;
    margin-top: 10px;
    align-self: flex-start;
    margin-left: 20px;
    font-family: 'MontserratAlternates_500Medium';
`
export const LinkBold = styled(LinkMedium)`
    color: #4d659d ;
    font-size:16px;
`
export const LinkCode = styled(LinkMedium)`
    color: #4d659d ;
    font-size:16px;
    align-items: center;
    align-self: center;
`