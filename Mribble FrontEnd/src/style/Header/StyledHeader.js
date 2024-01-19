import styled from "styled-components";

export const StyledHeader = styled.header `
background-color: #080808;
color: white;
border-bottom: 1px solid gray;
`;

export const StyledHeaderContainer = styled.div `
width: 80%;
margin: 0 auto;
max-width: 1100px;
height: 65px;
display: flex;
align-items: center;
justify-content: space-between;
font-size: 12px;
`;

export const StyledHeaderLogo = styled.div `
font-size: 25px;
margin: 5px;
`;

export const StyledHeaderName = styled.div `
display: flex;
align-items: center;
cursor: pointer;
`;

export const StyledHeaderOption = styled.p `
font-size: 20px;
font-weight: bold;
cursor: pointer;

`