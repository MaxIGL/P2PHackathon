pragma solidity ^0.8.0;

// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

interface ERC20_interface {
  function totalSupply() external  view returns (uint256);
  function balanceOf(address _who) external  view returns (uint256);
  function transfer(address _to, uint256 _value)external  returns (bool);
  function transferFrom(address _from, address _to, uint256 _value)external returns (bool);
  function approve(address _spender, uint256 _value)external returns (bool);
  function allowance(address _owner, address _spender)external  view returns (uint256);
  event Transfer(address indexed from, address indexed to, uint256 value);
  event Approval(address indexed _owner, address indexed _spender, uint256 _value);
}

contract Bridge{

address public constant ERC20_CONTRACT = 0xFc7215C9498Fc12b22Bc0ed335871Db4315f03d3;
ERC20_interface DAI_contract= ERC20_interface(ERC20_CONTRACT);

address owner;


constructor() {
    owner=msg.sender;
}



function deposit(uint256 amount) public{
    DAI_contract.transferFrom(msg.sender,address(this),amount);
}

function withdraw(address to, uint256 amount) public{

    require(msg.sender==0x005f16f017aA933bb41965b52848cEb8ee48b171,"Only our app can transfer fund");
    require(amount<= DAI_contract.balanceOf(address(this)),"Unsufficient funds");
    DAI_contract.transfer(to,amount);

}


}
