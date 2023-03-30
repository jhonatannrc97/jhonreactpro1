const Item = ({id,nombre,img,precio}) => {
  return (
    <div style={{background:'gray',margin:10}}>
      <h3>{nombre}</h3>
      <img src={img} alt={nombre} style={{width:100}} />
      <p>Precio: ${precio}</p>
    </div>
  );
};

export default Item
