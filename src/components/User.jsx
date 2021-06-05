import React from 'react'
import {Card,Avatar,Space,Typography,Spin} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';
import './User.css'

const{Text} =Typography;
function User({list,loader}) {
    
    return (
        <div className="Profile-Card">
         {loader?<Spin size="large" />:<Link to={`/profile/${list?.id}`} >
          <div><Card size="small" style={{ width: 180 }}>
      
      <div className="profile-details">
          <div ><Avatar shape="circle" src={list?.avatar} size={64} icon={<UserOutlined />} /></div>
          
          <div className="user-name">
         
          <Space>
          <div ><Text>{list?.first_name}</Text></div>
          
          <div ><Text>{list?.last_name}</Text></div>
         
          </Space>
          </div>
         
      </div>
 </Card>
</div>          </Link>}
        </div>
    )
}

export default User
