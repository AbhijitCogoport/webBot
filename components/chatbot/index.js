import React from "react";
import ChatBot from 'react-simple-chatbot';
import Wrapper from './style';
import steps from './steps';

// https://lucasbassetti.com.br/react-simple-chatbot/#/docs/form

function ChatbotWrapper() {
  return (
    <Wrapper>
      <ChatBot
        botAvatar={'https://abhijitgayen.github.io/assets/img/about.jpg'}
        botDelay={500}
        steps={steps}
        floating recognitionEnable
        headerTitle={`Cogo ChartBot`}
        customDelay={500}
        userDelay={500}
      />
    </Wrapper>
  );
}

export default ChatbotWrapper;