import Container from '@/components/Container';
import Image from 'next/image';
import { Grid, Header } from 'semantic-ui-react';
import BreadCrumb from './BreadCrumb';
import Features from './Features';
import * as S from './Product.styles'
import { ProductPageProps } from './Product.types';
import QuantityCart from './QuantityCart';

const Product = (props: ProductPageProps) => {
    const { product } = props;
    const { attributes } = product;
    const dataImages = attributes.images.data;
    const dataCategory = attributes.category_product.data.attributes.name;

    return (
        <Container>
            <S.ContainerProductPage>
                <Grid doubling columns={2}>
                    <Grid.Column>
                        <S.ContainerImages>
                            {dataImages.map((image) => (
                                <Grid.Row key={image.id}>
                                    <Image src={`${process.env.NEXT_PUBLIC_STRAPI_HOST}${image.attributes.url}`} width="200" height="250" alt="Image product" />
                                </Grid.Row>
                            ))}
                        </S.ContainerImages>
                    </Grid.Column>
                    <Grid.Column>
                        <S.InfoProduct>
                            <BreadCrumb productName={attributes.name} categoryName={dataCategory} />
                            <S.TitleProduct>{attributes.name}</S.TitleProduct>
                            <Header size="large">{attributes.price} €</Header>
                            <S.Description>{attributes.description}</S.Description>
                            <Features />
                            <QuantityCart product={product} />
                        </S.InfoProduct>
                    </Grid.Column>
                </Grid>
            </S.ContainerProductPage>
        </Container>

    )
}

export default Product