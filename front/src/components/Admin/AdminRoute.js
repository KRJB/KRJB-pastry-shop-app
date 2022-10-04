import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector} from "react-redux"

const AdminRoute = ({children}) => {


  const {user} = useSelector(state => state.authreducer);
return (
  <div>
      {user.isAdmin ? children: (<Navigate to="/" />)}
  </div>
)
}

export default AdminRoute