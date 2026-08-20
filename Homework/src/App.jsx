import cottonSocks from './cottonSocks.png';
import { useState,useRef,useEffect } from 'react';
import './App.css';
import dayjs from 'dayjs';
function EcommerceExample(props) {//homework
  let discount = props.discount;
  let {price} = props;
  return (
    <>
      {discount!=='0' && (
        <div>
          <img src={cottonSocks} width="100px"/>
          <p>{props.message}</p>
          <del>Price : {price}</del>
          <p>Discounted Price : {discount}</p>
          <button>Add to Cart</button>
        </div>
      )}
      {discount==='0' && (
        <div>
          <img src={cottonSocks}/>
          <p>{props.message}</p>
          <p>Price : {price}</p>
          <button>Add to cart</button>
        </div>
      )}
    </>
  )
}

function Counter({count, setCount, buttonCount}) {
  function buttonMessage() {
    setCount(count+1);
  }
  return (
    (count!=1&&count!=0) ? <button ref={buttonCount} onClick={buttonMessage}>Clicked {count} times</button> : <button ref={buttonCount} onClick={buttonMessage}>Clicked {count} time</button>
  )
} 
function OnOffButton({setClick, click, value}) {
  function handleClick(){
    setClick(!click);
  }
  return (
    <button onClick={handleClick} className={click ? "on-button" : "off-button"}>{value}</button>
  )
}

function Login({showPassword,setShowPassword}) {
  return (
    <>
      <p className="heading">Hello, Welcome to my Website</p>
      <div><input className="email-box" type="text" placeholder="Email"/></div>
      <div><input className="password-box" type={showPassword ? "text" : "password"} placeholder="Password"/><button onClick={()=>setShowPassword(!showPassword)}>Hide</button></div>
      <button className="login-button">Login</button>
      <button className="signup-button">Sign Up</button>
    </>
  )
}

function CurrentTime({time, setTime}) {
  setInterval(()=>{
    setTime(dayjs().format('HH:mm:ss'));
  },1000)
  return (
    <div>
      Current Time : {time}
    </div>
  )
}
function App() {
  
  const [time,setTime]= useState(dayjs().format('HH:mm:ss'));
  // const [showPassword, setShowPassword] = useState(false); 
  const [count, setCount] = useState(0);
  function resetCount() {
    setCount(0);
  }
  const buttonCount = useRef(0);
  function autoIncreament() {
    setInterval(()=> {
      buttonCount.current.click();
    },1000);
  }
  // const [inputText, setInputText] = useState('');

  // function saveInputText(event) {
  //   const inputTextval = event.target.value;
  //   setInputText(inputTextval);
    
  // }  
  
  // function resetInputText() {
  //   setInputText('');
  // }

  // function setExampleText() {
  //   setInputText('Priya');
  // }
  // const [click, setClick] = useState(true);
  return (
    <>
      {/* <EcommerceExample 
          price="25" 
          discount="5" 
          imageSrc={cottonSocks}
          message="cottonSocks"
        /> */}
        {/*Counter*/}
        {/* <Counter 
          count = {count}
          setCount = {setCount}
        /> */}
        <Counter 
          count = {count}
          setCount = {setCount}
          buttonCount= {buttonCount}
        />
        <button onClick={resetCount}>Reset</button>
        <button onClick={autoIncreament}>AutoClick</button>
        {/* <input placeholder="Type a Name here"
          onChange={saveInputText}
          value={inputText}
        />
        <button onClick={resetInputText}>Reset</button>
        <button onClick={setExampleText}>Example</button>
        <p id="para">{inputText}</p> */}
        {/* <OnOffButton 
          setClick={setClick}
          click={click}
          value={click? "ON" :"OFF"}/> */}
        {/* <Login 
          showPassword = {showPassword}
          setShowPassword = {setShowPassword}
        /> */}
        {/* <CurrentTime 
          time={time}
          setTime={setTime}
        /> */}
    </>
  )
}

export default App
