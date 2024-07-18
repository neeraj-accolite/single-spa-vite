import './style.css';
import reactLogo from './assets/react.svg'
import {getProfileDetails} from '@acc/api';
import { useEffect } from 'react';

export default function Root(props) {

  useEffect(()=>{
   const profileData = getProfileDetails();
   console.log(profileData);
  },[]);

  return (
    <div id="profile">
      <section>Profile app is mounted!</section>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <a href='/address'>Go to Address</a>
      <h1> Profile Heading </h1>
    </div>
);
}
