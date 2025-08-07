// /*
import { useEffect, useState, useRef } from "react";
import SockJS from "sockjs-client";
import { CompatClient, Stomp } from "@stomp/stompjs";
import dayjs from "dayjs";

const ChatApp = () => {

  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const [connected, setConnected] = useState(false);
  const [input, setInput] = useState("");
  const stompClient = useRef(null);

  useEffect(() => {
    return () => disconnect();
  }, []);

  const connect = () => {
    const socket = new SockJS("http://localhost:8080/ws-chat");
    stompClient.current = Stomp.over(socket);

    stompClient.current.connect({}, () => {
      setConnected(true);

      stompClient.current.subscribe("/topic/public", (message) => {
        const data = JSON.parse(message.body);
        setMessages((prev) => [...prev, data]);
      });

      stompClient.current.send("/app/chat.newUser", {}, JSON.stringify({
        sender: username || "Anonymous",
        type: "JOIN"
      }));
    });

  };

  const disconnect = () => {
    if (stompClient.current) {
      stompClient.current.disconnect();
      setConnected(false);
    }
  };

  const sendMessage = () => {
    if (stompClient.current && input.trim()) {
      stompClient.current.send("/app/chat.send", {}, JSON.stringify({
        sender: username || "Anonymous",
        content: input,
        type: "CHAT"
      }));
      setInput("");
    }
  };

  return (
    <div style={{padding: 20}}>
      <h2>💬 실시간 채팅</h2>

      {!connected && (
        <div>
          <input className="inputText"
            type="text"
            placeholder="사용자명 입력"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="inputButton" onClick={connect}>접속</button>
        </div>
      )}

      {connected && (
        <>
          <div style={{maxHeight: 300, overflowY: 'scroll', border: '1px solid gray', marginBottom: 10}}>
            {messages.map((msg, idx) => (
              <div key={idx}>
                <span style={{color: msg.type === "JOIN" ? "green" : "black"}}>
                  {msg.sender}:
                </span> {msg.content || ""}
                <small style={{marginLeft: 10, color: "#888888"}}>
                  {msg.timestamp ? dayjs(msg.timestamp).format("HH:mm:ss") : ""}
                </small>
              </div>
            ))}
          </div>

          <input
            className="inputText"
            type="text"
            placeholder="메시지를 입력하세요."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button className="inputButton" onClick={sendMessage}>전송</button>
        </>
      )}
    </div>
  );

}

export default ChatApp;
// */
/*
import React, { useEffect, useState, useRef } from 'react';
import SockJS from 'sockjs-client';
import { CompatClient, Stomp } from '@stomp/stompjs';
import dayjs from 'dayjs';

const ChatApp = () => {
  const [messages, setMessages] = useState([]); // 메시지 저장
  const [username, setUsername] = useState(''); // 접속자 저장
  const [connected, setConnected] = useState(false); // 연결 상태
  const [input, setInput] = useState(''); // 메시지 입력값
  const stompClient = useRef(null); // 

  useEffect(() => {
    //connect();
    return () => disconnect();
  }, []);

  const connect = () => {
    const socket = new SockJS('http://localhost:8080/ws-chat');
    stompClient.current = Stomp.over(socket);

    stompClient.current.connect({}, () => {
      setConnected(true);

      stompClient.current.subscribe('/topic/public', (message) => {
        const data = JSON.parse(message.body);
        setMessages((prev) => [...prev, data]);
      });

      stompClient.current.send('/app/chat.newUser', {}, JSON.stringify({
        sender: username || 'Anonymous',
        type: 'JOIN'
      }));
    });
  };

  const disconnect = () => {
    if (stompClient.current) {
      stompClient.current.disconnect();
      setConnected(false);
    }
  };

  const sendMessage = () => {
    if (stompClient.current && input.trim()) {
      stompClient.current.send('/app/chat.send', {}, JSON.stringify({
        sender: username || 'Anonymous',
        content: input,
        type: 'CHAT'
      }));
      setInput('');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>💬 실시간 채팅</h2>

      {!connected && (
        <div>
          <input
            className='inputText'
            type="text"
            placeholder="사용자명 입력"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className='inputButton' onClick={connect}>접속하기</button>
        </div>
      )}

      {connected && (
        <>
          <div style={{ maxHeight: 300, overflowY: 'scroll', border: '1px solid gray', marginBottom: 10 }}>
            {messages.map((msg, idx) => (
              <div key={idx}>
                <span style={{ color: msg.type === 'JOIN' ? 'green' : 'black' }}>
                  {msg.sender}:
                </span> {msg.content || ''}
                <small style={{ marginLeft: 10, color: '#888' }}>
                  {msg.timestamp ? dayjs(msg.timestamp).format('HH:mm:ss') : ''}
                </small>
              </div>
            ))}
          </div>

          <input
            className='inputText'
            type="text"
            placeholder="메시지를 입력하세요"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            // Enter 시 sendMessage() 호출
          />
          <button className='inputButton' onClick={sendMessage}>전송</button>
        </>
      )}
    </div>
  );
};

export default ChatApp;
*/