import '../App.css'
import AddSign from '../assets/AddSign.svg'
import BalanceIcon from '../assets/BalanceIcon.svg'
import ContactIcon from '../assets/ContactIcon.svg'
import NFCIcon from '../assets/NfcIcon.svg'
import UpiIcon from '../assets/UpiIcon.svg'
import WithdrawIcon from '../assets/WithdrawIcon.svg'

function BalanceScreen() {
  return (
    <>
    <div className='balancewindow'>
    <div className='bwhead'>
      <button>Delhi, IN</button>
      11:45 PM
    </div>
    <div className='accbal'> Account Balance <t></t>
      <img src={BalanceIcon} alt=''></img>
    </div>
    $100
    <div className='balancebtns'>
      <div className='tranbtn'>
      <img src={AddSign} alt=''></img>
        Add Funds </div>
      <div className='tranbtn'>
      <img src={WithdrawIcon} alt=''></img>
      Withdraw</div>
    </div>
    <div className='balancebtns'>
      <div className='tranbtn'>
      <img src={UpiIcon} alt=''></img>
      Pay UPI ID</div>
      <div className='tranbtn'>
      <img src={ContactIcon} alt=''></img>
      Pay Contact</div>
    </div>
    <div className='balancebtns'>
    <div className='tranbtn'>
    <img src={NFCIcon} alt=''></img>
    Pay via NFC</div></div>

  </div>
  </>
  );
}

export default BalanceScreen;