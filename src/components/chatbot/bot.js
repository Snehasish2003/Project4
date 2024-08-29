import React, { useState } from "react";
import avatar from "./images/avatar.png";
import bot from "./images/bot.png";
import chat from "./images/chat-icon.png";
import send from "./images/Vector.png";
import "./bot.css";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi, how can I help you?" }
  ]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    const userMessage = e.target.elements.message.value;
    if (userMessage) {
      setMessages([...messages, { sender: "user", text: userMessage }]);
      // Add bot's response
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "I'm from Odisha" }
      ]);
      e.target.elements.message.value = "";
    }
  };

  return (
    <div className="chatbot-wrapper">
      <div className="chatbot-icon" onClick={toggleChatbot}>
        <img src={chat} alt="Chatbot Icon" />
        <p className="chatbot-icon-text">CHAT WITH US HERE!</p>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <img className="chatbot-avatar" src={avatar} alt="Chatbot Avatar" />
            <div className="chatbot-header-info">
              <h2>ChatBot</h2>
              <div className="online-status">
                <span className="online-dot"></span> Online
              </div>
            </div>
            <button className="exit-button" onClick={toggleChatbot}>Exit</button>
          </div>

          {/* Chat messages */}
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={msg.sender === "bot" ? "message-bot-container" : "message-user"}>
                {msg.sender === "bot" && (
              <div className="message-bot-avatar">
                <img className="bot-avatar" src={bot} alt="Bot Avatar" />
              </div>
              )}
              <div className={msg.sender === "bot" ? "message-bot-text" : ""}>
              <p>{msg.text}</p>
              </div>
            </div>
            ))}
          </div>
          
          {/* Message input */}
          <form className="chatbot-input" onSubmit={sendMessage}>
            <input
              type="text"
              name="message"
              placeholder="Ask your question..."
              autoComplete="off"
            />
            <button type="submit">
              <img src={send} alt="Send Icon" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
