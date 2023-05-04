import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from '@/components/chat/chat';
import Login from '@/components/login/login';


function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [secret, setSecret] = useState(null);
  return <div className="app">
     <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
               isAuth ? (
                 // <Navigate to="/chat" element={<Chat user={user} secret={secret}/>} />
                 <Chat user={user} secret={secret}/>
               ) : (
                 <Login setUser={setUser} setSecret={setSecret} />
               )
            }
          />
        </Routes>
     </BrowserRouter>
  </div>
}

export default App
