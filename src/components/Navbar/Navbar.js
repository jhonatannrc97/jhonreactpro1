import './Navbar.css'//importa los estilos de mi archivo Navbar.css
import CartWidget from '../CardWidget/CartWidget'
import Button from '../Button/button' //importa mi funcion boton button.js 

const Navbar = () =>{
    return(
        <nav className="Navbar">
            <h1>TIENDA DE AUTOS BOLT</h1>
                <div>

                    <Button label="INICIO" callback={()=>console.log('INICIO')}/>
                    <Button label="CONTACTOS" callback={()=>console.log('CONTACTOS')}/>
                    <Button label="MARCAS" callback={()=>console.log('MARCAS')}/>
                    <Button label="INFORMACION" callback={()=>console.log('INFORMACION')}/>
                </div>
                
                <CartWidget/>
            
        </nav>
    )
}

export default Navbar//exportar archivo a apps.js