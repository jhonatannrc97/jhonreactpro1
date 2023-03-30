const products = [
    {
        id: 1,
        nombre: 'Nissan Sentra 2018',
        precio: 17.000,
        categoria: 'automovil',
        img:'https://www.nissan-cdn.net/content/dam/Nissan/BO/vehicles/sentra2020/b18/bolivia_assets/Advance-TM.jpg.ximg.l_12_m.smart.jpg',
        cantidad: 2,
        descripcion:'Nissan Sentra 2018 actualizado con nuevos colores en el mercado'
    },
    {
        id: 2,
        nombre: 'Toyota Hilux 4.0 AT NG',
        precio: 25.000,
        categoria: 'Camioneta',
        img:'https://api-res.toyosa.com/images/toyota/menu/hilux-40-at-ng.png',
        cantidad: 5,
        descripcion:'Camioneta Toyota Hilux 4.0 AT NG colores Blanco, Negro, Azul, Rojo'
    },
    {
        id: 3,
        nombre: 'Toyota Land Cruiser',
        precio: 30.000,
        categoria: 'Camioneta',
        img:'https://api-res.toyosa.com/images/toyota/menu/land-cruiser-70-camioneta.png',
        cantidad: 1,
        descripcion:'Camioneta Toyota Land Cruiser precio ofertable'
    },
   

   
]

export const getproducts = () => {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(products)
        },17.000)
    }) 
}