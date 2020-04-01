import styled from 'styled-components';

export const Container = styled.div`
    margin: 60px 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
`;
export const Section = styled.div`
    height: auto;
    width: 340px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    background-color: #fff;

`;
export const TitleOne = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin: 16px 24px;
    line-height: 1.5;
    color: #5A5454;
    margin-top: 20px;
`;
export const Titletwo = styled.p`
    font-size: 15px;
    line-height: 1.5;
    margin: 0 24px;
    color: #747474;
`;
export const Button = styled.div`
    img {
        width: 340px;
        height: 220px;
    }
`;
export const ButtonSeta = styled.div`
    img {
        margin-top: 20px;
        margin-bottom: 40px;
        margin-left: 20px;
    }
`;
