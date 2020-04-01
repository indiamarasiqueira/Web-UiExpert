import React from 'react';


import PortfolioCategorias from '../OurSuccess/PortfolioCategorias';
import imagen1 from '../../../../img/PROJECT-DONE.png';
import imagen2 from '../../../../img/Happy-Client.png';
import imagen3 from '../../../../img/return-client.png';


const OurSuccess = () => (
    <PortfolioCategorias
        title="Our Success"
        subTitle="View our portfolio in catagoris"
        icon1={imagen1}
        icon2={imagen2}
        icon3={imagen3}
    />
);

export default OurSuccess;

