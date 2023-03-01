import { getCategoryApi } from "@/api/category";
import HeaderSeo from "@/components/HeaderSeo";
import Category from "@/components/Page/Category";
import { CategoryProps } from "@/types/Category";
import { ParamsProps } from "@/types/Params";

export default function CategoryPage(props: CategoryProps) {
    if (props.getCategoryData.length === 0) return null;

    return (
        <>
            <HeaderSeo />
            <Category data={props.getCategoryData[0].attributes} />
        </>
    )
};

export async function getServerSideProps(params: ParamsProps) {
    const { query } = params;
    const { category } = query;
    const getCategoryData = await getCategoryApi(category);

    try {
        if (!getCategoryData.length) {
            return {
                notFound: true // Show 404 page
            }
        }
        return {
            props: { getCategoryData }
        }

    } catch (error) {
        console.error(error);
    }

}