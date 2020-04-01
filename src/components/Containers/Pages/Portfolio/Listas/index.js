import React, { Component, Fragment } from 'react';
import { Content, Container, Title, SubTitle, ListIcon, Icon } from './style';
import mock from './mock';

const Listas = (props) => {

    return (
        <Content id="portfolio">
            <Container>
                <Title>
                    <a href="#phots">{props.title}</a>
                </Title>
                <SubTitle>{props.subTitle}</SubTitle>
                {mock.map((item, index) => (
                    <ListIcon key={index}>
                        <li>
                            <a href="#labelOne" >
                                {item.labelOne}
                            </a>
                        </li>

                        <li>
                            <a href="#labelTwo">{item.labelTwo}</a>
                        </li>
                        <li>
                            <a href="#labelTwo">{item.labelThree}</a>
                        </li>
                        <li>
                            <a href="#labelTwo">{item.labelFour}</a>
                        </li>
                        <li>
                            <a href="#labelTwo">{item.labelFive}</a>
                        </li>
                    </ListIcon>
                ))}
            </Container>
            <Icon id="phots">
                <img src={props.icon1} />
                <img src={props.icon2} />
                <img src={props.icon3} />
                <img src={props.icon4} />
                <img src={props.icon5} />
                <img src={props.icon6} />
            </Icon>
        </Content>
    );
};

export default Listas;
