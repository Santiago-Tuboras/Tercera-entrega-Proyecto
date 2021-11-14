import React, {useContext} from "react";
import { DataContext, DataProvider } from "../Context/Dataprovider";

export const ProductoItem = ({
    key,
    id,
    title,
    price,
    imagen,
    category,
}) => {

    const value = useContext(DataContext)
    const addCarrito = value.addCarrito

    return(
        <>
        <div className="Productos">
    
        <div className="Producto">
            <a href="#">
                <div className="Producto_img">
                    <img src={imagen.default} alt={title} />
                </div>
            </a>
            <div className="Producto__Footer">
                <h1>{title}</h1>
                <p>{category}</p>
                <p className="price">${price}</p>
            </div>

            <div className="Buttom">
                <button className="btn" onClick={() => addCarrito(id)}>Añadir al carrito</button>

                <a href="#" className="btn"> Vista</a>
            </div>
            
        </div>
    
    </div>
        </>
    )
}