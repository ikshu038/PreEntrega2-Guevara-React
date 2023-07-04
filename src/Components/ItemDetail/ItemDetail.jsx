import React from 'react'
import { Link } from 'react-router-dom'
import './ItemDetail.css'

const ItemDetail = ({id, name, price, image}) => {
  return (
    <div>
        <Link to='/'>Volver al inicio</Link>
        <h2>Nombre: {name} </h2>
        <h3>Precio: {price} </h3>
        <h3>ID: {id} </h3>
        <p>El producto {name}, es un producto maravilloso</p>
        <img src={image} alt={name} />
    </div>
  )
}

export default ItemDetail