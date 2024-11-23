import Chatbot from 'react-chatbot-kit';
import config from './config';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import 'react-chatbot-kit/build/main.css';
import { useState } from 'react';

export const ChatBot = () => {
  const [showBotChat, setShowBotChat] = useState(false);
  const [showMessage, setShowMessage] = useState(true);

  const validateInput = (input: string) => {
    return input.length > 0 && input.trim().length !== 0;
  };

  const toggleBot = () => {
    setShowBotChat(!showBotChat);
    setShowMessage(false); 
  };

  return (
    <div className='fixed bottom-[20px] right-[20px] z-50'>
      {showMessage && (
      <div className="absolute bottom-[20px] right-[70px] w-32 bg-white text-gray-800 px-4 py-2 rounded-full shadow-md text-xs">
        Need any help?
      </div>
    )}
      <img
        src={'assets/images/png/landingPage/botLogo.png'}
        onClick={toggleBot}
        className={`w-[60px] h-[60px] cursor-pointer relative ${
          showBotChat ? 'z-40' : 'z-50'
        }`}
      />

      {showBotChat && (
       <div className="absolute bottom-[60px] right-0 z-50">
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
            validator={validateInput}
          />
        </div>
      )}
    </div>
  );
};
