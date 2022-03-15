//import logo from './logo.svg';
import './App.css';
//import Header from './Header';
import User from './User';
import UserClass from './UserClass';
import TestWork from './TestWork';
import Example from './Example';
import Input from './Input';
import Toggle from './Toggle';
import Form from './Form';
import Profile from './Profile';
import FormValidation from './FormValidation';
import FunctionProps from './FunctionProps';
import LifeCycleByClass from './LifeCycleByClass';
import { useState } from 'react';
import Hooks from './Hooks';
import Style from './Style';
import Bootstrap from './Bootstrap';
import ArrayList from './ArrayList';
import BootstrapArrayList from './BootstrapArrayList';
import NestedListArray from './NestedListArray';
import Reuse from './Reuse';
import LiftingStateUp from './LiftingStateUp';
import PureComponentM from './PureComponentM';
import MemoHook from './MemoHook';
import RefUse from './RefUse';
import FwdRefComp from './FwdRefComp';
import ControlledComponent from './ControlledComponent';
import UncontrolledComponent from './UncontrolledComponent';
import HOC from './HOC';
import Routing from './Routing';
import PageNotFound from './PageNotFound';
import DynamicRouting from './DynamicRouting';
import GetAPI from './GetAPI';
import PostAPI from './PostAPI';
import PreFilled from './PreFilled';
import PreveiousState from './PreveiousState';
import StatewithObject from './StatewithObject';
import { CommonContext } from './components/CommonContext';
import ContextApi from './ContextApi';
import MemoExample from './MemoExample';
import TCS from './TCS';
import NGN from './NGN';



function App() {
 /* const [progress,setProgress] = useState(10)
  const { innerWidth } = window;

  setTimeout(() => {
    if(progress < innerWidth*0.6){
      setProgress(progress+10)
    }
  }, 1000);
*/
  return (
    <div className="App">
      <h1>Hello World from App.js/MAin File</h1>
      <h3>Below are it's component</h3>
      
     

{ /*<div style={{display:'flex', alignItems:'flex-start',alignItems:'center', flexDirection:'row', width:'100%',paddingLeft:innerWidth*0.2}}>
<div style={{width:progress,height:10, backgroundColor:'red',borderRadius:5}}>{' '}</div>
<div style={{width:16,height:16, backgroundColor:'green',borderRadius:10, borderColor:'red',overflow:'hidden',borderWidth:8,marginLeft:-10}}>{' '}</div>
{/* <div style={{}}>{progress}{' '} {innerWidth*.8}</div> 

</div>*/}
    </div>
  );
}

export default App;

function Test()
{
  return <h1>This is test component in same App.js file</h1>
}

/*class  TestClass extends React.Component
{
  render()
  {
    return <h3>This is test class component in same App.js file</h3>
  }
}*/
