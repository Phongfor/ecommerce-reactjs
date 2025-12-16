import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MainLayout from '@components/Layout/Layout';
import MyHeader from '@components/Header/Header';
import MyButton from '@components/Button/Button';

function App() {
    return (
        <>
            <MainLayout>
                <MyHeader/>
            </MainLayout>
        </>
    );
}

export default App;
