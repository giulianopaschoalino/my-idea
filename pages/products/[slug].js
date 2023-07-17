import React from 'react';

const products = [
  //{ slug: 'iphone-12', title: 'iPhone 12', description: 'The latest iPhone with advanced features.' },
  { slug: 'macbook-pro', title: 'MacBook Pro', description: 'Powerful performance in a sleek design.' },
  // Add more products here
];

const ProductPage = ({ product }) => {
  if (!product) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = products.find((p) => p.slug === params.slug) || null;

  return { props: { product } };
}

export default ProductPage;
