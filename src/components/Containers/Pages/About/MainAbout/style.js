import styled from 'styled-components';

export const Box = styled.div`
    margin: 200px 0;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    @media all and (min-width: 1000px) {
        flex-direction: row;
    }
`;

export const Content = styled.div`
    margin-left: 100px;
`;

export const Icon = styled.div`
    img {
        height: 450px;
        width: 600px;
        margin-bottom: 30px;
    }
`;
export const Title = styled.h1`
    font-size: 20px;
    margin-bottom: 16px;
`;
export const Label = styled.p`
    font-size: 14px;
    padding-top: 6px;
    margin-bottom: 28px;
    line-height: 1.5;
`;
export const Conteiner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`;
export const Button = styled.button`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: none;
    background-color: #3D37F1;
    margin-right: 30px;
`;
export const LabelButton = styled.p`
    font-size: 14px;
`;
