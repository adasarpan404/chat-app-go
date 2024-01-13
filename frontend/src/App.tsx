import React, { useEffect, useState, KeyboardEvent } from "react";
import Header from "./components/Header/Header";
import ChatHistory from "./components/ChatHistory/ChatHistory";
import ChatInput from "./components/ChatInput/ChatInput";
import "./App.css";
import { connect, sendMsg } from "./api";

interface Message {
  timeStamp: number;
  data: string;
}
const App: React.FC = () => {
  const [chatHistory, setChatHistory] = useState<Message[]>([]);

  useEffect(() => {
    connect((event: MessageEvent) => {
      const msgData: Message = JSON.parse(event.data);
      console.log("New Message");
      setChatHistory((prevHistory) => [...prevHistory, msgData]);
      console.log(chatHistory);
    });
  }, []);

  /**
   *
   * @param {KeyboardEvent} event
   */
  const send = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      sendMsg(event.currentTarget.value);
      event.currentTarget.value = "";
    }
  };

  return (
    <div className="App">
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput send={send} />
    </div>
  );
};

export default App;

