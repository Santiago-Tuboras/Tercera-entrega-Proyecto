import React, { useContext } from "react";
import { DataContext } from "../Context/Dataprovider"
import { ProductoItem } from "./Productoitem";


const ListaProductos = () => {

    const value = useContext(DataContext)
    const [tienda] = value.tienda

    
    

    return (
        <>
            <h1 className="Title">Productos</h1>
            <div className="Productos">
                <section class="contaimain-productos">
                    {
                        tienda.map(res => (
                            < ProductoItem key={res.id}
                                id={res.id}
                                title={res.title}
                                price={res.price}
                                imagen={res.image}
                                category={res.category}
                                cantidad={res.cantidad} />
                        ))
                    }
                </section>
            </div>
        </>
    )
}

export default ListaProductos;