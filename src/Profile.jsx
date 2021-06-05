import React,{useState,useEffect} from 'react'
import './components/ProfileCard.css'
import {Card,Spin,Avatar,Space,Typography} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Text } = Typography;
function ProfileCard({match}) {
   const id=match.params.id
  
   const [User_Details, setUser_Details] = useState()
   const [loader, setloader] = useState(true);

    useEffect(() => {
        setloader(true)
       const fetchData=async()=>{
           await axios.get(`https://reqres.in/api/users/${id}`).then((data)=>{
               setUser_Details(data.data.data)
               setloader(false)
       })
       }
       fetchData();
    }, []);

    

    return (
        <div className="card">
          {loader?<Spin size='large'/>: <Card size="small" hoverable
             style={{ width: 240 }}
             cover={<img alt="example" src={User_Details?.avatar} />}
           >
      <div className="profile-details">
          
         
         
          
         <div className="details">
         <Space size={5} >
         <div ><Text>{User_Details?.first_name}</Text></div>
          <div ><Text>{User_Details?.last_name}</Text></div>
          </Space>
         </div>
         <div>
             <Text>{User_Details?.email}</Text>
         </div>
         
         
          </div>
         
     
 </Card>}
        </div>
    )
}

export default ProfileCard
