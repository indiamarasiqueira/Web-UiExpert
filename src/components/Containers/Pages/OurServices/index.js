import React, { Component } from 'react';

import { BoxServices, Content, Title, SubTitle, Label } from './style';
import WebSites from './WebSites';


class OurServices extends Component {
    render() {
        return (
            <BoxServices id="service">
                <Content>
                    <Title>OUR SERVICES</Title>
                    <SubTitle>We Provide Best Quality Service </SubTitle>
                    <Label>
                        Our commitment to quality ensures that your applications
                        get the best UI design possible. UI/UX design is more
                        than just pixels and animations, but the entire
                        application experience.
                    </Label>
                </Content>
                <WebSites />
            </BoxServices>
        );
    }
}
export default OurServices;
