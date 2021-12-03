import React from 'react'
import styles from './custom.loader.module.scss'
function CustomLoader() {
    return (
        <div className={styles.content}>
            <div className={styles.loader} >
            </div>
        </div>
    )
}

export default CustomLoader
