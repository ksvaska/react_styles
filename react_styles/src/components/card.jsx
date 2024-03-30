import React from "react";
import styles from "./card.module.css";

function Card({price,speed,theme,selected}){
    

    return(
        <div className={{selected}? styles.selected : styles.card   }>
            <p className={`${styles.title} ${theme.title}`}>Безлимитный {price}</p>
            <div className={`${styles.info} ${theme.price}`}>
                <p className={styles.rub}>руб</p>
                <p className={styles.price}>{price}</p>
                <p className={styles.month}>/мес</p>
            </div>
            <p className={styles.speed}> до {speed} Мбит/сек</p>
            <p className={styles.footer}>Объем включенного  <br/> трафика не ограничен</p>
        </div>

    );
}

export default Card;