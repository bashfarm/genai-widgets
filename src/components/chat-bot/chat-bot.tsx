import { useAsyncEffect } from '@/hooks/fetchHooks';
import { useEffect, useState } from 'react';

interface ChatbotProps {
  sendMessage: (message: string) => void;
  isDisabled?: boolean;
}

const Chatbot = (props: ChatbotProps) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const [isDisabled, setIsDisabled] = useState<boolean>(props.isDisabled ?? false);

  useEffect(() => {
    setIsDisabled(props.isDisabled ?? false);
  }, [props.isDisabled]);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleInputSubmit = async (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && input.trim() !== '') {
      setMessages([input, ...messages]);
      setInput('');
      props.sendMessage(input);
    }
  };

  const handleSendClick = () => {
    if (input.trim() !== '') {
      setMessages([input, ...messages]);
      setInput('');
      props.sendMessage(input);

    }
  };

  return (
    <div className="flex flex-col h-full p-4 bg-white text-black flex-grow">
      <div className="overflow-auto mb-4 flex-grow flex flex-col-reverse">
        {messages.map((message, index) => (
          <div key={index} className="border rounded p-2 mb-2 break-words">
            {message}
          </div>
        ))}
      </div>
      {isDisabled ? <div className="text-center">Chatbot is disabled</div> : 
      <>
            <div className="flex items-center">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleInputSubmit}
          className="border rounded p-2 flex-grow mr-2"
          placeholder="Type your message here"
        />
        <button onClick={handleSendClick} className="bg-blue-500 text-white rounded p-2">
          Send
        </button>
      </div>
      </>}


    </div>
  );
};

export default Chatbot;
