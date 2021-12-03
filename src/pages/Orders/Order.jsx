import React from 'react';
import OrderForm from '../../components/OrderForm';
import SubPageTitle from '../../components/SubPageTitle';
function Order(props) {
    const user_id = 1
    return (
        <div>
            <SubPageTitle title="order"/>
            <br/>
            <OrderForm user_id={user_id}/>
        </div>
    );
}

export default Order;