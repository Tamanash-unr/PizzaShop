import "./pizzaCard.css";

import { useState, useEffect} from "react";

function PizzaCard(props){
    const {order, updateStage} = props;
    const orderId = `order-${order.id}`;

    const [orderStage, setorderStage] = useState(order.stage);
    var orderTime = 0;

    // Delay Time Indexing
    const delayTime = {
        'small': 3,
        'medium': 4,
        'large': 5
    }

    useEffect(()=>{
        if(orderStage < 3){
            var OrderTimer = setInterval(() => {
                document.getElementById(`${orderId}-time`).innerHTML = getTimePassed();
                orderTime += 1;
            }, 1000);
            orderTime = 0;
    
            
            return () => {
                clearInterval(OrderTimer);
                if(document.getElementById(orderId)){
                    document.getElementById(orderId).classList.remove("delayed");
                }
            };
        } else {
            document.getElementById(`${orderId}-time`).innerHTML = "Order Picked";
        }
    },[orderStage])

    function getTimePassed(){
        let min = Math.floor(orderTime / 60);
        let sec = orderTime - (min * 60);

        let htmlObj = document.getElementById(orderId);

        if(min >= delayTime[order.size] && !htmlObj.classList.contains("delayed")){
            htmlObj.classList.add("delayed");
        }

        if(min > 0){
            return `${min} min ${sec} sec`
        } else {
            return `${sec} sec`
        }
    }

    function nextStage(){
        if(orderStage <= 2){
            setorderStage(orderStage + 1);
            updateStage(order.id, orderStage + 1);
        }
    }

    return (
        <div id={orderId} className="pizza-card">
            <h3>Order ID : {order.id}</h3>
            <div>Type: {order.type}, Size: {order.size}, Base: {order.base}</div>
            <p id={`${orderId}-time`}>0 sec</p>
            {
                orderStage >= 3 ? <></> : <button className="btn" onClick={() => nextStage()}>Next</button>
            }
        </div>
    )
}

export default PizzaCard;