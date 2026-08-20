import { useEffect,useRef } from "react"; 
import  ChatMessage  from './ChatMessage';
import './ChatMessages.css';
import dayjs from "dayjs";

function ChatMessages({chatMessages}) {
  const chatMessagesRef = useRef(null);
  //ref starts with empty
  useEffect(()=> {
    const containerElem = chatMessagesRef.current;
    if(containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
      {/**scrollTop gives how much from the top we need to scroll and scrollheight gives the height to which we need to scroll */}
    }
  },[chatMessages]);
  //this array called dependency array= controls when useEffect runs
  //useState return two values one is the data and the other is the function to set the data
  //to modify any data we need to use the function returned by useState 
  //then inly react will rerender the datawith the new data also
  //   const array = useState([
  //   {
  //     message:"Hello",
  //     sender:"user",
  //     key: 'id1'
  //   },{
  //     message:"Hello! How can i help you?",
  //     sender:"robot",
  //     key:'id2'
  //   }
  // ]);
  // //array destructuring  const [chatMessages, setChatMessages] = array
  // const chatMessages = array[0];
  // const setChatMessages = array[1];
  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {/**ref is used as an attribute so this chat-messages-container element is then stored in that ref
       * to get an html ref in react we use useRef
       */}
      {chatMessages.length===0 &&
        <p className="emptyChatMessages">Welcome to the chatbot project! Send a message using the textbox below.</p>
      }
        {chatMessages.map((chatMessage)=> {
          return (
              <ChatMessage 
                  message={chatMessage.message}
                  sender={chatMessage.sender}
                  key={chatMessage.key}
                  time={chatMessage.time}
                />
          );
      })}
    </div>
  )
}

export default ChatMessages;