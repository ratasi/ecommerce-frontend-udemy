import Container from '@/components/Container'
import { Grid, Header } from 'semantic-ui-react'
import { dataFirstBlock } from './BestSellers.data'
import * as S from './BestSellers.styles'

const BestSellers = () => {
    return (
        <Container>
            <S.ContainerBestSellers>
                <S.Title as="h2" size="huge">Los productos <span>más vendidos</span></S.Title>
                <Grid>
                    {dataFirstBlock.map(({ name, slug, image, price }) => (
                        <S.ContainerProduct key={slug}>
                            <div>
                                <S.ImageProduct src={`/assets/jpg${image}`} alt={`Image ${name}`} width="250" height="150" />
                                <Header size="small">{name}</Header>
                                <p>{price}</p>
                            </div>
                            <S.LinkProduct href={slug}>Comprar producto</S.LinkProduct>
                        </S.ContainerProduct>
                    ))}
                </Grid>
            </S.ContainerBestSellers>
        </Container>
    )
}

export default BestSellers