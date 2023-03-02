export async function getProductApi(product: string) {
  try {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_HOST}/api/products/?filters[slug][$eq]=${product}&populate=deep`;
    const response = await fetch(url);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
