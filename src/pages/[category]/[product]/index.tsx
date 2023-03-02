import { getProductApi } from "@/api/product";
import HeaderSeo from "@/components/HeaderSeo";
import Product from "@/components/Page/Product";
import { ProductProps } from "@/types/Product";
import { Header } from "semantic-ui-react";


export default function ProductPage(props: ProductProps) {
    const { getProductData } = props;
    if (!props.getProductData) return <Header>No se han encontrado resultados</Header>

    return (
        <>
            <HeaderSeo />
            <Product product={getProductData[0]} />
        </>
    )
}

export async function getServerSideProps(params: any) {
    const { query } = params;
    const { product } = query;
    const getProductData = await getProductApi(product);

    try {
        if (getProductData === null || !getProductData.length) {
            return {
                notFound: true
            }
        }

        return {
            props: { getProductData }
        }
    } catch (error) {
        console.error(error)
    }
}