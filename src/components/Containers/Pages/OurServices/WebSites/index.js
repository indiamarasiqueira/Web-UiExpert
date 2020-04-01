import React, { Component, Fragment } from 'react';

import { Container } from './style';

import WebSiteUi from './WebSiteUi';
import ReDesign from './ReDesign';
import ApplicationUi from './ApplicationUi';
import MobileAppUi from './MobileAppUi';
import WebAppUi from './WebAppUi';
import WebElements from './WebElements';


class WebSites extends Component {

    render() {
        return (
            <Container>
                <WebSiteUi />
                <ReDesign />
                <ApplicationUi />
                <MobileAppUi />
                <WebAppUi />
                <WebElements />
            </Container>
        );
    }
}
export default WebSites;
