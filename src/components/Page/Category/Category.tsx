import Container from '@/components/Container';
import Image from 'next/image';
import { Grid, GridColumn, Header } from 'semantic-ui-react';
import * as S from './Category.styles'
import { CategoryPageProps } from './Category.types'

const CategoryPage = (props: CategoryPageProps) => {
    const { data } = props;
    const { name, products, slug } = data;

    return (
        <S.ContainerCategory>
            <Container>
                <S.Title as="h1" size="huge">Productos {name}</S.Title>
                <Grid divided doubling columns={4}>
                    {products.data.map(({ id, attributes }) => {
                        const { name, price, images } = attributes;
                        const imageProduct = images.data[0].attributes.url;

                        return (
                            <GridColumn key={id}>
                                <S.ContainerImage>
                                    <Image src={`${process.env.NEXT_PUBLIC_STRAPI_HOST}${imageProduct}`} alt={name} width="250" height="300" />
                                </S.ContainerImage>
                                <S.ContainerTextPrice>
                                    <Header size="large">{name}</Header>
                                    <Header size="medium">{price} €</Header>
                                </S.ContainerTextPrice>
                                <S.LinkButton href={`${slug}/${attributes.slug}`}>Ver producto</S.LinkButton>
                            </GridColumn>
                        )

                    })}
                </Grid>
            </Container>
        </S.ContainerCategory>
    )
}

export default CategoryPage