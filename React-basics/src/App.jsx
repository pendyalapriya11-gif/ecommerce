import { useState,useEffect } from "react";
import './App.css';
import { Chatbot } from "supersimpledev";
import ChatInput from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";
function App() {
  useEffect(()=> {
    Chatbot.addResponses(
      {
        'Good Bye!' : 'Good Bye! Have a Nice Day',
        'Give a unique Id' : function() {
          return crypto.randomUUID();
        }
      });
  },[]);
  const array = useState( () => {
    const savedItems = localStorage.getItem('messages');
    return savedItems ? JSON.parse(savedItems) : [];
  }
    // {
    //   message:"Hello",
    //   sender:"user",
    //   key: 'id1'
    // },{
    //   message:"Hello! How can i help you?",
    //   sender:"robot",
    //   key:'id2'
    // }
  );
  //array destructuring  const [chatMessages, setChatMessages] = array
  const chatMessages = array[0];
  const setChatMessages = array[1];
  useEffect(()=> {
    localStorage.setItem('messages',JSON.stringify(chatMessages));
  },[chatMessages]);
  return (
    <div className="app-container">
      <ChatMessages 
        chatMessages = {chatMessages}
      />
      <ChatInput 
        chatMessages = {chatMessages}
        setChatMessages = {setChatMessages}
      />
    </div>
  )
}


export default App
