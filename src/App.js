import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './APPViewFiles/Components/Main';
import Login from './APPAuthFiles/AuthComponents/Login/Login';
import SignUp from './APPAuthFiles/AuthComponents/SignUP/SignUp';
import ForgetPassword from './APPAuthFiles/AuthComponents/ForgetPassword/ForgetPassword';
import AuthContext from './APPAuthFiles/Data/AuthContext';
import RequiredAuth from './APPAuthFiles/Data/requiredAuth';

function App() {
  return (
    <div >

      <AuthContext>
      
        <Routes>

          <Route path="/*" element={
            <RequiredAuth>
              
              <Main />
            </RequiredAuth>
          } />
          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
        </Routes>
        
      </AuthContext>


    </div>
  );
}

export default App;
