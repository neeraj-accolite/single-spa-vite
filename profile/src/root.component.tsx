import './style.css';
import {getProfileDetails, Profile} from '@acc/api';
import { useState } from 'react';
import { CustomProps, ParcelConfig, ParcelProps } from 'single-spa';
import Parcel, { ParcelCompProps } from 'single-spa-react/parcel'

export default function Root(props) {
  const [isLoading, setLoading] = useState<Boolean>(false);
  const [data, setData] = useState<Profile>(null);

  const onFetchDetails = async ()=>{
    setLoading(true);
    setTimeout(async ()=>{
      //set time out added to get the loading effects 
      const profileData = await getProfileDetails("https://reqres.in/api/users/5");
      setData(profileData.data);
      setLoading(false);
    },500);  
  }

  const ParcelComponent = (): ParcelConfig<{}>=>{
    return System.import("@acc/helpdesk") as unknown as ParcelConfig<{}>;
  }

  return (
    <div id="profile">
      <h1> Profile React Application </h1>
      {
        (data===null && !isLoading ) ?     
          <div id="detailsBtn">
            <button onClick={onFetchDetails}>Load Profile Details</button>
            <label id="value" >  (The details will be fetched from Utility Microfrontend)</label>
          </div>
        :
        <div>
          {
          isLoading?
          <div id="loader"></div>
          :
            <div>
                <div id="detailSection">
                  <img src={data.avatar} />
                </div>
                <div id="detailSection">
                <label id="field">Name:
                  </label>
                  <label id="value">
                  {data.first_name} {data.last_name}
                  </label>
                </div>
                <div id="detailSection">
                  <label id="field">Email:</label> 
                  <label id="value">{data.email}</label>
                </div>
                <div id="detailSection">
                  <a href='/address'>Go to Address Page </a>
              </div>
           </div>  
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
