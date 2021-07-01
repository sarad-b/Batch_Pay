pragma solidity ^0.4.17;

contract BatchPay{

int8 public num ;
address public owner ;
function () payable {}
function BatchPay(int8 _num) public{
num = _num;
owner = msg.sender;
}
function addEther() external payable {
  num = 1;
}


function sendEther(address [] recipient, uint [] bal)  external payable
{


         for (uint8 i = 0; i < recipient.length; i++) {
             //require(total >= _balances[i]);
          //   total = total - _balances[i];
             //total = total.sub(_balances[i]);
                recipient[i].transfer(bal[i]);
              }
      //   }
         //emit Multisended(msg.value, 0x000000000000000000000000000000000000bEEF); //complete multisend


   num = 2;
}
}
