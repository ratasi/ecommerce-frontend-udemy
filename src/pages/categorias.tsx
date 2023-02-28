import { getCategoriesProduct } from "@/api/categoriesProduct"
import HeaderSeo from "@/components/HeaderSeo"
import GlobalCategory from "@/components/Page/GlobalCategory"

type CategoriasProps = {
    getCategories: []
}

export default function Categorias(props: CategoriasProps) {
    const { getCategories } = props;

    return (
        <>
            <HeaderSeo title="Mira todas nuestras categorías disponibles" description="Todas las gorras al mejor precio" />
            <GlobalCategory data={getCategories} />
        </>
    )
}

export async function getServerSideProps() {
    const getCategories = await getCategoriesProduct();

    try {
        return {
            props: { getCategories }
        }
    } catch (error) {
        console.error(error);
    }
}