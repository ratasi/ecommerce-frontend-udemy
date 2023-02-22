import Container from '@/components/Container'
import { Grid } from 'semantic-ui-react'
import * as S from './FirstBlock.styles'

const FirstBlock = () => {
    return (
        <S.ContainerFirstBlock>
            <Container>
                <Grid verticalAlign='middle'>
                    <Grid.Column mobile={16} tablet={8} computer={8}>
                        <S.Title as="h1">Creando el mejor <span>E-commerce de gorras</span></S.Title>
                        <S.SubHeader>En este curso aprenderás a cómo crear tu <span>E-commerce con Strapi y NextJS</span> desde cero </S.SubHeader>
                        <S.LinkShop href="/categories"> Ver todas las categorías</S.LinkShop>

                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={8}>
                        <S.ImageCaps src="/assets/jpg/home-gorra-2.jpg" alt="Gorras home Ecommerce" width="400" height="250" priority />
                    </Grid.Column>
                </Grid>
            </Container>
        </S.ContainerFirstBlock>
    )
}

export default FirstBlock