import React from 'react'
import {Game,Music,OverFlow,Setting} from "../exportComp";

export default function Menu(props) {
 console.log(props.count);
  return (
   <>
      <div id='menu'>
        <label>IPOD</label>
            <li>Game</li>
            <li>Music</li>
            <li>over Flo</li>
            <li>Setting</li>
          
      </div>
      {/* <div id='wallpaper'>
      <Menu/>
      {props.count===0 && <Game/>}
      {props.count===1 && <Music/>}
      {props.count===2 && <OverFlow/>}
      {props.count===3 && <Setting/>}
      </div> */}
     </>
  );
}
