import React, { useState } from 'react'
import styles from './custom.list.module.scss'
import { useDispatch } from 'react-redux'
import { urlImages } from '../../utils/constants'
import { useHistory } from 'react-router-dom'
import { getByIddata } from '../../Redux/actions/car'
import { addtocar } from '../../Redux/actions/cart'


function CustomList({ alldata, viewBts = true }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (id) => {
        const newCart = [...cart, id];
        setCart(newCart);
        dispatch(addtocar(newCart))

    }
    const handleRemoveToCart = (id) => {
        const newCart = cart.filter(item => item !== id);
        setCart(newCart);
    }

    const onDetails = () => {
        dispatch(getByIddata(alldata._id))
        history.push('/details/' + alldata._id)
    }

    return (
        <div className={styles.content}>
            {
                viewBts && <>
                    <p> <b>Total de productos: </b> {cart.length} </p>
                </>
            }
            <div className={styles.cardstyles}>

                <div>
                    <p><b>{alldata.name}</b></p>
                    <p><b>Descripción: </b> {alldata.description}</p>
                    {
                        viewBts && <>
                            <button
                                type="button" disabled={alldata.countInStock === 0}
                                onClick={() => handleAddToCart(alldata)} > add item to cart!</button>
                            <button
                                type="button" disabled={alldata.countInStock === 0}
                                onClick={() => handleRemoveToCart(alldata)} > remove item to cart</button></>
                    }

                    <p><b>{alldata.category}</b></p>
                </div>
                <div>
                    <img src={urlImages + alldata.image} alt="" className={styles.imgaes} />
                    <p> <b> Unidades en Stock:</b> {alldata.countInStock} </p>
                    <button
                        type="button"
                        onClick={onDetails} > Ver detalles!</button>
                </div>
            </div>

        </div>
    )
}

export default CustomList
