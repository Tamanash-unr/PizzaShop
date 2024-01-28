import "./pizzaCard.css";

import { useState, useEffect} from "react";

function PizzaCard(props){
    const {order, updateStatus} = props;
    const orderId = `order-${order.id}`;

    // Order States are in following Order {0: Created, 1: Making, 2: Ready, 3: Delivered}
    const [orderState, setOrderState] = useState(order.status);
    var orderTime = 0;

    useEffect(()=>{
        if(orderState < 3){
            var OrderTimer = setInterval(() => {
                document.getElementById(`${orderId}-time`).innerHTML = getTimePassed();
                orderTime += 1;
            }, 1000);
            orderTime = 0;
    
            
            return () => {
                clearInterval(OrderTimer);
                document.getElementById(orderId).classList.remove("delayed");
            };
        } else {
            document.getElementById(`${orderId}-time`).innerHTML = "Order Picked";
        }
    },[orderState])

    function getTimePassed(){
        let min = Math.floor(orderTime / 60);
        let sec = orderTime - (min * 60);

        let htmlObj = document.getElementById(orderId);

        if(min >= 1 && !htmlObj.classList.contains("delayed")){
            htmlObj.classList.add("delayed");
        }

        if(min > 0){
            return `${min} min ${sec} sec`
        } else {
            return `${sec} sec`
        }
    }

    function nextStage(){
        if(orderState <= 2){
            setOrderState(orderState + 1);
            updateStatus(order.id, orderState + 1);
        } else {
            console.log(orderState, "executed");
        }
    }

    return (
        <div id={orderId} className="pizza-card">
            <h3>Order Number</h3>
            <p id={`${orderId}-time`}></p>
            <button className="btn" onClick={() => nextStage()}>Next</button>
            <button className="btn hidden">Cancel</button>
        </div>
    )
}

export default PizzaCard;