import Head from "next/head";
import { HeaderSeoProps } from "./HeaderSeo.types"


const HeaderSeo = (props: HeaderSeoProps) => {
    const { title = "Ecommerce Strapi Udemy - Rafa Tárrega", description = "Ecommerce de Gorras | By Rafa Tárrega" } = props;

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default HeaderSeo