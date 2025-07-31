'use client';
import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ProductPDF from '../components/ProductPDF';
import { ProductListRenderer } from '../components/ProductListRenderer';

const DownloadPDF = () => {
  const [products, setProducts] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Generate Product PDF</h1>

      {/* HTML View */}
      {!loading && (
        <ul>
          <ProductListRenderer
            products={products}
            renderItem={(product) => (
              <li key={product.id}>
                <strong>{product.title}</strong>: ${product.price}
              </li>
            )}
          />
        </ul>
      )}

      {/* PDF Download */}
      {!loading && (
        <PDFDownloadLink
          document={<ProductPDF products={products} />}
          fileName="products.pdf"
        >
          {({ loading }) =>
            loading ? 'Generating PDF...' : <button>Download PDF</button>
          }
        </PDFDownloadLink>
      )}
    </div>
  );
};

export default DownloadPDF;
