import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './cartpage.module.scss'
import {addTocart  } from '../../Redux/selectors/cart'
import CustomList from '../../components/CustomList'


function CartPage() {
    const cart = useSelector(addTocart)
console.log(cart)
    return (
        <div className={styles.content}>
            <p> Total de productos!</p>
            {cart.map((item, key) => <CustomList key={key} alldata={item} viewBts={false} />)}

        </div>
    )
}

export default CartPage
