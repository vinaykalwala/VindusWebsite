import React, { useState, useEffect, useRef } from 'react';
import '../styles/chatbox.css';
import { FaComments, FaTimes, FaRobot, FaUser } from 'react-icons/fa';

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Welcome to Vindus Environment Pvt. Ltd.! How can we assist you today?' },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const chatBodyRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  };

  const toggleChat = () => {
    if (isOpen) window.speechSynthesis.cancel();
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      setMessages([...messages, { from: 'user', text: inputMessage }]);
      setInputMessage('');
      handleBotResponse(inputMessage);
      window.speechSynthesis.cancel();
    }
  };

  const handleOptionClick = (option) => {
    setMessages([...messages, { from: 'user', text: option }]);
    handleBotResponse(option);
  };

  const handleBotResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    let botResponse = '';

    // Updated responses (same logic, refined for brevity and clarity)
    const responses = {
      'product|information': 'Our products include innovative software solutions like cloud computing, AI, and automation tools for environmental monitoring.',
      'support': 'Our 24/7 support team is reachable at info.vindus@gmail.com or 9133718103.',
      'pricing': 'Visit our "Contact" page for tailored pricing details from our sales team.',
      'services': 'We provide SEO tools, web development, AI solutions, and more. Check our "Services" page!',
      'ceo': 'Our CEO, Vinay Kalwala, brings 2+ years of expertise in environmental tech.',
      'careers|job|join': 'Explore job openings on our "Careers" page and join our innovative team!',
      'location': 'We’re headquartered in Shanthi Nagar, Dilsukhnagar, Hyderabad, Telangana 500060.',
      'hours|business': 'Open Monday-Saturday, 9 AM-6 PM. Support is 24/7.',
      'contact': 'Email us at info.vindus@gmail.com or call 9133718103.',
      'history': 'Vindus began with a vision for greener tech and now leads in AI environmental solutions.',
      'joke': 'Why don’t programmers prefer dark mode? The light attracts bugs!',
      'mission': 'Our mission is to innovate for a sustainable, greener future.',
      'tech stack': 'We use React, Node.js, Python, and AI to power our solutions.',
      'thank you': 'You’re welcome! Happy to assist!',
      'hi|hello': 'Hi there! How can I help you today?',
    };

    botResponse = Object.keys(responses).reduce((res, key) => {
      return key.split('|').some((k) => lowerCaseMessage.includes(k)) ? responses[key] : res;
    }, "I’m not sure about that. How else can I assist?");

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: 'bot', text: botResponse }]);
      readAloud(botResponse);
    }, 1000);
  };

  const readAloud = (text) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="chat-container">
      <button className="chat-toggle-button" onClick={toggleChat}>
        {isOpen ? <FaTimes /> : <FaComments />}
      </button>

      <div className={`chatbox ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <h4>Vindus Assistant</h4>
          <button className="close-chat" onClick={toggleChat}>
            <FaTimes />
          </button>
        </div>

        <div className="chat-options">
          {['Services', 'Support', 'Pricing', 'Careers', 'Location', 'Hours'].map((opt) => (
            <button key={opt} onClick={() => handleOptionClick(opt)}>
              {opt}
            </button>
          ))}
        </div>

        <div className="chat-body" ref={chatBodyRef}>
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat-message ${msg.from}`}>
              {msg.from === 'bot' ? <FaRobot className="msg-icon" /> : <FaUser className="msg-icon" />}
              <span>{msg.text}</span>
            </div>
          ))}
        </div>

        <div className="chat-footer">
          <input
            type="text"
            placeholder="Type your question..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;