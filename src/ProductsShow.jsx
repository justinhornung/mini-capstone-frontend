export function ProductsShow(props) {
  return (
    <div>
      <h1>Product information</h1>
      <p>Name: {props.product.name}</p>
      <p>Url: {props.product.url}</p>
      <p>Width: {props.product.width}</p>
      <p>Height: {props.product.height}</p>
    </div>
  );
}
