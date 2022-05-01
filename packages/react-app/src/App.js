import { useQuery } from "@apollo/client";
import { Contract } from "@ethersproject/contracts";
import { shortenAddress, useCall, useEthers, useLookupAddress, useContractFunction, SUPPORTED_TEST_CHAINS } from "@usedapp/core";
import React, { useEffect, useState } from "react";

import { Body, Button, Container, Header, Image, Link } from "./components";
import logo from "./ethereumLogo.png";

import { MAINNET_ID, addresses, abis } from "@compound-app/contracts";
import GET_MONEY_MARKETS from "./graphql/subgraph";

import { utils } from 'ethers'
import BridgeAbi from './bridgeABI';
import ERC20Abi from './ERC20ABI';

import { FujiChain } from './chain/fuji'

function WalletButton() {
  const [rendered, setRendered] = useState("");

  const ens = useLookupAddress();
  const { account, activateBrowserWallet, deactivate, error } = useEthers();

  useEffect(() => {
    if (ens) {
      setRendered(ens);
    } else if (account) {
      setRendered(shortenAddress(account));
    } else {
      setRendered("");
    }
  }, [account, ens, setRendered]);

  useEffect(() => {
    if (error) {
      console.error("Error while connecting wallet:", error.message);
    }
  }, [error]);

  return (
    <Button
      onClick={() => {
        if (!account) {
          activateBrowserWallet();
        } else {
          deactivate();
        }
      }}
    >
      {rendered === "" && "Connect Wallet"}
      {rendered !== "" && rendered}
    </Button>
  );
}

function ApproveButton() {

  const { switchNetwork, chainId } = useEthers();
  // if(chainId !== FujiChain.chainId) {
    //await switchNetwork(FujiChain.chainId)
  //}

  const addressBridge = "0xf3557Fd50704E6B6D603713dE9132d9931957d8B"
  const contractAddress = "0xfc7215c9498fc12b22bc0ed335871db4315f03d3"
  const [rendered, setRendered] = useState("");

  const { account, activateBrowserWallet, deactivate, error } = useEthers();

  useEffect(() => {
    
  }, [account, setRendered]);

  const ERC20Interface = new utils.Interface(ERC20Abi)
  const ERC20ContractAddress = '0xA243FEB70BaCF6cD77431269e68135cf470051b4'
  const contract = new Contract(ERC20ContractAddress, ERC20Interface)

  useEffect(() => {
    if (error) {
      console.error("Error while connecting wallet:", error.message);
    }
  }, [error]);

  const { state, send:approve } = useContractFunction(contract, 'approve', { transactionName: 'Approve' })
  const { status } = state

  const approveBridge = async() => {
    await approve(addressBridge, utils.parseEther("10") )


  }

  return (        
    <Button
      onClick={() => {
        approveBridge()
      }}
    >
      {rendered === "" && "Approve"}
      {rendered !== "" && rendered}
    </Button>
  )
}

function App() {

  return (
    <Container>
      <Header>
        <WalletButton />
      </Header>
      <Body>
        <ApproveButton />
      </Body>
    </Container>
  );
}

export default App;
