import './App.css';
import { useState, useEffect } from 'react';
import PizzaCard from './Components/pizzaCard';

function App() {
  const [orders, setOrders] = useState([]);

  function testOrder(){
    const order = {
      id: Math.random() * (25 - 1) + 1,
      status: 0,
      base: "Large"
    }

    let newOrders = [...orders];
    newOrders.push(order);

    setOrders(newOrders);
  }

  function updateOrderStatus(id, status){
      console.log(id, status);
      const currentOrders = [...orders];

      for(let i = 0; i < currentOrders.length; i++){
        if(currentOrders[i].id === id){
          currentOrders[i].status = status;
          break;
        }
      }

      setOrders(currentOrders);
  }

  return (
    <div className="App">
      <button onClick={testOrder}>Add Order</button>
      <div className='container'>
        <div className='orders-created'>
        {
          orders.map((order)=>{
            if(order.status === 0){
              return <PizzaCard key={order.id} order={order} updateStatus={updateOrderStatus}/>
            } else {
              return <></>
            }
          })
        }
        </div>
        <div className='orders-making'>
        {
          orders.map((order)=>{
            if(order.status === 1){
              return <PizzaCard key={order.id} order={order} updateStatus={updateOrderStatus}/>
            } else {
              return <></>
            }
          })
        }
        </div>
        <div className='orders-ready'>
        {
          orders.map((order)=>{
            if(order.status === 2){
              return <PizzaCard key={order.id} order={order} updateStatus={updateOrderStatus}/>
            } else {
              return <></>
            }
          })
        }
        </div>
        <div className='orders-delivered'>
        {
          orders.map((order)=>{
            if(order.status === 3){
              return <PizzaCard key={order.id} order={order} updateStatus={updateOrderStatus}/>
            } else {
              return <></>
            }
          })
        }
        </div>
      </div>
    </div>
  );
}

export default App;
