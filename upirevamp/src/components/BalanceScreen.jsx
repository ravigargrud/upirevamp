import React, { useState } from 'react';
import '../App.css';
import AddSign from '../assets/AddSign.svg';
import BalanceIcon from '../assets/BalanceIcon.svg';
import ContactIcon from '../assets/ContactIcon.svg';
import NFCIcon from '../assets/NfcIcon.svg';
import UpiIcon from '../assets/UpiIcon.svg';
import WithdrawIcon from '../assets/WithdrawIcon.svg';

function BalanceScreen() {
  const [showTransactionWindow, setShowTransactionWindow] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  const [showAddFunds, setShowAddFunds] = useState('Add Funds');
  const [btnTxt, setBtnTxt] = useState('Add');

  const handleAddFundsClick = () => {
    setShowTransactionWindow(true);
    setShowButtons(false); 
  };

  const handleWithdrawClick = () => {
    setShowTransactionWindow(true);
    setShowButtons(false);
    setShowAddFunds('Withdraw Funds');
    setBtnTxt('Withdraw');
  };

  const goback = () => {
    setShowTransactionWindow(false);
    setShowButtons(true);
    setShowAddFunds('Add Funds');
    setBtnTxt('Add');
  }

  return (
    <>
      <div className='balancewindow'>
        <div className='bwhead'>
          <button>Delhi, IN</button>
          11:45 PM
        </div>
        <div className='accbal'> <p> Account Balance </p>
          <img src={BalanceIcon} alt='' />
        </div>
        <p id="amount">$100</p>
        {showTransactionWindow && (
        <div className='addfunds'>
        <div className='addfundshead'>{showAddFunds}</div>
        <div className='addfundsbody'>
          <input type="text" placeholder="Enter amount" className="amount-input" />
          <div className="denomination-buttons">
            <button className="denomination-button">100</button>
            <button className="denomination-button">200</button>
            <button className="denomination-button">500</button>
            <button className="denomination-button">1000</button>
            <button className="denomination-button">2000</button>
          </div>
          <div className="action-buttons">
            <button className="action-button" onClick={goback}>Go Back</button>
            <button className="action-button">{btnTxt}</button>
          </div>
        </div>
      </div>
      
      )}
        {showButtons && (
          <div className='balancebtns'>
            <div className='tranbtn' onClick={handleAddFundsClick}>
              <img src={AddSign} alt='' />
              Add Funds
            </div>
            <div className='tranbtn' onClick={handleWithdrawClick}>
              <img src={WithdrawIcon} alt='' />
              Withdraw
            </div>
          </div>
        )}

        {showButtons && (
        <div className='balancebtns'>
          <div className='tranbtn'>
            <img src={UpiIcon} alt='' />
            Pay UPI ID
          </div>
          <div className='tranbtn'>
            <img src={ContactIcon} alt='' />
            Pay Contact
          </div>
        </div>
      )}

      {showButtons && (
        <div className='balancebtns'>
          <div className='tranbtn'>
            <img src={NFCIcon} alt='' />
            Pay via NFC
          </div>
        </div>
      )}
      </div>


    </>
  );
}

export default BalanceScreen;
