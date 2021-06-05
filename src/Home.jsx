import React,{useState,useEffect} from 'react'
import axios from 'axios';
import User from './components/User'; 
import './Home.css';
import { Select } from 'antd';

const { Option } = Select;
export default function Home() {

    const [List_Of_User, setlist_of_User] = useState([]);
    const [loader, setloader] = useState(true);
    const [backup, setbackup] = useState();

    useEffect(() => {
        setloader(true)
       const fetchData=async()=>{
await axios.get('https://reqres.in/api/users').then((data)=>{
    setlist_of_User(data?.data?.data);
    setbackup(data?.data?.data)
    setloader(false)
}).catch((err)=>console.log(err))


}
fetchData();
    }, []);

    function compare1(a, b) {
        // Use toUpperCase() to ignore character casing
        const bandA = a.first_name.toUpperCase();
        const bandB = b.first_name.toUpperCase();
      
        let comparison = 0;
        if (bandA > bandB) {
          comparison = 1;
        } else if (bandA < bandB) {
          comparison = -1;
        }
        return comparison;
      }

      function compare2(a, b) {
        // Use toUpperCase() to ignore character casing
        const bandA = a.last_name.toUpperCase();
        const bandB = b.last_name.toUpperCase();
      
        let comparison = 0;
        if (bandA > bandB) {
          comparison = 1;
        } else if (bandA < bandB) {
          comparison = -1;
        }
        return comparison;
      }




      let arr=[]
 function handleChange(value) {
     if(value==='first'){
         List_Of_User.map((data)=>(
             arr.push(data)
            ))

            setlist_of_User(arr.sort(compare1))
     }else if(value==='last'){
        List_Of_User.map((data)=>(
            arr.push(data)
           ))

           setlist_of_User(arr.sort(compare2))

     }else if(value==='None'){
        setlist_of_User(backup)
           
     }
    
}

    
 
    return (
        <div>
            
      <div className="dropdown"> 
        <Select defaultValue="None" onChange={handleChange} >
        <Option value="None">None</Option>
      <Option  value="first">First Name</Option>
      <Option  value="last">Last Name</Option>
      </Select>
      </div>
      <div className="user-list">
            {
                    List_Of_User.map((user,key)=>(
                    <div key={key} >
                        <User status={loader} list={user}/>
                    </div>
                ))
            }
            </div>
     
    
      
        </div>
    )
}


