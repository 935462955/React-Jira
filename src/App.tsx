
import './App.css';
import { useAuth } from 'context/auth-context';
import { AuthenticatedApp } from 'authenticated-app';
import React from 'react';
import { UnauthenticatedApp } from 'unauthenticated-app';

function App() {
  const {user} = useAuth()
  return (
    <div className="App">{/*uesr是异步加载的所以一开始是未授权界面*/}
    { user ? <AuthenticatedApp/> : <UnauthenticatedApp/>}
    </div>
  );
}

export default App;
