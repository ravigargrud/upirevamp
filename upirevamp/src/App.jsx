import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddSign from './assets/AddSign.svg'
import BalanceIcon from './assets/BalanceIcon.svg'
import ContactIcon from './assets/ContactIcon.svg'
import NFCIcon from './assets/NfcIcon.svg'
import SearchIcon from './assets/SearchIcon.svg'
import UpiIcon from './assets/UpiIcon.svg'
import WithdrawIcon from './assets/WithdrawIcon.svg'
import SettingsIcon from './assets/SettingsIcon.svg'
import profile from './assets/PP.svg'
import notificationLogo from './assets/notifications.png'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.css'



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
      <i className="fa fa-search"></i>
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
    


    <div className='transactionswindow'>

      <div className='transmain'>
      <div className='transactionstab'>
        <div className='transhead'> 
        <div><b> Recent Transactions </b> <br></br> Powered by Blockchain
        </div>
        </div>
        <div className='transbtn'>View All</div>
      </div>

      <div className='translist'>
          <div className='transitem'>
            <div className='transitemhead'>Sent $500 to Ravi</div>
            <div className='transitemhead'>Received $150 from Gursimar</div>
          </div>
          </div>

       </div>

      <div className='exploremore'>

      <div className='headexp'>
      <p>EXPLORE MORE</p>
      <button>View All</button>
      </div>

      <div className='explorelist'>
        <div className = 'exploreoptions'>
        <div className = 'options'>
          <div className='option'>
            <img src={UpiIcon} alt=''></img>
            Tickets</div>
          <div className='option'>
          <img src={UpiIcon} alt=''></img>
          Utility Bills</div>
          </div>
        <div className = 'options'>
        <div className='option'>
        <img src={UpiIcon} alt=''></img>
        Recharge</div>
        <div className='option'>
        <img src={UpiIcon} alt=''></img>
        Offers</div>
        </div>

        <div className = 'refer'>
          <img src={AddSign} alt=''></img>
          <p>Invite your friend to RUPI through email.
          </p>
          <div className='refermail'><input type="text" placeholder="Enter Email" /> <button>Invite</button></div>
        </div>

        </div>
        
      </div>
      </div>

    </div>

    </div>
    </>
  )
}

export default App
