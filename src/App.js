import './App.css';
import { useState, useEffect } from 'react';
import PizzaCard from './Components/pizzaCard';
import MainSectionData from './Components/MainSectionData';

function App() {
  const [orders, setOrders] = useState([]);
  const [currentOrders, setCurrentOrders] = useState(0);
  const [placingOrder, setPlacingOrder] = useState(false);

  function testOrder(){
    if(currentOrders === 10){
      alert("Cannot Accept Any More Orders")
      return
    }

    const order = {
      id: Math.random() * (25 - 1) + 1,
      stage: 0,
      type: "Veg",
      size: "Large",
      base: "Thick",
    }

    let newOrders = [...orders];
    newOrders.push(order);

    setCurrentOrders(currentOrders + 1);
    setOrders(newOrders);
  }

  function updateOrderStage(id, stage){
      const currentOrders = [...orders];

      for(let i = 0; i < currentOrders.length; i++){
        if(currentOrders[i].id === id){
          currentOrders[i].stage = stage;
          break;
        }
      }

      setOrders(currentOrders);
  }

  function getTotalOrdersDelivered(){
    let total = 0;

    orders.forEach(order => {
      if(order.stage === 3){
        total += 1;
      }
    })

    return total;
  }
  

  return (
    <div className="App">
      <div className='page-top'>
        <h1>Pizza Shop</h1>
        <button className='btn' onClick={testOrder}>Add Order</button>
      </div>
      <div className='App-Body'>
        <h2 className='section-header'>Pizza Stages</h2>
        <div className='pizza-stages'>
          <div className='orders-placed'>
            <h2>Order Placed</h2>
          {
            orders.map((order)=>{
              if(order.stage === 0){
                return <PizzaCard key={order.id} order={order} updateStage={updateOrderStage}/>
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
              if(order.stage === 1){
                return <PizzaCard key={order.id} order={order} updateStage={updateOrderStage}/>
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
              if(order.stage === 2){
                return <PizzaCard key={order.id} order={order} updateStage={updateOrderStage}/>
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
              if(order.stage === 3){
                return <PizzaCard key={order.id} order={order} updateStage={updateOrderStage}/>
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
            <div className='main-head main-data'>Total Time Spent (from when Order Placed)</div>
            <div className='main-head main-data'>Action</div>
          </div>
          {
            orders.map((order)=>{
              return (<MainSectionData order={order} updateStage={updateOrderStage} />)
            })
          }
          <div className='totals-container'>
            <div className='total-data'>Total Orders Delivered</div>
            <div className='total-data' style={{width: '52%', justifyContent: 'left'}}>{getTotalOrdersDelivered()}</div>
            <div className='total-data'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
