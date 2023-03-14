import { useGetProductsHome } from '@/api/productsHome'
import Container from '@/components/Container'
import { formatPrice } from '@/utils/formatPrice'
import { Grid, Header } from 'semantic-ui-react'
import * as S from './BestSellers.styles'
import { BestSellerProps, ProductProps } from './BestSellers.types'

const BestSellers = () => {
    const { result }: BestSellerProps = useGetProductsHome();

    return (
        <Container>
            <S.ContainerBestSellers>
                <S.Title as="h2" size="huge">Los productos <span>más vendidos</span></S.Title>
                <Grid>
                    {result !== null && (
                        result.map((data: ProductProps) => {
                            const product = data.attributes;
                            const imageUrl = product.images.data[0].attributes.url;
                            const priceProduct = formatPrice(product.price);
                            const categorySlug = product.category_product.data.attributes.slug;

                            return (
                                <S.ContainerProduct key={data.id}>
                                    <div>
                                        <S.ImageProduct src={`${process.env.NEXT_PUBLIC_STRAPI_HOST}${imageUrl}`} alt={`Image ${name}`} width="250" height="150" />
                                        <Header size="small">{product.name}</Header>
                                        <p>{priceProduct}</p>
                                    </div>
                                    <S.LinkProduct href={`${categorySlug}/${product.slug}`}>Comprar producto</S.LinkProduct>
                                </S.ContainerProduct>
                            )
                        })
                    )}
                </Grid>
            </S.ContainerBestSellers>
        </Container>
    )
}

export default BestSellers