"use client";
import Link from 'next/link';
import './header.css';

import { meraStore } from '@/store/store';
import { Provider } from 'react-redux';
import { addUser, removeUser, setUser, updateUser } from '@/store/auth';

export default()=>{

  return <Provider store={meraStore}>    
          <Header></Header>
    </Provider>

}





   function Header(){
    return <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Faraz</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
          <Link class="nav-link" href="/">Home</Link>

          </li>
          <li class="nav-item">
            <Link class="nav-link" href="/login">Login</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link" href="/signup">Signup</Link>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  }