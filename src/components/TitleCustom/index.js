import React from 'react';
import { Title } from './style';

const TitleCustom = props => {
    return (
        <Title>
            {props.title}
            <span>{props.subTitle}</span>
        </Title>
    );
};

export default TitleCustom;
