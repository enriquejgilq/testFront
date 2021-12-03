import React, { useEffect } from 'react'
import styles from './home.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getAllData } from '../../Redux/actions/car'
import { error, loading, getAll } from '../../Redux/selectors/car'
import CustomLoader from '../../components/CustomLoader'
import CustomList from '../../components/CustomList'
import carImage from '../../assets/kisspng-shopping-cart-computer-icons-white-cart-png-simple-5ab15d02e7c8b8.7488579515215731229494.jpg'
import { useHistory } from 'react-router-dom'

function Home() {
    const dispatch = useDispatch();
    const alldata = useSelector(getAll)
    const isLoading = useSelector(loading)
    const isError = useSelector(error)
    const history = useHistory();


    useEffect(() => {
        dispatch(getAllData())
    }, [])
    if (isLoading) {
        return <CustomLoader />
    }

    const onCartPage = () => {
        history.push('/cart-page')
    }

    return (
        <div className={styles.content}>
            <div className={styles.allproducts} >
                <h1>Carrito de productos!</h1>
                <img src={carImage} alt="" style={{ width: '20px' }} />
                <div>
                    <button onClick={onCartPage}> Ver productos</button>
                </div>
            </div>


            {alldata.map((item, key) => <CustomList key={key} alldata={item} />)}
        </div>
    )
}

export default Home
