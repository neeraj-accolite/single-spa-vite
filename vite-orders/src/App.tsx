import Parcel from 'single-spa-react/parcel'
import './App.css'

function App() {

  return (
    <>
      <div>
      <h1> Order app </h1>
      <section>The Order component is loaded.</section>
      <div>
        <a href='/profile'>Go to Profile</a>
      </div>
      <Parcel
        config={()=>System.import("@acc/helpdesk")}
        initiator= {"Order Application"}
        wrapWith='div'
        wrapStyle={{position:'absolute', bottom:20, right:20}}
       />
    </div>
    </>
  )
}

export default App
