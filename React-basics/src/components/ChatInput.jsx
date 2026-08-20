import { useState } from "react"; 
import loadingImage from '../assets/loading.png';
import './ChatInput.css';
import { Chatbot } from "supersimpledev";
import dayjs from "dayjs";

function ChatInput({chatMessages, setChatMessages}) {
  //if we update the content using DOM the react may not know that something has changed so usereact states when there is change in data
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function handleKeyDown(event) {
    if(event.key=='Enter') {
      sendMessage();
    }
    if(event.key=='Escape') {
      setInputText('');
    }
  }

  async function sendMessage() {
    if(isLoading || inputText==='') return;
    setIsLoading(true);
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        key: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ];
    setChatMessages(newChatMessages);
    setChatMessages(
      [...newChatMessages,
      {
        message: <img className="loading-image" src={loadingImage}/>,
        sender: 'robot',
        key: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ]
    );
    //Chatbot is an object which contains getResponse method it is an external library from supersimpledev which has inbuild code for message and its response
    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages(
      [...newChatMessages,
      {
        message: response,
        sender: 'robot',
        key: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ]
    );
    setInputText('');//this will wont change the html yet to change html set the value prop in input to inputText
    setIsLoading(false);
  }
  function clearChat() {
    setChatMessages([]);
  }
  return (
    <div className="chat-input-container">
      <input 
        placeholder="Send a message to ChatBot" 
        size="30"
        onChange={saveInputText}//when the text in the input box is changed this onChange will be executed
        value={inputText}
        onKeyDown={handleKeyDown}
        className="input-box"
        />
      <button onClick={sendMessage} className="send-button">Send</button>
      <button onClick={clearChat} className="clear-button">Clear</button>
    </div>
  );
}

export default ChatInput;