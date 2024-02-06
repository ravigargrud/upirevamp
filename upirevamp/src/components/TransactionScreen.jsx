import offers from '../assets/offers.svg'
import recharge from '../assets/recharge.svg'
import refer from '../assets/refer.svg'
import travel from '../assets/travel.svg'
import utility from '../assets/utility.svg'
import '../App.css'
import React from 'react'

let items = ['item1', 'item2', 'item3'];

function TransactionScreen() {
  return (
    <>
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
{items.map((item, index) => (
  <React.Fragment key={index}>
    <div className='transitemhead'>{item}</div>
  </React.Fragment>
))}

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
      <img src={travel} alt=''></img>
      Tickets</div>
    <div className='option'>
    <img src={utility} alt=''></img>
    Utility Bills</div>
    </div>
  <div className = 'options'>
  <div className='option'>
  <img src={recharge} alt=''></img>
  Recharge</div>
  <div className='option'>
  <img src={offers} alt=''></img>
  Offers</div>
  </div>

  <div className = 'refer'>
    <img src={refer} alt=''></img>
    <p>Invite your friend to RUPI through email.
    </p>
    <div className='refermail'><input type="text" placeholder="Enter Email" /> <button>Invite</button></div>
  </div>

  </div>
  
</div>
</div>

</div>
</>
    );
    }

export default TransactionScreen;