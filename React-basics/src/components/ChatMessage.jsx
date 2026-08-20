import dayjs from 'dayjs';
import robotImage from '../assets/robot.png';
//when images are in the src folder the vite wants to import the required images and then use it 
import userImage from '../assets/user.png';
import './ChatMessage.css';

function ChatMessage(props) {
  let message = props.message;
  let sender = props.sender;
  let time = props.time;
  // if(sender === 'robot') {
  //   return (
  //     <div>
  //       <img src={robotImage} width="30px" />
  //       {message}
  //     </div>
  //   )
  // }
  //&& is a guard operator if left is true then answer is right we can use this to avoid if else statement 
  return (
    <div className={
        sender==='user' ? 
        'chat-message-user' : 
        'chat-message-robot'
      }>
      {sender==='robot' && 
      (
        <img src={robotImage} className="chat-message-profile"/>
      )}
      <div className="chat-message-text">
        {message}
        <div className="chat-message-time">{dayjs(time).format('h:mma')}</div>
      </div> 
      {sender==='user' && (
        <img src={userImage} className="chat-message-profile"/>
      )}
    </div>
  )
}

export default ChatMessage;