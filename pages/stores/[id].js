export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`http://localhost:3000/api/storeStores/${id}`);
  const store = await res.json();

  return {
    props: { store }, // 페이지 컴포넌트에 store prop으로 전달
  };
}

export default function StorePage({ store }) {
  return (
    <div>
      <h1>{store.name}</h1>
      <ul>
        {store.products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
