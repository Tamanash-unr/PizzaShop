import './App.css';
import { useState, useEffect } from 'react';
import PizzaCard from './Components/pizzaCard';

function App() {
  const [orders, setOrders] = useState([]);
  const status = {
    0: "Order Placed",
    1: "Order in Making",
    2: "Order Ready",
    3: "Order Picked"
  }

  function testOrder(){
    const order = {
      id: Math.random() * (25 - 1) + 1,
      status: 0,
      type: "Veg",
      size: "Large",
      base: "Thick",
      placedAt: Date.now()
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

  function getTimeElapsed(){

  }

  return (
    <div className="App">
      <button onClick={testOrder}>Add Order</button>
      <h2 className='section-header'>Pizza Stages</h2>
      <div className='pizza-stages'>
        <div className='orders-placed'>
          <h2>Order Placed</h2>
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
          <h2>Order in Making</h2>
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
          <h2>Order Ready</h2>
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
        <div className='orders-picked'>
          <h2>Order Picked</h2>
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
      <h2 className='section-header'>Main Section</h2>
      <div className='main-section'>
        <div className='header-container'>
          <div className='main-head main-data'>Order ID</div>
          <div className='main-head main-data'>Stage</div>
          <div className='main-head main-data'>Total Time Spent</div>
          <div className='main-head main-data'>Action</div>
        </div>
        {
          orders.map((order)=>{
            return (
              <div className='data-container'>
                <div className='main-data'>Order ID: {order.id}</div>
                <div className='main-data'>{status[order.status]}</div>
                <div className='main-data'>{order.placedAt}</div>
                <div className='main-data'>{status[order.status]}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
