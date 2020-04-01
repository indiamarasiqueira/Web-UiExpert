import styled from 'styled-components';

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0;
`;
export const Icon = styled.div`
    img {
        height: 350px;
        width: 500px;
        margin: 0 30px;
    }

`;
export const Main = styled.div`
`;
export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;
export const Title = styled.h1`
    color: #5A5454;
    margin: 16px 0;
`;
export const SubTitle = styled.h4`
    color: #747474;
    margin-bottom: 40px;
    line-height: 1.5;
`;
export const MiniList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;
export const Numero = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: blue;
    padding: 14px 20px;
    color: #fff;
    margin-bottom: 16px;

`;
export const TitleItem = styled.h2`
    margin: 8px 20px;
    color: #A0A0A1;
`;

export const LinhaItem = styled.p`
    margin: 0 20px;
    color: #767676;
    line-height: 1.5;
`;
