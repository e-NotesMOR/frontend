import React, {useState} from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'
// import {FaUserPlus , FaPencilAlt} from 'react-icons/fa'
import TextArea from './../Components/TextArea.js'
import './../Css/option.css'

function ModalAdd({text}) {

    const  [modalIsOpen , setmodalIsOpen ] = useState(false)


  return (

    <div>
        <Link type="button"  onClick={() => setmodalIsOpen(true)} to="/menu/create" className="btn btn-primary Modalbtn boldfont rounded mt-5 " >
                {text}
        </Link>
        
        <Modal 
              isOpen={modalIsOpen}
              ariaHideApp={false}
              onRequestClose={() => setmodalIsOpen(false)} 
              style={
                {
                  overlay:{
                    backgroundColor: 'rgba(0,0,0,0.5)'
                  },
                  content:{
                    margin: 'auto',
                    height: '80%',
                    width: '40%',
                    textAlign: 'center',
                    backgroundColor: 'white',
                    border: 'none',
                    boxShadow: '0 0px 0px 0 rgba(0,0,0,0.5),0 6px 20px 0 rgba(0,0,0,0.5)'
                  }
                }
              }
              >
                  <div className="container-fluid p-5 ">
                    <div className='row selectgroup '>
                      <div className='col-7'>
                        <div className='marginzero'>
                          Add a Room to:
                        </div>
                      </div>
                      <div className='col-5'>
                        <select className='select'>
                          <option value="Personal">Personal</option>  
                          <option value="Room">Room</option>  
                          <option value="Mouse">Mouse</option>  
                        </select>
                      </div>
                     
                    </div>

                    <div className='minHeight'>
                    
                      <div>
                        <TextArea css={'heading'} placeholder={'Your Title'} item={""} lineheight={54} row={1} />
                      </div>
                      <div>
                        <TextArea css={'description'} placeholder={'Enter Description'} item={""} lineheight={24} row={3} />
                      </div>
                    </div>
                    <div>
                    <Link type="button" to="/menu/create"
                                onClick={() => setmodalIsOpen(false)} 
                                className="btn btn-primary Modalbtn boldfont rounded mt-5 "
                          > Submit
                          </Link>
                    </div>
                  </div>
            </Modal>

    </div>
  )
}

export default ModalAdd