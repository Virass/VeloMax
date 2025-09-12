import Categories from '@/entities/website/Categories/Categories';

export default async function CategoriesPage(props: {
    searchParams?: Promise<Record<string, string>>;
}) {
    const searchParams = await props.searchParams;

    return <Categories filters={searchParams} />;
}
