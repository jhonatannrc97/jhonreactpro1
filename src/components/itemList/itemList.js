import Item from "../item/item";

const ItemList = ({products}) => {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}} >
      {products.map((product) => <Item key={product.id} {...product}/>)}
    </div>
  );
};

export default ItemList;
