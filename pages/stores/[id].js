export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`http://localhost:3000/api/storeStores/${id}`);
  const data = await res.json();

  if (res.status !== 200) {
    return {
      notFound: true,
    };
  }

  return {
    props: { store: data },
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
