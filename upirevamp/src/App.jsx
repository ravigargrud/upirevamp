import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import notificationLogo from './assets/notifications.png'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="header">
        <img src={reactLogo} className="react-logo" alt="react logo" />
        <div id="headtxt">Howdy, <br></br>
        <h3> Pearl</h3>
        </div>
        <div className="searchbar">
      <input type="text" placeholder="Search..." />
      <i className="fa fa-search"></i>
    </div>
    <img className="notifimg" src={notificationLogo} alt='notification'></img>
      </div>


    <div className='mainbody'>
      <div className='listicons'>
        <img src={viteLogo} className="vite-logo" alt="vite logo" />
        <img src={viteLogo} className="vite-logo" alt="vite logo" />
        <img src={viteLogo} className="vite-logo" alt="vite logo" />
        <img src={viteLogo} className="vite-logo" alt="vite logo" />
        <img src={viteLogo} className="vite-logo" alt="vite logo" />
        <img src={viteLogo} className="vite-logo" alt="vite logo" />
        <img src={viteLogo} className="vite-logo" alt="vite logo" />
      </div>

      <div className='balancewindow'>
        <div className='bwhead'>
          <button>Delhi, IN</button>
          11:45 PM
        </div>
        <div className='accbal'> Account Balance 
          <img src={viteLogo} alt=''></img>
        </div>
        $100
        <div className='balancebtns'>
          <div className='tranbtn'>
            Add Funds </div>
          <div className='tranbtn'>Withdraw</div>
        </div>
        <div className='balancebtns'>
          <div className='tranbtn'>Pay UPI ID</div>
          <div className='tranbtn'>Pay Contact</div>
        </div>
        <div className='balancebtns'>
        <div className='tranbtn'>Pay via NFC</div></div>

      </div>
    </div>
    </>
  )
}

export default App
