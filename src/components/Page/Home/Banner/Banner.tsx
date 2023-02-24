import Container from '@/components/Container'
import Image from 'next/image'
import { Button, Header } from 'semantic-ui-react'
import * as S from './Banner.styles'

const Banner = () => {
    return (
        <Container>
            <S.ContainerBanner>
                <S.ContainerText>
                    <Header size='large'>Combina los modelos de gorras con cualquier prenda</Header>
                    <p>Gracias a este curso podrás crear tu E-commerce de lo que quieras</p>
                    <Button size="large">Al mejor precio</Button>
                </S.ContainerText>
                <S.ContainerImage>
                    <Image alt="Image Banner" src="/assets/jpg/gorra-banner-home.jpg" width="300" height="200" />
                </S.ContainerImage>
            </S.ContainerBanner>
        </Container>
    )
}

export default Banner