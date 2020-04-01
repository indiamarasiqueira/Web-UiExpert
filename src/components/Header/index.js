import React from 'react';
import {
    List,
    Container,
    MainHeader,
    NavArea,
    Button,
    ListItem,
} from './style';
import TitleCustom from '../TitleCustom';



const Header = () => (
    <List>
        <Container>
            <MainHeader>
                <TitleCustom title="Web" subTitle="UiExpert" />
            </MainHeader>
            <NavArea>
                <ListItem>
                    <li>
                        <a href="#home">HOME</a>
                    </li>
                    <li>
                        <a href="#service">SERVICE</a>
                    </li>
                    <li>
                        <a href="#about">ABOUT</a>
                    </li>
                    <li>
                        <a href="#portfolio">PORTFOLIO</a>
                    </li>
                    <li>
                        <a href="#success">SUCCESS</a>
                    </li>
                    <li>
                        <a href="#workflow">WORKFLOW</a>
                    </li>
                    <li>
                        <a href="#blog">BLOG</a>
                    </li>
                    <li>
                        <a href="#contact">CONTACT</a>
                    </li>
                </ListItem>
                <Button>LOGIN</Button>
            </NavArea>
        </Container>
    </List>
);
export default Header;
