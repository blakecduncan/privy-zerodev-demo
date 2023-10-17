import React from 'react';
import { usePrivy, useWallets } from '@privy-io/react-auth';
import './App.css';

function App() {
  const privy = usePrivy();
  const wallets = useWallets();
  console.log(wallets);

  return (
    <div className="App">
        Authenticated: {privy.authenticated.toString()}
        <br />
        {privy.authenticated && <button onClick={() => privy.logout()}>logout</button>}
        {!privy.authenticated && <button onClick={() => privy.login()}>login</button>}
    </div>
  );
}

export default App;
