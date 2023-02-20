import React, { createContext, useEffect,useState } from 'react';//ui(what user se on screen) library use to create ui ,views part of mvc pattern
import {SETINDEX} from './Wallpaper'

//custom hook
function useButtonToMOveInMenu(initialValue,menuList){
 const [count, setCount] = useState(initialValue);///count const variable can't update
 console.log(menuList); 

  function onClickUp(){
  const previousIndex=count;
    // if(previousIndex>-1){
    //   let index=previousIndex;
      // if(previousIndex===3){
      //     previousIndex=1;
      // }

      menuList[previousIndex].style.boxShadow="none";
      menuList[previousIndex].style.backgroundColor="lightgray";
      menuList[previousIndex].style.color="black";

    // }
    //adding style to new index menu item
  let nextIndex=null;
    if(count===0){
      nextIndex=3;
    }else{
     nextIndex=count-1;
    }
    menuList[nextIndex].style.backgroundColor="blue";
    menuList[nextIndex].style.color="white";
    menuList[nextIndex].style.boxShadow="0 0 5px 1px black";
  


setCount(nextIndex);   //re render component  after execute above thing ,if firstly do rerender  than code write never execute
  }

   function onClickDown(){
   
    // if(count>-1){
      const previousIndex=count;
     
    
      menuList[previousIndex].style.boxShadow="none";
      menuList[previousIndex].style.backgroundColor="lightgray";
      menuList[previousIndex].style.color="black";
    
    // }

    let nextIndex=null;
    if(count===3){
      nextIndex=0;
    }else{
     nextIndex=count+1;
    }
    menuList[nextIndex].style.backgroundColor="blue";
    menuList[nextIndex].style.color="white";
    menuList[nextIndex].style.boxShadow="0 0 5px 1px black";
   
    setCount(nextIndex);
  }

  return{
    count,
    onClickUp,
    onClickDown
  }
}
export const context = createContext();
export default function Buttons() {
  
  const [menuList,setMenuList]=useState([]);
  
  //it always  run /execute after html render to dom
 useEffect(()=>{
  const menuList = document.querySelectorAll('#menu li');
  console.log(menuList);
    menuList[0].style.boxShadow="0 0 5px 1px black";
    menuList[0].style.backgroundColor="blue";
    menuList[0].style.color="white";
    setMenuList(menuList);
 },[]);
//useState set cb func only rerender that comp where ua=se that hook
 const  move = useButtonToMOveInMenu(0,menuList);
  return (
    <>
    {/* <Wallpaper count={move.count}/> */}
    {/* use wallpaper comp setstate to rerendder than comp */}
      {SETINDEX(move.count)}
    <div id='buttons'>
      
        <button onClick={move.onClickUp}>_Up_</button>
        <button >Menu</button>
        <button>Menu</button>
        <button onClick={move.onClickDown}>Down</button>
        <button >Okay</button>
      
    </div>
   
     </>
  )
}

