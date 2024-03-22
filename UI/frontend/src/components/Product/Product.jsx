import React from 'react'
import './Product.css'
import productImage1 from './banner-image-23.png.svg'
import productImage2 from './banner-image-22.png.svg'
import productImage3 from './banner-image-21.png.svg'
const Product = () => {
  return (
    <div className='container-fluid mb-4 mt-4'>
      <div className='row gap-2 justify-content-center' style={{ alignItems: "center" }}>
        <div className="col-md-2 d-flex align-items-center justify-content-center">
          <p style={{ margin: '0', color: "#184363", fontWeight: "bold" }}>Select a product</p>
        </div>
        <div className="col-md-2 d-flex align-items-center">
          <input type="text" className="form-control" style={{ borderRadius: '15px', background: "#EDF4F6", color: "#184363", fontWeight: "500" }} placeholder='Category' />
        </div>
        <div className="col-md-2 d-flex align-items-center">
          <input type="text" className="form-control" style={{ borderRadius: '15px', background: "#EDF4F6", color: "#184363", fontWeight: "500" }} placeholder='Brand' />
        </div>
        <div className="col-1 d-flex align-items-center justify-content-center">
          <p style={{ margin: '0' }}>OR</p>
        </div>
        <div className="col-md-2 d-flex align-items-center">
          <input type="text" className="form-control" style={{ borderRadius: '15px', background: "#EDF4F6", color: "#184363", fontWeight: "500" }} placeholder='Enter SKU' />
        </div>
        <div className="col-md-2 d-flex align-items-center">
          <button className='btn' style={{ background: '#F2971F', color: 'white', padding: "6px 51px", borderRadius: '15px', fontWeight: "500" }}>Shop Now</button>
        </div>
      </div>
      <div className="row gap-2" style={{justifyContent: "center", marginTop: "50px"}}>
        <div className="col-4 cart-div p-3" style={{ height: '300px', width: '400px'}}>
          <div className="card" style={{background: "transparent", border: "none"}}>
            <div className="card-body" style={{paddingRight: '0'}}>
              <h3 className="card-title" style={{margin: '0'}}>Card title</h3>
              <div className='d-flex' style={{alignItems: 'center'}}>
                <div className="vitamins-points mt-3" style={{flex: '1', alignSelf:"baseline"}}>
                  <ul>
                    <li className='my-2'>Analgesics</li>
                    <li className='my-2'>Antimalarial Drugs</li>
                    <li className='my-2'>Antipretics</li>
                    <li className='my-2'>Antibiotics</li>
                  </ul>
                </div>
                <div className="card-right" style={{ maxWidth: "170px", height: "180px"}}>
                  <img src={productImage1} alt="" width={"100%"} height={"100%"}/>
                </div>
              </div>
              <a href="#" className="btn" style={{color: "white", fontWeight:'500', marginTop:"-10px", background: "#F2971F", padding:"10px 20px", borderRadius: "30px"}}>View All &gt;</a>
            </div>
          </div>
        </div>
        <div className="col-4 cart-div p-3" style={{ height: '300px', width: '400px'}}>
          <div className="card" style={{background: "transparent", border: "none"}}>
            <div className="card-body" style={{paddingRight: '0'}}>
              <h3 className="card-title" style={{margin: '0'}}>Card title</h3>
              <div className='d-flex' style={{alignItems: 'center'}}>
                <div className="vitamins-points mt-3" style={{flex: '1', alignSelf:"baseline"}}>
                  <ul>
                    <li className='my-2'>Analgesics</li>
                    <li className='my-2'>Antimalarial Drugs</li>
                    <li className='my-2'>Antipretics</li>
                    <li className='my-2'>Antibiotics</li>
                  </ul>
                </div>
                <div className="card-right" style={{ maxWidth: "170px", height: "180px"}}>
                  <img src={productImage2} alt="" width={"100%"} height={"100%"}/>
                </div>
              </div>
              <a href="#" className="btn" style={{color: "white", fontWeight:'500', marginTop:"-10px", background: "#F2971F", padding:"10px 20px", borderRadius: "30px"}}>View All &gt;</a>
            </div>
          </div>
        </div>
        <div className="col-4 cart-div p-3" style={{ height: '300px', width: '400px'}}>
          <div className="card" style={{background: "transparent", border: "none"}}>
            <div className="card-body" style={{paddingRight: '0'}}>
              <h3 className="card-title" style={{margin: '0'}}>Card title</h3>
              <div className='d-flex' style={{alignItems: 'center'}}>
                <div className="vitamins-points mt-3" style={{flex: '1', alignSelf:"baseline"}}>
                  <ul>
                    <li className='my-2'>Analgesics</li>
                    <li className='my-2'>Antimalarial Drugs</li>
                    <li className='my-2'>Antipretics</li>
                    <li className='my-2'>Antibiotics</li>
                  </ul>
                </div>
                <div className="card-right" style={{ maxWidth: "170px", height: "180px"}}>
                  <img src={productImage3} alt="" width={"100%"} height={"100%"}/>
                </div>
              </div>
              <a href="#" className="btn" style={{color: "white", fontWeight:'500', marginTop:"-10px", background: "#F2971F", padding:"10px 20px", borderRadius: "30px"}}>View All &gt;</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product

          