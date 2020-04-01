import React from 'react';
import { Box, Icon, Content, Title, Label, Image, Button } from './style';

const BannerHome = props => {
    return (
        <Box>
            <Content id="home">
                <Title>{props.title}</Title>
                <Label>{props.label}</Label>
                <Button>Wave Me</Button>
            </Content>
            <Icon>
                <img src={props.icon} />
            </Icon>
        </Box>
    );
};

export default BannerHome;
