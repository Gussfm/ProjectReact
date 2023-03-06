import React from 'react';
import { Fragment } from 'react';
import{ BrowserRouter, Route, Routes} from 'react-router-dom';

import Landing from './pages/landing/index';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Main from './pages/main';





const Routess = () =>{

    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path= '/' element={<Landing/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/main' element={<Main/>}/>
                </Routes>
            </Fragment>
            
        </BrowserRouter>
    );
    
}
export default Routess;