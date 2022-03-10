import React, {useState} from 'react'
import Modal from 'react-modal'
import {FaSearch} from 'react-icons/fa'
import Tabs from './Tabs'
import Panel from './Panel'
import Contentdropdown from './Contentdropdown'
import {subjectlist } from '../Models/subjectlist'

function ModalSearch({text}) {

    const  [modalIsOpen , setmodalIsOpen ] = useState(false)


  return (

    <div>
        <button onClick={() => setmodalIsOpen(true)} type="submit" className="btn btn-primary p-1 navbutton" >
               <FaSearch /> {text}
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
                    height: '60%',
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
                    <div className='container Searchborder'>
                      <div className="input-group">
                        <div className=" Searchstyle">
                          <span id="basic-addon1">
                            <FaSearch style={{fontSize:"2rem", color:"#aaa"}}/>
                          </span>
                        </div>
                        <input type="text" 
                          className="form-control Searchform" 
                          placeholder="Search" 
                          aria-label="Search" 
                          aria-describedby="basic-addon1" 
                          id="Search" 
                          />
                      </div>
                    </div>

                    <div class="container-fluid">
                      <Tabs>
                        <Panel title="All">
                              {subjectlist.map((subject,i) => (
                                  <Contentdropdown key={i} title={subject.Subject}/>
                                  ))}
                        </Panel>
                        <Panel title="Rooms">
                            qwqwewq
                        </Panel>
                        <Panel title="Library">
                          asdsadsa
                        </Panel>
                      </Tabs>
                    </div>


                  </div>
            </Modal>

    </div>
  )
}

export default ModalSearch