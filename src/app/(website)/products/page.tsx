import Products from '@/features/website/Products/Products';

export default async function CategoriesPage(props: {
    searchParams?: Promise<Record<string, string>>;
}) {
    const searchParams = await props.searchParams;

    return <Products filters={searchParams} />;
}
