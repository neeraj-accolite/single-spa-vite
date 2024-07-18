import './style.css';
import reactLogo from './assets/react.svg'
import {getProfileDetails, Profile} from '@acc/api';
import { useState } from 'react';

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


  return (
    <div id="profile">
      <h1> Profile Heading </h1>
      {
        (data===null && !isLoading ) ?     
          <div id="detailsBtn"><button onClick={onFetchDetails}>Load Profile Details</button></div>
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
      
    </div>
);
}
