import Link from "next/link";

export async function getServerSideProps() {
  const res = await fetch(
    "http://localhost:3000/api/storeCategories/getCategories"
  );
  const categories = await res.json();

  return {
    props: {
      categories,
    },
  };
}

export default function Categories({ categories }) {
  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/categories/${category.id}`}>
              <a>{category.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
