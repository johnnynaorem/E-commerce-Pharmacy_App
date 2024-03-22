import React from 'react'
import p1 from './p1.svg'
import p2 from './p2.svg'
import p3 from './p3.svg'
import p4 from './p4.svg'
import p5 from './p5.svg'
import main from './Main.svg'
const NewProducts = () => {
  return (
    <>
      <div className='container-fluid mb-4 mt-4'>
        <h4 className='ms-5'>New Products</h4>
        <div className="card-container d-flex gap-3" style={{justifyContent:'center', flexWrap: 'wrap'}}>
          <div className="card" style={{width: '230px', height: "380px", border: "none"}}>
            <div style={{width: '100%', height: "60%"}}>
              <img src={p1} alt="" width={"100%"} height={"100%"} style={{objectFit:'cover'}}/>
            </div>
            <div className="details mt-2">
              <p>Protein</p>
              <p>Nutren Diabetes Vanilla</p>
              <p className='mt-3'>$34.50</p>
              <button className='mt-3' style={{width:'100%', background:'#EDF4F6', border: 'none', borderRadius: '30px', padding:'8px 10px'}}>Add to card</button>
            </div>
          </div>
          <div className="card" style={{width: '230px', height: "380px", border: "none"}}>
            <div style={{width: '100%', height: "60%"}}>
              <img src={p2} alt="" width={"100%"} height={"100%"} style={{objectFit:'cover'}}/>
            </div>
            <div className="details mt-2">
              <p>Protein</p>
              <p>Nutren Diabetes Vanilla</p>
              <p className='mt-3'>$34.50</p>
              <button className='mt-3' style={{width:'100%', background:'#EDF4F6', border: 'none', borderRadius: '30px', padding:'8px 10px'}}>Add to card</button>
            </div>
          </div>
          <div className="card" style={{width: '230px', height: "380px", border: "none"}}>
            <div style={{width: '100%', height: "60%"}}>
              <img src={p3} alt="" width={"100%"} height={"100%"} style={{objectFit:'cover'}}/>
            </div>
            <div className="details mt-2">
              <p>Protein</p>
              <p>Nutren Diabetes Vanilla</p>
              <p className='mt-3'>$34.50</p>
              <button className='mt-3' style={{width:'100%', background:'#EDF4F6', border: 'none', borderRadius: '30px', padding:'8px 10px'}}>Add to card</button>
            </div>
          </div>
          <div className="card" style={{width: '230px', height: "380px", border: "none"}}>
            <div style={{width: '100%', height: "60%"}}>
              <img src={p4} alt="" width={"100%"} height={"100%"} style={{objectFit:'cover'}}/>
            </div>
            <div className="details mt-2">
              <p>Protein</p>
              <p>Nutren Diabetes Vanilla</p>
              <p className='mt-3'>$34.50</p>
              <button className='mt-3' style={{width:'100%', background:'#EDF4F6', border: 'none', borderRadius: '30px', padding:'8px 10px'}}>Add to card</button>
            </div>
          </div>
          <div className="card" style={{width: '230px', height: "380px", border: "none"}}>
            <div style={{width: '100%', height: "60%"}}>
              <img src={p5} alt="" width={"100%"} height={"100%"} style={{objectFit:'cover'}}/>
            </div>
            <div className="details mt-2">
              <p>Protein</p>
              <p>Nutren Diabetes Vanilla</p>
              <p className='mt-3'>$34.50</p>
              <button className='mt-3' style={{width:'100%', background:'#EDF4F6', border: 'none', borderRadius: '30px', padding:'8px 10px'}}>Add to card</button>
            </div>
          </div>
            <div className="card" style={{width: '230px', height: "380px", border: "none"}}>
              <div style={{width: '100%', height: "60%"}}>
                <img src={p1} alt="" width={"100%"} height={"100%"} style={{objectFit:'cover'}}/>
              </div>
              <div className="details mt-2">
                <p>Protein</p>
                <p>Nutren Diabetes Vanilla</p>
                <p className='mt-3'>$34.50</p>
                <button className='mt-3' style={{width:'100%', background:'#EDF4F6', border: 'none', borderRadius: '30px', padding:'8px 10px'}}>Add to card</button>
              </div>
            </div>
            <div className="card" style={{width: '230px', height: "380px", border: "none"}}>
              <div style={{width: '100%', height: "60%"}}>
                <img src={p2} alt="" width={"100%"} height={"100%"} style={{objectFit:'cover'}}/>
              </div>
              <div className="details mt-2">
                <p>Protein</p>
                <p>Nutren Diabetes Vanilla</p>
                <p className='mt-3'>$34.50</p>
                <button className='mt-3' style={{width:'100%', background:'#EDF4F6', border: 'none', borderRadius: '30px', padding:'8px 10px'}}>Add to card</button>
              </div>
            </div>
            <div className="card" style={{width: '230px', height: "380px", border: "none"}}>
              <div style={{width: '100%', height: "60%"}}>
                <img src={p3} alt="" width={"100%"} height={"100%"} style={{objectFit:'cover'}}/>
              </div>
              <div className="details mt-2">
                <p>Protein</p>
                <p>Nutren Diabetes Vanilla</p>
                <p className='mt-3'>$34.50</p>
                <button className='mt-3' style={{width:'100%', background:'#EDF4F6', border: 'none', borderRadius: '30px', padding:'8px 10px'}}>Add to card</button>
              </div>
            </div>
            <div className="card" style={{width: '230px', height: "380px", border: "none"}}>
              <div style={{width: '100%', height: "60%"}}>
                <img src={p4} alt="" width={"100%"} height={"100%"} style={{objectFit:'cover'}}/>
              </div>
              <div className="details mt-2">
                <p>Protein</p>
                <p>Nutren Diabetes Vanilla</p>
                <p className='mt-3'>$34.50</p>
                <button className='mt-3' style={{width:'100%', background:'#EDF4F6', border: 'none', borderRadius: '30px', padding:'8px 10px'}}>Add to card</button>
              </div>
            </div>
            <div className="card" style={{width: '230px', height: "380px", border: "none"}}>
              <div style={{width: '100%', height: "60%"}}>
                <img src={p5} alt="" width={"100%"} height={"100%"} style={{objectFit:'cover'}}/>
              </div>
              <div className="details mt-2">
                <p>Protein</p>
                <p>Nutren Diabetes Vanilla</p>
                <p className='mt-3'>$34.50</p>
                <button className='mt-3' style={{width:'100%', background:'#EDF4F6', border: 'none', borderRadius: '30px', padding:'8px 10px'}}>Add to card</button>
              </div>
            </div>
        </div>
      </div>
      <div className='d-flex' style={{justifyContent: 'center'}}>
        <img src={main} alt="" width={"95%"}/>
      </div>
    </>
  )
}

export default NewProducts
