import styled from 'styled-components';

export const Box = styled.div`
    margin: 32px 0;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    @media all and (min-width: 1000px) {
        flex-direction: row;
        margin: 0 16px;
    }
`;

export const Content = styled.div``;

export const Icon = styled.div`
    img {
        height: 400px;
        width: 600px;
        margin-top: 100px;
    }
`;
export const Title = styled.h1`
    margin: 80px 0;
    font-size: 50px;
    max-width: 500px;
    margin-bottom: 16px;
`;
export const Label = styled.p`
    font-size: 14px;
    padding-top: 6px;
    margin-bottom: 28px;

`;
export const Container = styled.div`
    font-size: 14px;
    padding-top: 6px;
    margin-bottom: 28px;
`;
export const Button = styled.button`
    font-size: 14px;
    border-radius: 30px;;
    padding: 20px 60px;
    margin-top: 20px;
    border: none;
    background-color: #3D37F1;
    color: #fff;
    margin-bottom: 30px;
`;
