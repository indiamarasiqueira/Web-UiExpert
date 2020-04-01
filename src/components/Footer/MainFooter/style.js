import styled from 'styled-components';

export const Content = styled.div`
    p {
        margin: 10px 0;
        line-height: 2;
        color: #747474;
        margin-bottom: 40px;
    }
    @media all and (min-width: 1000px) {
        max-width: 1200px;
        margin: 60px auto;
    }
`;
export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 40px;
`;
export const MainHeader = styled.div`
    min-width: 450px;
    margin-right: 60px;
`;

export const MiniList = styled.div``;

export const TitleItem = styled.h2`
    color: #747474;
`;

export const Item = styled.ul`
    li {
        list-style: none;
        margin: 30px 0;
    }
    a:link {
        text-decoration: none;
        color: #4b647e;
        line-height: 1.5;
    }
    /* link que foi visitado */
    a:visited {
        color: #4b647e;
    }

    /* mouse over */
    a:hover {
        color: #413BF1;
    }
`;
export const Link = styled.ul`
    svg {
        margin-right: 10px;
    }
`;
