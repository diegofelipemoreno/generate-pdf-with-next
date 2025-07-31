export const ProductListRenderer = ({
  products,
  renderItem,
}: {
  products: any[];
  renderItem: (product: any) => React.ReactNode;
}) => {
  return <>{products.map(renderItem)}</>;
};
