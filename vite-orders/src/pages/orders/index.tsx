import './style.css'
import { useEffect, useState } from 'react';
import {getOrderDetails, getProfileDetails, OrderDetail, Profile} from '@acc/api';
import { useParams } from 'react-router-dom';

function App(props) {
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [isOrderLoading, setOrderLoading] = useState<Boolean>(false);
  const [user, setData] = useState<Profile | null>(null);
  const [orders, setOrders] = useState<OrderDetail | null>(null);
  const params = useParams<{id:string}>();

  useEffect(()=>{
    setTimeout(async ()=>{
      //set time out added to get the loading effects 
      const profileData = await getProfileDetails(Number(params.id));
      setData(profileData.data);
      setLoading(false);
      setOrderLoading(true);
      const orderData = await getOrderDetails(Number(params.id));
      setOrders(orderData);
      setOrderLoading(false);
    },500);  
  },[]);

  
  return (
    <>
      <div>
      <h1> Orders Application </h1>
      <div>
        {
        isLoading?
          <div id="loader"></div>
        :
        <div className='users'>
            <div id="detailSection">
              <img src={user?.avatar} width={80} height={80} />
            </div>
            <div id="detailSection">
            <label id="field">Name:
              </label>
              <label id="value">
              {user?.first_name} {user?.last_name}
              </label>
            </div>
            <div id="detailSection">
              <label id="field">Email:</label> 
              <label id="value">{user?.email}</label>
            </div>
          </div> 
        }
        {
        isOrderLoading?
          <div id="loader" style={{marginTop:'30px', marginBottom:'30px'}}></div>
        :
        orders?.products && 
        orders.products.map(order=>{
          return(
            <div style={{marginTop:'30px'}}>
            <label style={{fontSize:'20px', fontWeight:'bold'}}>{user?.first_name}'s Orders</label>
            <div className='users' key={order.id}>
              <div id="detailSection">
                <img src={order?.thumbnail} width={80} height={80} />
              </div>
              <div>
                <div id="detailSection">
                <label id="fieldOrder">Product:
                  </label>
                  <label id="valueOrder">
                  {order?.title}
                  </label>
                </div>
                <div id="detailSection">
                  <label id="fieldOrder">Quantity:</label> 
                  <label id="valueOrder">{order?.quantity}</label>
                </div>
                <div id="detailSection">
                  <label id="fieldOrder">Price:</label> 
                  <label id="valueOrder">{order?.price}</label>
                </div>
              </div>
            </div> 
            </div>
          )
        })
        }
      </div>
      <div style={{marginTop:20}}>
        <a href='/profiles'>Back to profiles list</a>
      </div>
    </div>
    </>
  )
}

export default App
