import styled from 'styled-components';

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 0 100px;
`;
export const Container = styled.div``;
export const Title = styled.h1`
    font-weight: bold;
    font-size: 26px;
    margin-bottom: 10px;
    a:link {
        text-decoration: none;
        color: #5a5454;
        line-height: 1.5;
    }
    /* link que foi visitado */
    a:visited {
        color: #5a5454;
    }
    /* mouse over */
    a:hover {
        color: #413BF1;
    }
`;
export const SubTitle = styled.h4`
    margin-bottom: 30px;
    color: #bfc2c6;
`;
export const ListIcon = styled.ul`
    li {
        list-style: none;
        margin: 30px 0;
    }
    a:link {
        text-decoration: none;
        color: #abafb5;
        line-height: 1.5;
    }
    /* link que foi visitado */
    a:visited {
        color: #abafb5;
    }

    /* mouse over */
    a:hover {
        color: #6863f2;
        border-bottom: 2px solid #6863f2;
    }
`;
export const Icon = styled.div`
    margin: 10px;
    img {
        height: 200px;
        transition: 1s;
        padding: 15px;
    }
    img:hover {
        filter: grayscale(100%);
        transform: scale(1.1);
    }
`;
