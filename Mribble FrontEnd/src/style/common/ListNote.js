import styled from "styled-components";

export const StyledListNote = styled.div`
    color: white;
    margin-top: 25px;
    border-top: 1px solid #252525;
    border-bottom:  1px solid #252525;
    display: flex;
    height: 120px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    cursor: pointer ;
    transition: background-color 0.2s ease-in-out;
    &:hover{
        background-color: #252525;
    }
    `;

export const StyledListNoteHeader = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
h1{
    font-size: 26px;
}
p{
    font-size: 20px;
color: rgba(255, 255, 255, 0.50);
}
margin: 5px;
`;

export const StyledListNoteDate = styled.div`
font-size: 20px;
`;