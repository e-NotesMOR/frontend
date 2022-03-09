import React, {useState} from 'react'
import Modal from 'react-modal'
import {FaUserPlus , FaPencilAlt} from 'react-icons/fa'

function ModalForm({text}) {

    const  [modalIsOpen , setmodalIsOpen ] = useState(false)


  return (

    <div>
        <button onClick={() => setmodalIsOpen(true)} type="submit" className="btn btn-primary p-1 navbutton" >
                {text}
        </button>

        <Modal 
              isOpen={modalIsOpen} 
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
                    <div className='row'>
                      <div className='col-6 Leftcol'>
                        <div className='container Modalcontent'>
                          <div className='CreateNote'>
                            Create a Notes
                            <div>
                              <FaPencilAlt style={{fontSize:"3.5rem"}} />
                            </div>
                          </div>
                          <button type="button" 
                                onClick={() => setmodalIsOpen(false)} 
                                className="btn btn-primary Modalbtn boldfont rounded mt-5 "
                          > Create
                          </button>
                        </div>
                      </div>


                      <div className='col-6 Rightcol'>
                        <div className='container Modalcontent'>

                        <div className='CreateNote'>
                            Join a Room
                            <div>
                              <FaUserPlus style={{fontSize:"3.5rem"}} />
                            </div>
                          </div>
                          <input className="form-control form-control-md w-100 mt-1  container-fluid" 
                                  type="text" 
                                  name="code" 
                                  id="code" 
                                  placeholder={"udp-ctxp-cue" }
                                  />
                          <button className="btn btn-primary Modalbtn boldfont rounded mt-2 " 
                                  type="submit" 
                                  onClick={() => setmodalIsOpen(false)} >
                              Enter
                            </button>

                          </div>
                      </div>

                      </div>

                  </div>
            </Modal>

    </div>
  )
}

export default ModalForm