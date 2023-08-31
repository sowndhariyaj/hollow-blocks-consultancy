import {React} from 'react';
import {useLocation,Navigate} from 'react-router-dom';
import {useCon} from './Auth';
const Required=(props)=>{
     const location=useLocation();
     const auth=useCon();
     if(!auth.flag)
      return <Navigate to="/Login" state={{path:location.pathname}}></Navigate>
     return props.children;

}
export default Required;