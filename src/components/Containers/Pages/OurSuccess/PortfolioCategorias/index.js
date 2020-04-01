import React from 'react';
import { Box, Title, SubTitle, BoxSize, Icon } from './style';

const PortfolioCategorias = props => {
    return (
        <Box id="success">
            <Title>{props.title}</Title>
            <SubTitle>{props.subTitle}</SubTitle>
            <BoxSize>
                <Icon>
                    <img src={props.icon1} />
                    <p>PROJECT DONE</p>
                </Icon>
                <Icon>
                    <img src={props.icon2} />
                    <p>HAPPY CLIENT</p>
                </Icon>
                <Icon>
                    <img src={props.icon3} />
                    <p>RETURN CLIENT</p>
                </Icon>
            </BoxSize>
        </Box>
    );
};

export default PortfolioCategorias;
