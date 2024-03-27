import React from "react";

function Card(props){
    const {price,speed} = props;
    return(
        <div className="card-body">
            <p className="card-title">Безлимитный {price}</p>
            <p className="card-price">руб {price}/мес</p>
            <p className="card-speed"> до {speed} Мбит/сек</p>
            <p>Объем включенного трафика не ограничен</p>
        </div>

    );
}

export default Card;