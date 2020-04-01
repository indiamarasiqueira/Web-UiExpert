import React, { Component } from 'react';
import { Box, Icon, Content, Title, Label, Button } from './style';

const WebSites = props => {
    return (
        <Box bg={props.bg}>
            <Icon>
                <img src={props.icon} />
            </Icon>
            <Content>
                <Title>{props.title}</Title>
                <Label>
                    {props.label}
                </Label>
                <Button>Read More</Button>
            </Content>
        </Box>
    );
};

export default WebSites;


