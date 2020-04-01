import React from 'react';
import { Box, Icon, Content, Title, Label, Conteiner, Button, LabelButton} from './style';

const MainAbout = props => {
    return (
        <Box id="about">
            <Icon>
                <img src={props.icon} />
            </Icon>
            <Content>
                <Title>{props.title}</Title>
                <Label>{props.label}</Label>
                <Conteiner>
                    <Button></Button>
                    <LabelButton>{props.labelButton}</LabelButton>
                </Conteiner>
            </Content>
        </Box>
    );
};

export default MainAbout;


