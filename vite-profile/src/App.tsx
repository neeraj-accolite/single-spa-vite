import './style.css';
import { useState } from 'react';
import { CustomProps, getAppNames, getAppStatus, navigateToUrl, ParcelConfig, ParcelProps } from 'single-spa';
import Parcel from 'single-spa-react/parcel'
import {getAllUsers, Profile} from '@acc/api';

export default function Root(props:any) {

  const [isLoading, setLoading] = useState<Boolean>(false);
  const [data, setData] = useState<Profile[]>(null);

  const onFetchDetails = async ()=>{
    setLoading(true);
    setTimeout(async ()=>{
      //set time out added to get the loading effects 
      const profileData = await getAllUsers();
      setData(profileData.data);
      setLoading(false);
    },500);  
  }

  const onNavigate = (path)=>{
    navigateToUrl(path);
  }

  const ParcelComponent = (): ParcelConfig<{}>=>{
    return System.import("@acc/helpdesk") as unknown as ParcelConfig<{}>;
  }

  return (
    <div id="profile">
      <h1> Profiles React Application </h1>
      {
        (data===null && !isLoading ) ?     
          <div id="detailsBtn">
            <button onClick={onFetchDetails}>Load Profiles</button>
            <label id="value" >  (The details will be fetched from Utility Microfrontend)</label>
          </div>
        :
        <div>
          {
          isLoading?
          <div id="loader"></div>
          :
          data?.map((user)=>{
            return (
            <div className='users'>
                <div id="detailSection">
                  <img src={user.avatar} width={80} height={80} />
                </div>
                <div id="detailSection">
                <label id="field">Name:
                  </label>
                  <label id="value">
                  {user.first_name} {user.last_name}
                  </label>
                </div>
                <div id="detailSection">
                  <label id="field">Email:</label> 
                  <label id="value">{user.email}</label>
                </div>
                <div id="detailSection">
                  <a href='javascript:void(0);' onClick={()=>onNavigate(`/orders/${user.id}`)}>Open Orders</a>
              </div>
             </div>  
            )
          })
          }
        </div>
      }

      <Parcel
        config={ParcelComponent()}
        initiator= {"Profile Application"}
        wrapWith='div'
        wrapStyle={{position:'absolute', bottom:20, right:20}}
       />
      
    </div>
);
}
