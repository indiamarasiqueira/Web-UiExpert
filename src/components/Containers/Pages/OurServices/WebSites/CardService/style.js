import styled from 'styled-components';

export const Box = styled.div`
    height: 450px;
    background-color: ${props => (props.bg && props.bg) || ' #EDB174'};
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Icon = styled.div`
    margin: 40px 0;
    height: 100px;
`;

export const Content = styled.div`
    color: #fff;
`;

export const Title = styled.h1`
    font-size: 20px;
    margin-bottom: 10px;
`;
export const Label = styled.p`
    font-size: 14px;
    padding-top: 6px;
    margin: 0 6px;
    line-height: 1.5;
`;
export const Button = styled.button`
    font-size: 14px;
    border-radius: 25px;
    padding: 14px 30px;
    margin-top: 20px;
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;

    :hover {
        background-color: #fff;
        color: #000;
    }
`;
