import { useState } from 'react'
import './App.css'

function App(props:any) {

  const [isHelpDeskOpened, setHelpDeskOpened]= useState<Boolean>(false);
  const toggleHelpdesk = ()=> {
    setHelpDeskOpened(!isHelpDeskOpened);
  }

  return (
    <>
      <div>
        {
          isHelpDeskOpened &&  
          <div>
            <div id='window'>
              This is the HelpDesk <label id="highlight">Parcel</label> initated by 
               <label id="highlight"> {props.initiator}</label>
            </div>
          </div>
        }
        <div style={{ width:'100%', display:'flex', justifyContent:'end'}}>
          <button onClick={toggleHelpdesk}>{isHelpDeskOpened? 'Close' : 'Open'} helpDesk</button>
        </div>
      </div>
    </>
  )
}

export default App
