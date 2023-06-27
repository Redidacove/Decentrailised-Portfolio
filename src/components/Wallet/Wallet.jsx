/* eslint-disable react/prop-types */
import './Wallet.css';
import ABI from "./ABI.json";
import Web3 from "web3";
import { useState } from 'react';
const Wallet =({saveState})=>{
      const [connected,setConnected]=useState(true);
      const init =async()=>{
            try{
                  const web3=new Web3(window.ethereum);
                  await window.ethereum.request({method:'eth_requestAccounts'});
                  const contract =new web3.eth.Contract(
                        ABI,
                        "0xeaEaE9f2FFee55D341Bcaf7E49F591E3E5597559"
                  );
                  saveState({web3:web3,contract:contract})
                  //console.log(contract);
                  setConnected(false);
            }
            catch(error){
                  console.log(error);
                  alert('Please Install Metamask');
            }
            
      }
      return<>
      <div className="header">
      {false  && <button className="connectBTN">
         <a href="https://metamask.app.link/dapp/sriche.netlify.app/">Click For Mobile</a>
        </button>  } 
       <button className="connectBTN" onClick={init} disabled={!connected}>{connected ? "Connect Metamask":"Connected"}</button>
      </div>
      </>
}
export default Wallet;