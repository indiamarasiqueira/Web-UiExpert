import React from 'react';


import Listas from '../../Pages/Portfolio/Listas';

import image1 from '../../../../img/image1.png';
import image2 from '../../../../img/image2.png';
import image3 from '../../../../img/image3.png';
import image4 from '../../../../img/image4.png';
import image5 from '../../../../img/image5.png';
import image6 from '../../../../img/image6.png';

const Portifolio = () => (
    <Listas
        title="Our portfolio"
        subTitle="View our portfolio in catagoris"
        icon1={image1}
        icon2={image2}
        icon3={image3}
        icon4={image4}
        icon5={image5}
        icon6={image6}
    />
);

export default Portifolio
