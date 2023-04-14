
import './App.css';
import React,{useState} from 'react'
import {Home} from './components/Home'

import {MyHeader} from './components/MyHeader'
import {Todos} from './components/Todos'
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient=new QueryClient()

function App() {
  const [isloggedIn,setisloggedIn]=useState(false)

  return (
    <div className="app">
        <QueryClientProvider client={queryClient}>
          <MyHeader isloggedIn={isloggedIn} setisloggedIn={setisloggedIn}/>
          {isloggedIn ? <Todos />: <Home/>}
        </QueryClientProvider>
    </div>
    
  );
}

export default App;
