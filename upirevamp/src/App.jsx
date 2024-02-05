import { useState } from 'react'
import viteLogo from '/vite.svg'
import SearchIcon from './assets/SearchIcon.svg'
import SettingsIcon from './assets/SettingsIcon.svg'
import profile from './assets/PP.svg'
import notificationLogo from './assets/notifications.png'
import offers from './assets/offers.svg'
import recharge from './assets/recharge.svg'
import refer from './assets/refer.svg'
import travel from './assets/travel.svg'
import utility from './assets/utility.svg'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.css'
import BalanceScreen from './components/BalanceScreen'
import TransactionScreen from './components/TransactionScreen'



function App() {

  return (
    <>
      <div className="header">
        <img src={profile} className="react-logo" alt="react logo" />
        <div id="headtxt">Howdy, <br></br>
        <h3> Pearl</h3>
        </div>
        <div className="searchbar">
      <input type="text" placeholder="Search..." />
      <img src={SearchIcon} className="vite-logo" alt="vite logo" />
    </div>
    <img className="notifimg" src={notificationLogo} alt='notification'></img>
      </div>


    <div className='mainbody'>

      <div className='listicons'>
        <img src={viteLogo} className="vite-logo" alt="vite logo" />
        <img src={SearchIcon} className="vite-logo" alt="vite logo" />
        <img src={viteLogo} className="vite-logo" alt="vite logo" />
        <img src={viteLogo} className="vite-logo" alt="vite logo" />
        <img src={viteLogo} className="vite-logo" alt="vite logo" />
        <img src={viteLogo} className="vite-logo" alt="vite logo" />
        <img src={SettingsIcon} className="vite-logo" alt="vite logo" />
      </div>


    <BalanceScreen />
    <TransactionScreen />

    </div>
    </>
  )
}

export default App
