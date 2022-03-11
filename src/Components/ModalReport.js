import React, {useState} from 'react'
import Modal from 'react-modal' 
import { Link } from 'react-router-dom'
import TextArea from './TextArea' 
import { FaExclamationTriangle } from "react-icons/fa"

function ModalReport({text,icon}) {

    const  [modalIsOpen , setmodalIsOpen ] = useState(false)


  return (

    <div>
        <button onClick={() => setmodalIsOpen(true)} type="submit" className="btn btn-primary p-1 navbutton" >
            {text}
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
                    height: '40%',
                    width: '40%',
                    textAlign: 'center',
                    backgroundColor: 'white)',
                    border: 'none',
                    boxShadow: '0 0px 0px 0 rgba(0,0,0,0.5),0 6px 20px 0 rgba(0,0,0,0.5)'
                  }
                }
              }
              >
                  <div className="container-fluid  ">
                    <div>
                      <div className='subreport'>
                      Submit a Report <FaExclamationTriangle/>
                      </div>
                      <div>
                        Please enter your report in the box bellow! We will review and try to resolve it.
                      </div>
                      <div>
                        <TextArea css={'subdescription'} placeholder={'Enter Report'} item={""} lineheight={24} row={5} />
                      </div>
                      <div>
                      <Link type="button" to="/menu/create"
                                onClick={() => setmodalIsOpen(false)} 
                                className="btn btn-primary Modalbtn boldfont rounded w-50 mt-3 "
                          > Submit
                          </Link>
                      </div>
                    </div>
                  </div>
            </Modal>

    </div>
  )
}

export default ModalReport