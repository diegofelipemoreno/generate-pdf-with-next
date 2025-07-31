import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';
import { ProductListRenderer } from './ProductListRenderer';

const styles = StyleSheet.create({
  page: { padding: 24 },
  title: { fontSize: 20, marginBottom: 10 },
  product: { marginBottom: 10 },
  bold: { fontWeight: 'bold' },
});

const ProductPDF = ({ products }: { products: any[] }) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.title}>Product List</Text>
      <ProductListRenderer
        products={products}
        renderItem={(product) => (
          <View key={product.id} style={styles.product}>
            <Text style={styles.bold}>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text>${product.price}</Text>
          </View>
        )}
      />
    </Page>
  </Document>
);

export default ProductPDF;
