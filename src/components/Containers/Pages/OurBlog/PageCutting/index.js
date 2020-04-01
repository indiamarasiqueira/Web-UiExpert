import React from 'react'

import {
    Container,
    Section,
    TitleOne,
    Titletwo,
    Button,
    ButtonSeta,
} from './style';
import imagem from '../../../../../img/image1.png'
import seta from '../../../../../img/seta-blog.png'

const PageCutting = () => {
    return (
        <Container>
            <Section>
                <Button>
                    <img src={imagem} />
                </Button>
                <TitleOne>
                    Cutting-edge products launched through Logitech-Excel
                </TitleOne>
                <Titletwo>
                    The Managing Director & Cluster Head India & South-West Asia
                    at Logitech Sumanta Datta.
                </Titletwo>
                <ButtonSeta>
                    <img src={seta} />
                </ButtonSeta>
            </Section>
            <Section>
                <Button>
                    <img src={imagem} />
                </Button>
                <TitleOne>
                    Cutting-edge products launched through Logitech-Excel
                </TitleOne>
                <Titletwo>
                    The Managing Director & Cluster Head India & South-West Asia
                    at Logitech Sumanta Datta.
                </Titletwo>
                <ButtonSeta>
                    <img src={seta} />
                </ButtonSeta>
            </Section>
            <Section>
                <Button>
                    <img src={imagem} />
                </Button>
                <TitleOne>
                    Cutting-edge products launched through Logitech-Excel
                </TitleOne>
                <Titletwo>
                    The Managing Director & Cluster Head India & South-West Asia
                    at Logitech Sumanta Datta.
                </Titletwo>
                <ButtonSeta>
                    <img src={seta} />
                </ButtonSeta>
            </Section>
        </Container>
    );
}
export default PageCutting;
