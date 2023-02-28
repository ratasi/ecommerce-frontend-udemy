import Container from '@/components/Container'
import Image from 'next/image'
import { Grid, Header } from 'semantic-ui-react'
import * as S from './GlobalCategory.styles'
import { GlobalCategoryProps } from './GlobalCategory.types'

const GlobalCategory = (props: GlobalCategoryProps) => {
    const { data } = props;

    return (
        <Container>
            <S.ContainerGlobalCategories>
                <Header as="h1">Todas nuestras colecciones</Header>
                <S.ContainerCategories doubling columns={2}>
                    {data.map((data) => (
                        <Grid.Column key={data.attributes.name}>
                            <S.ContentLink href={data.attributes.slug}>
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_STRAPI_HOST}${data.attributes.image.data.attributes.url}`}
                                    alt={`${data.attributes.name} Image`}
                                    width="200"
                                    height="250" />
                                <Header size="large">{data.attributes.name}</Header>
                            </S.ContentLink>
                        </Grid.Column>
                    ))}
                </S.ContainerCategories>
            </S.ContainerGlobalCategories>
        </Container>
    )
}

export default GlobalCategory