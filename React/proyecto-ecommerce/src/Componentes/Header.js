import React,{useContext} from "react";
import Icono from "../Imagenes/Logo.png"
import 'boxicons';
import { Link } from "react-router-dom"
import { DataContext, DataProvider } from "../Context/Dataprovider";

const Header = ({ children }) => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito, setCarrito] = value.carrito;
  console.log(menu)

  const tooglemenu = () => {
   setMenu(!menu)
  }


  return (

    <header>
      <div className="icon_menu">
        <box-icon name="menu"></box-icon>
      </div>

      <Link to="#">
        <div className="logo">
          <img src={Icono} alt="" width="150" />
        </div>
      </Link>

      <ul class="menu">
        <li><Link to="/Inicio" >Inicio</Link></li>
        <li><Link to="/Productos" >Productos</Link></li>
        <li><Link to="/Contacto">Contacto</Link></li>
      </ul>

      <div className="cart" onClick={tooglemenu}>
        <Link to="/Carrito"><box-icon name="cart"></box-icon></Link>
        <span className="Item__total">{carrito.length}</span>
      </div>{}

    </header>

  );
};

export default Header;