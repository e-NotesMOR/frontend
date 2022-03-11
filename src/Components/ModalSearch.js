import React, {useState,useEffect} from 'react'
import Modal from 'react-modal'
import {FaSearch} from 'react-icons/fa'
import Tabs from './Tabs'
import Panel from './Panel'
import Contentdropdown from './Contentdropdown'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ModalSearch({text,userRooms}) {
  const  [modalIsOpen , setmodalIsOpen ] = useState(false);
  let backendUrl = process.env.REACT_APP_BACKEND_URL;
  const [query,setQuery] = useState('');
  const [libraryList,setLibraryList] = useState(null);
  const [isLibrary, setIsLibrary] = useState(false);

  useEffect(() => {
    async function fetchLibrary() {
          let fetchThis = new Promise(async(resolve,reject)=>{
              try{
                  let result = await axios.post(`${backendUrl}/api/search`,{query});
                  if(result.data.error){
                    setTimeout(()=>reject(result.data), 3000)
                  }
                  else {
                    setLibraryList(result.data.libgenModel);
                    setTimeout(()=>resolve(result.data), 3000)
                  }
              }catch(err){   
                  setTimeout(reject, 3000)
                  console.log(err);

              }
          }) 

          toast.promise(
              fetchThis,
              {
                  pending: 'Fetching library, please wait',
                  success: 'Query fetched',
                  error: 'Request rejected'
              }
          );  
        
      }

      let timer = setTimeout(() => {
          if(query && isLibrary){
            fetchLibrary();
          }
      }, 1500)
      return () => clearTimeout(timer)
      // eslint-disable-next-line
}, [query])

  return (
    <div>
       <ToastContainer/>  
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
                    backgroundColor: 'white',
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
                          onChange={(e)=>setQuery(e.target.value)}
                          />
                      </div>
                    </div>
                    <div className="container-fluid">
                      <Tabs parentCallback={(e)=>setIsLibrary(e.props.title !== 'Library')}>
                        <Panel title="Rooms">
                            {userRooms !== null?(                       
                              query !== ''? userRooms.filter(word=> word.title.toUpperCase().indexOf(query.toUpperCase())> -1).map((subject,i) => (
                                  <Contentdropdown key={i} title={subject.title} id={subject._id}/>
                                )):userRooms.map((subject,i) => (
                                  <Contentdropdown key={i} title={subject.title} id={subject._id}/>
                                ))
                            ):''}
                        </Panel>
                        <Panel title="Library">
                          {libraryList !== null?(
                              libraryList.map((item,i)=>(
                                <div style={{textAlign:'left',border:'1px solid black'}} key={i}>
                                    <strong>Title: </strong> {item.title}
                                    <br/>
                                    <span><strong>Author: </strong>{item.author}</span>
                                  <br />
                                  <a href={item.download}>
                                      <button style={{textAlign:'left'}}><strong>Link: </strong> {item.download}</button>
                                  </a>
                                </div>
                              ))
                          ):''}
                        </Panel>
                      </Tabs>
                    </div>


                  </div>
            </Modal>

    </div>
  )
}

export default ModalSearch