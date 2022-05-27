import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: rgb(244,244,244);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    max-width: 400px;
    width: 100%;
    height: 400px;
    padding: 24px 15px;
    background-color: #fff;
    box-shadow: 11px 17px 34px -14px rgba(164,155,155,0.75);
    -webkit-box-shadow: 11px 17px 34px -14px rgba(164,155,155,0.75);
    -moz-box-shadow: 11px 17px 34px -14px rgba(164,155,155,0.75);
    border-radius: 5px;
`;

export const MainContent = styled.div`

`;

export const Title = styled.h3`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

export const ItemContainer = styled.div`
    margin-bottom: 15px;
`;

export const InputTitle = styled.h4`
    
`;

export const ButtonContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`;
