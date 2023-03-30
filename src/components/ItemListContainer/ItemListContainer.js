import { useEffect, useState } from "react";
import { getproducts } from "../../asyncMock";
import ItemList from "../itemList/itemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getproducts().then((products) => {
      setProducts(products);
    });
  }, []);
  console.log(products);
 
  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products}/>
    </div>
  );
};
export default ItemListContainer;
