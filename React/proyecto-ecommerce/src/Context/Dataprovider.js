import React, { useState, useEffect, createContext } from "react";
import data from "../data"

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [productos, setProductos] = useState([])
    const [menu, setMenu] = useState(false);
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [tienda, setTienda] = useState([])



    useEffect(() =>{

        const producto = data.items
        if (producto){
            setProductos(producto)
        }else {
            setProductos([])
        }
        setProductos(producto)

    },[])

    const addCarrito = (id) =>{
        const check = carrito.every(item =>{
            return item.id !== id;
        })
        if(check){
            const data = tienda.filter(res =>{
                return res.id === id
            })
            setCarrito([...carrito, ...data])
        }else{
            alert("EL producto ya se encuentra en el carrito")
        }
    }

    useEffect(() => {
        const gettienda = () =>{
            fetch("http://localhost:9000/api")
            .then(res => res.json())
            .then(res => setTienda(res))           
        }
        gettienda()
        
    },[])


    useEffect(() => {
       const dataCarrito = JSON.parse(localStorage.getItem("dataCarrito")
       )
       if(dataCarrito){
           setCarrito(dataCarrito)
       }
    }, [] )


    useEffect(() => {
        localStorage.setItem("dataCarrito", JSON.stringify(carrito))
    },[carrito]) 


    useEffect(() => {
        const getTotal = () => {
            const res = carrito.reduce((prev, item) =>{
                return prev + (item.price * item.cantidad)
                
            },0)
            setTotal(res)
        }
        getTotal()
    },[carrito])
    
    
    const value = {
        productos : [productos],
        menu: [menu, setMenu],
        addCarrito: addCarrito,
        carrito: [carrito, setCarrito],
        total: [total, setTotal],
        tienda: [tienda]
    }


    return(
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
};


