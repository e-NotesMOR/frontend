import React, {useState} from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'
// import {FaUserPlus , FaPencilAlt} from 'react-icons/fa'
import './../Css/option.css'

function ModalReport({text, icon}) {

    const  [modalIsOpen , setmodalIsOpen ] = useState(false)


  return (

    <div>
        <button type="button"  onClick={() => setmodalIsOpen(true)} className="btn btn-primary p-1 dropoption" >
               {icon} {text}
        </button>
        
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

                    <Link type="button" to="/menu/create"
                                onClick={() => setmodalIsOpen(false)} 
                                className="btn btn-primary Modalbtn boldfont rounded mt-5 "
                          > Submit
                    </Link>
                    </div>
            </Modal>

    </div>
  )
}

export default ModalReport