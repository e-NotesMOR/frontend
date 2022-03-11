import React,{useState} from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

function FileUploader() {
  const { id } = useParams()
  const [file, setFile] = useState();
  let backendUrl = process.env.REACT_APP_BACKEND_URL;
  const currentUser = localStorage.getItem('userId');
  // eslint-disable-next-line
  const [userId, setUserId] = useState(currentUser);

  const handleChange = (e)=> {
    setFile(e.target.files[0]);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
      if(file){       
          let formData = new FormData();
          formData.append('document', file);
          formData.append('roomId', id);
                  
          const config = {
            headers: {
              'content-type': 'multipart/form-data',
            },
          };

          let uploadFile = new Promise(async(resolve,reject)=>{
          try{
              let result = await axios.post(`${backendUrl}/api/rooms/import`, formData, config);
              if(result.data.error){
                  setTimeout(()=>reject(result.data), 3000)
              }
              else {
                  setTimeout(()=>resolve(result.data), 3000).then(window.location.reload()).catch(err=>console.log(err))
              }
          }catch(err){   
              setTimeout(reject, 3000)
              console.log(err);
          }
        }) 
        toast.promise(
            uploadFile,
            {
                pending: 'Uploading file to room',
                success: 'File uploaded',
                error: 'Request rejected'
            }
        );  
      }
  }
  return (
      <div>
        <form onSubmit={handleSubmit}  className="row g-2">
            <label className="col-auto">
                <input type="file" className="form-control" onChange={handleChange}  />
            </label>

            <label className="col-auto">
                <button type="submit" className="form-control">Upload</button>
            </label>
        </form>
      </div>
       
  )
}

export default FileUploader