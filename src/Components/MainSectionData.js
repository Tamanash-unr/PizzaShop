import { useEffect, useRef } from "react";

function MainSectionData(props){
    const {order, updateStage} = props;
    const stage = {
        9: "Cancelled", 
        0: "Order Placed",
        1: "Order in Making",
        2: "Order Ready",
        3: "Order Picked"
      }
    var orderTime = 0;
    var OrderTimer = useRef();

    useEffect(()=>{
        if(order.stage < 3){
            OrderTimer.current = setInterval(() => {
                document.getElementById(`${order.id}-elapsedTime`).innerHTML = getTimePassed();
                orderTime += 1;
            }, 1000);
            
            return () => {
                clearInterval(OrderTimer.current);
            };
        }
    },[])

    useEffect(()=>{
        if(order.stage >= 3){
            clearInterval(OrderTimer.current);
        }
    }, [order.stage]);

    function getTimePassed(){
        let min = Math.floor(orderTime / 60);
        let sec = orderTime - (min * 60);

        if(min > 0){
            return `${min} min ${sec} sec`
        } else {
            return `${sec} sec`
        }
    }

    return (
        <div className='data-container'>
            <div className='main-data'>Order ID: {order.id}</div>
            <div className='main-data'>{stage[order.stage]}</div>
            <div id={`${order.id}-elapsedTime`} className='main-data'>{order.timeSpent}</div>
            <div className='main-data'>
                {order.stage >= 2 ? <></> : <button className="btn" onClick={() => updateStage(order.id, 9)}>Cancel Order</button>}
            </div>
        </div>
    )
}

export default MainSectionData;