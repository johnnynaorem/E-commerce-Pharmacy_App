import React from 'react'
import footer from './footer.svg'
import logo from './Vector.svg'
import send from './send_button.svg'
import './Footer.css'
const Footer = () => {
  return (
    <>
      {/* <div className='container-fluid'>
        <img src={footer} alt="" width={'100%'}/>
      </div> */}
      <div className="footer-container" style={{width:"100%", background:'#184363'}}>
        <div className="footer d-flex p-4 gap-4" style={{ width:'100%', height:'90%', color:'white', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
          <div className="left" style={{}}>
            <div className='left-top d-flex'>
              <img src={logo} alt="" />
              <h1 className='mx-2' style={{fontWeight: '700'}}>ADOMGI HIDAK</h1>
            </div>
            <div className="left-middle mt-1 mb-4">
              <p style={{fontSize: '14px'}}>Stay tuned for latest updates and new features</p>
              <div className="left-search d-flex" style={{fontSize: "13px"}}>
                <input style={{flex:'1', borderTopLeftRadius:'25px',borderBottomLeftRadius:'25px'}} type="email" placeholder='Email address'/>
                <button className='me-4' style={{color:'white', fontWeight:'500', border: 'none', background:'#F2971F', padding: '10px 25px', borderTopRightRadius:'25px',borderBottomRightRadius:'25px'}}>
                  <img className='me-2' src={send}/>Subscribe
                </button>
              </div>
            </div>
            <div className="left-bottom d-flex" style={{alignItems: 'center'}}>
              <input className='me-2' type="checkbox" style={{borderRadius: '5px '}}/>
              <p style={{margin: '0', fontSize:'13px'}}>I accept terms and condition & privacy policy</p>
            </div>
          </div>
          <div className="middle d-flex" style={{}}>
            <div className='left'>
              <p>Information</p>
              <ul>
                <li>About Us</li>
                <li>Delivery Information</li>
                <li>Privacy Policy</li>
                <li>Sales</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div className="right mx-4">
            <p>Information</p>
              <ul>
                <li>About Us</li>
                <li>Delivery Information</li>
                <li>Privacy Policy</li>
                <li>Sales</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
          <div className="right" style={{fontSize: '14px'}}>
            <div>
              <p>About/ Contacts</p>
            <p>MTU Takyelpay,<br />
              Imphal West, Manipur, India
            </p>
            <p>nongdontech@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
