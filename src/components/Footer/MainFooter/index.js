import React from 'react';
import { FaFacebook, FaGooglePlus, FaYoutube } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';

import {
    Content,
    Container,
    MainHeader,
    Link,
    MiniList,
    TitleItem,
    Item,
} from './style';

import TitleCustom from '../../TitleCustom';

import mock from './mock';

const MainFooter = props => {
    return (
        <Content>
            <Container>
                <MainHeader>
                    <TitleCustom title="Web" subTitle="UiExpert" />
                    <p>
                        The full-stack design team who focuses on digital
                        products whatever they are.
                    </p>
                    <Link className="back-link" to="/register">
                        <a href="https://pt-br.facebook.com/" target="_blank">
                            <FaFacebook size={40} color="#0A315A" />
                        </a>
                        <a
                            href="https://twitter.com/login?lang=pt"
                            target="_blank"
                        >
                            <AiFillTwitterCircle size={40} color="#0A315A" />
                        </a>
                        <a
                            href="https://www.google.com/intl/pt/gmail/about/#"
                            target="_blank"
                        >
                            <FaGooglePlus size={40} color="#0A315A" />
                        </a>
                        <a
                            href="https://www.youtube.com/?hl=pt&gl=BR"
                            target="_blank"
                        >
                            <FaYoutube size={40} color="#0A315A" />
                        </a>
                    </Link>
                </MainHeader>
                {mock.map((item, index) => (
                    <MiniList key={index} id="contact">
                        <TitleItem>{item.title}</TitleItem>
                        <Item>
                            <li>
                                <a href="#">{item.labelOne}</a>
                            </li>

                            <li>
                                <a href="#">{item.labelTwo}</a>
                            </li>
                            <li>
                                <a href="#">{item.labelThree}</a>
                            </li>
                            <li>
                                <a href="#">{item.labelFour}</a>
                            </li>
                        </Item>
                    </MiniList>
                ))}
            </Container>
            <p>© 2019 all rights reserved</p>
        </Content>
    );
};

export default MainFooter;
