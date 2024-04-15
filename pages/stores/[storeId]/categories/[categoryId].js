// pages/stores/[storeId]/categories/[categoryId].js
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const { storeId, categoryId } = context.params;
  const res = await fetch(
    `http://localhost:3000/api/storeStores/${storeId}/categories/${categoryId}`
  );
  const products = await res.json();

  if (res.status !== 200) {
    return {
      notFound: true,
    };
  }

  return {
    props: { products },
  };
}

export default function StoreCategoryProducts({ products }) {
  const router = useRouter();
  const { storeId, categoryId } = router.query;

  return (
    <div>
      <h1>
        Products for Store {storeId} and Category {categoryId}
      </h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
