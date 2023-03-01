export async function getCategoryApi(category: string) {
  try {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_HOST}/api/category-products/?filters[slug][$eq]=${category}&populate=deep`;
    const response = await fetch(url);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
