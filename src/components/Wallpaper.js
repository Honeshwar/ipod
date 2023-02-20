import Menu from './Menu';
import {Game,Music,OverFlow,Setting} from "../exportComp";
import {context} from './Buttons';
import { useContext,useState } from 'react';
let SETINDEX=null;
function Wallpaper(props) {
    // const value=useContext(context);
    const [index, setIndex] = useState(0);
  // const menu = ['Game','Music','OverFlow','Setting'];
  // const comp=menu[0];
  SETINDEX=setIndex;
  console.log("index",index);
  return (
       <div id='wallpaper'>
         <Menu/>
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
export {SETINDEX};