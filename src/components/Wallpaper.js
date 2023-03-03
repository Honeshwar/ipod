import Menu from './Menu';
import {Game,Music,OverFlow,Setting} from "../exportComp";
import {context} from './Buttons';
import { useContext,useState } from 'react';
let SET_INDEX=null;
let SET_OKAY=null;
let SET_MENU=null;
function Wallpaper(props) {
    // const value=useContext(context);
    const [index, setIndex] = useState(0);
    const [okay, setOkay] = useState(false);
    const [menu, setMenu] = useState(0);
  // const menu = ['Game','Music','OverFlow','Setting'];
  // const comp=menu[0];
  SET_INDEX=setIndex;
  SET_OKAY=setOkay;
  SET_MENU=setMenu;
  console.log("index",index,"okay",okay);
  return (
       <div id='wallpaper'>
        {okay===false && <Menu/>}
         {index===0 && <Game/>}
        {index===1 && <Music/>}
        {index===2 && <OverFlow/>}
        {index===3 && <Setting/>}
      </div>
//    <Menu />
//    count={value}
  )
}

export default Wallpaper;
export {SET_INDEX,SET_OKAY,SET_MENU};