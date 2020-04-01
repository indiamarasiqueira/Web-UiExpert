import styled from 'styled-components';
import image from '../../img/pictureHeader.png';

export const List = styled.div`
    /*position: relative;
    height: 200px;

    &::before {
        background: no-repeat 100% 50% url("${image}");
        width: 100%;
        height: 200px;

        content: '';

        display: block;
        position: absolute;
        bottom: 0;
        z-index: -1;
    }*/
`;
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media all and (min-width: 1000px) {
        max-width: 1200px;
        margin: 60px auto;
    }
`;
export const MainHeader = styled.div``;

export const NavArea = styled.ul`
    display: flex;
    align-items: center;
    flex-direction: row;
`;

export const ListItem = styled.li`
    display: flex;

    li {
        margin: 10px;
        font-size: 14px;
        list-style: none;
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
export const Button = styled.button`
    font-size: 14px;
    border-radius: 25px;
    padding: 14px 40px;
    border: none;
    background-color: #ff8923;
    color: #fff;
`;
export const Icon = styled.div`
    img {
        height: 300px;
        width: 1000px;
    }
`;
