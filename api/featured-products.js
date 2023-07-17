// api/featured-products.js

const featuredProducts = [
    { slug: 'iphone-12', title: 'iPhone 12', description: 'The latest iPhone with advanced features.' },
    { slug: 'macbook-pro', title: 'MacBook Pro', description: 'Powerful performance in a sleek design.' },
  ];
  
  export default function handler(req, res) {
    if (req.method === 'GET') {
      // Handle GET request
      res.status(200).json(featuredProducts);
    } else {
      // Handle other HTTP methods
      res.status(405).end(); // Method Not Allowed
    }
  }
  