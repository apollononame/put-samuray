import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
        <div className='appWrapper'>
            <Header/>
            <Navbar/>
            {/*<ProfilenInfo />*/}
            <div className='appWrapperContent'>

                    <Routes>
                        <Route path="/dialogs/*" element={<Dialogs />}/>
                        <Route path="/profile" element={<Profile />}/>
                    </Routes>



            </div>
        </div>
</BrowserRouter>);
}

export default App;
 