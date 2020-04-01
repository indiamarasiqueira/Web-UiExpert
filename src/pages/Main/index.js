import React from 'react'
import { Container } from './style'

import MainHeader from '../../components/Containers/Pages/MainHeader'
import OurServices from '../../components/Containers/Pages/OurServices';
import About from '../../components/Containers/Pages/About'
import Portfolio from '../../components/Containers/Pages/Portfolio'
import OurSuccess from '../../components/Containers/Pages/OurSuccess'
import OurWorkflow from '../../components/Containers/Pages/OurWorkflow';
import OurBlog from '../../components/Containers/Pages/OurBlog'


const Main = () => (
    <Container>
        <MainHeader />
        <OurServices />
        <About />
        <Portfolio />
        <OurSuccess />
        <OurWorkflow />
        <OurBlog />
    </Container>
);

export default Main


