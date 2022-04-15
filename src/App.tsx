

import React, { useContext, useEffect } from "react";
import "./App.css";

import { AppHeader, ChatBubble, LoginModal, NewMessage } from "./components";
import {AppContext} from "./context/AppContext";
import { Message } from "./model/Message";
import { socket } from './service/Socket';

function App() {
  const messageListRef = React.useRef<HTMLDivElement>(null);
  const [messages, setMessages] = React.useState<Message[]>([]);

  const { userName } = useContext(AppContext);

  const _onNewMessage =  (message: Message) => {
    console.log("_onNewMessage", message)
    setMessages(msn => [
      ...msn,
      message,
    ]);

    messageListRef.current!.scrollTo({
      top: messageListRef.current!.scrollHeight,
      behavior: "smooth",
    });
  }

  const _emitMessage = (message: string) => {
    const newMessage: Message = {
      userName,
      time: new Date().getTime(),
      message,
    }

    socket.emit('chat message', newMessage);
  }
  

  useEffect(() => {
    socket.on('chat message', (message) => {
      console.log("message from socket", message);
      _onNewMessage(message);
    })
  }, [])

  return (
    <>
      <LoginModal visible={!userName} />
      <main>
        
        <AppHeader userName={userName} />
        <div className="image">
         
            <section ref={messageListRef} className="message-list">
              {messages.map((message) => (
                <ChatBubble key={message.time} item={message} isOwner={userName === message.userName} />
              ))}
            </section>
        </div>
        <footer>
          <NewMessage onSubmit={_emitMessage} />
        </footer>
      </main>
    </>
  );
}

export default App;
