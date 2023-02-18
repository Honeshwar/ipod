import React from 'react'

export default function Buttons() {
  const all = document.querySelectorAll('#menu li');
  console.log(all);
  let count=0;
  let Default=true;
  if(Default){
    all[count].style.boxShadow="0 0 5px 1px black";
    all[count].style.backgroundColor="blue";
    all[count].style.color="white";
    Default=false;
  }
  function goUpHandler(){
    count--;
    if(count<0){
      count=3;
    }
    all[count].style.backgroundColor="blue";
    all[count].style.color="white";
    all[count].style.boxShadow="0 0 5px 1px black";
    // all[count].style.boxShadow="0 0 10px 1px gray";
   
   
if(count>-1){
  let index=count;
  if(count===3){
     index=-1;
  }

  all[index+1].style.boxShadow="none";
  all[index+1].style.backgroundColor="lightgray";
  all[index+1].style.color="black";

}
  }

   function goDownHandler(){
    count++;
    if(count>3){
      count=0;
    }
    all[count].style.backgroundColor="blue";
    all[count].style.color="white";
    all[count].style.boxShadow="0 0 5px 1px black";
   
    if(count>-1){
      let index=count;
      if(count===0){
         index=4;
      }
    
      all[index-1].style.boxShadow="none";
      all[index-1].style.backgroundColor="lightgray";
      all[index-1].style.color="black";
    
    }

  }
  return (
    <div id='buttons'>
      
        <button onClick={goUpHandler}>_Up_</button>
        <button >Menu</button>
        <button>Menu</button>
        <button onClick={goDownHandler}>Down</button>
        <button >Okay</button>
      
    </div>
  )
}
