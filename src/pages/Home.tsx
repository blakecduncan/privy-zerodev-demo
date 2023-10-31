import React, { useEffect } from 'react';

import { useWallets } from '@privy-io/react-auth';
import { usePrivySmartAccount } from "@zerodev/privy";
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate()
  const { ready, authenticated, user, zeroDevReady, logout } =
    usePrivySmartAccount();
  const { wallets } = useWallets();

  const eoa =
    wallets.find((wallet) => wallet.walletClientType === "privy") || wallets[0];

  useEffect(() => {
    debugger;
    if (ready && !authenticated) {
      navigate("/login");
    }
  }, [ready, authenticated, navigate]);

  return (
    <div className="App">
      <div>
        Authenticated: {authenticated.toString()}
        <br />
        {authenticated && <button onClick={() => logout()}>logout</button>}
      </div>
      {ready && authenticated && (
        <div>
          <p>
            Your Smart Wallet Address: {user?.wallet?.address}
          </p>
          <p>
            Your signer address: {eoa?.address} 
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
