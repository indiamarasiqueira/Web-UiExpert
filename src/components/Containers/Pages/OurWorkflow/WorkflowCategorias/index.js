import React from 'react';

import {
    Content,
    Icon,
    Main,
    Container,
    Title,
    SubTitle,
    MiniList,
    Numero,
    TitleItem,
    LinhaItem,
} from './style';

import mock from './mock'

const PortfolioCategorias = props => {
    return (
        <Content id="workflow" >
            <Icon>
                <img src={props.icon} />
            </Icon>
            <Main>
                <Title>{props.title}</Title>
                <SubTitle>{props.subTitle}</SubTitle>
                <Container>
                    {mock.map((item, index) => (
                        <MiniList key={index}>
                            <div>
                                <Numero>{item.id}</Numero>
                            </div>
                            <div>
                                <TitleItem>{item.title}</TitleItem>
                                <LinhaItem>{item.label}</LinhaItem>
                            </div>
                        </MiniList>
                    ))}
                </Container>
            </Main>
        </Content>
    );
};

export default PortfolioCategorias;
