import React, { useEffect } from 'react'
import styles from './detail.module.scss'
import { useSelector } from 'react-redux'
import { getById } from '../../Redux/selectors/car'
import { urlImages } from '../../utils/constants'



export default function DetailProducts() {
    const id = useSelector(getById)
    return (
        <div className={styles.content}>
           <div className={styles.carddetails}>
           <img src={urlImages + id.image} alt="" className={styles.imgaes} />

               <p><b> Detalles del producto </b></p>
               <p><b> Marca: </b> {id.brand}</p>
               <p><b> En stock: </b> {id.countInStock}</p>
               <p><b> Descripción: </b> {id.description}</p>
               <p><b> Nombre: </b> {id.name}</p>
               <p><b> numero de revisiones: </b> {id.numReviews}</p>
               <p><b> precio: </b> {id.price}</p>
               <p><b> rating: </b> {id.rating}</p>


           </div>
        </div>
    )
}
