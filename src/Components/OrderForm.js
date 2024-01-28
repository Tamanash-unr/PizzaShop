import "./OrderForm.css"

function OrderForm(props){
    const { addOrder, placingOrder, orderCount } = props;

    function handleFormSubmit(evt){
        evt.preventDefault();

        const order = {
            id: orderCount + 1,
            stage: 0,
            type: document.getElementById('pizza-type').value,
            size: document.getElementById('pizza-size').value,
            base: document.getElementById('pizza-base').value,
        }

        addOrder(order);
        placingOrder(false);
    }

    return (
        <div className='orderForm-container' style={{display: 'block' }}>
            <div className="orderForm-content">
                <div className="orderForm-heading">
                    <h2>Place Order</h2>
                    <i className='fa fa-times-circle fa-xl' onClick={() => placingOrder(false)}></i>
                </div>
                <form className="orderForm" onSubmit={handleFormSubmit}>
                    <div className="form-control">
                        <label forhtml="pizza-type">Type</label>
                        <select id="pizza-type" name="pizza-type">
                            <option value="veg">Veg</option>
                            <option value="non-veg">Non-Veg</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label forhtml="pizza-size">Size</label>
                        <select id="pizza-size" name="pizza-size">
                            <option value="large">Large</option>
                            <option value="medium">Medium</option>
                            <option value="small">Small</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label forhtml="pizza-base">Base</label>
                        <select id="pizza-base" name="pizza-base">
                            <option value="thin">Thin</option>
                            <option value="thick">Thick</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <button type="submit" className="btn">Order Pizza</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default OrderForm;