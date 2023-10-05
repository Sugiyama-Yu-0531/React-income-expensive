import React from 'react'
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  component: React.ReactNode
}
const PrivateRoute = (props: PrivateRouteProps) => {
  const authContext = React.useContext(AuthContext)
  if (!authContext) return <></>

  return authContext.currentUser ? (<>{props.component}</>) : (<Navigate to='/login' />);
}

export default PrivateRoute