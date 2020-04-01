import React  from 'react'
import PageCutting from '../PageCutting'

import {
    Content,
    Header,
    Title,
    SubTitle,
    Footer,
    Icon,
} from './style'

const Blog = props => {
return (
    <Content id="blog">
        <Header>
            <Title>{props.title}</Title>
            <SubTitle>{props.subTitle}</SubTitle>
        </Header>
        <PageCutting />
        <Footer>
            <Icon>
                <img src={props.icon1} />
                <img src={props.icon2} />
                <img src={props.icon3} />
                <img src={props.icon4} />
                <img src={props.icon5} />
            </Icon>
        </Footer>
    </Content>
);
}


export default Blog;
