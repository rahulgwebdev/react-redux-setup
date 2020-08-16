import React, { useState, useEffect } from "react";
import Api from "../../Utils/Api";
import { useSelector } from "react-redux";

export default function Chat() {
  const { username } = useSelector((state) => state.auth);
  const [chatList, setchatList] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getChatlist();
  }, []);

  const getChatlist = async () => {
    try {
      const { data } = await Api.get("chats/conversations");
      setchatList(data?.conversations || []);
    } catch (error) {}
  };

  const getMessages = async (conversationId) => {
    //   conversationId
    try {
      const { data } = await Api.get("/chats/messages");
      setMessages(data?.messages);
    } catch (error) {}
  };

  return (
    <div style={{ display: "flex", height: "80vh", padding: 35 }}>
      <div style={{ flexGrow: 1, overflowY: "auto" }}>
        <div>Chat List</div>
        {chatList.map((item, i) => {
          const conversationWith = item?.members.filter(
            (item) => item.username !== username
          )[0];
          return (
            <div
              style={{
                padding: 10,
                display: "flex",
                justifyContent: "flex-start",
                borderBottom: "1px solid rgba(0,0,0,0.3)",
              }}
              key={i}
              onClick={() => getMessages(item._id)}
            >
              {conversationWith.username}
            </div>
          );
        })}
      </div>
      <div
        style={{
          flexGrow: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ overflowY: "auto" }}>
          {messages.map((item, i) => {
            return (
              <div>
                <div>{item.body}</div>
                <p>by {item.author.name}</p>
              </div>
            );
          })}
        </div>
        <div style={{ display: "flex" }}>
          <input
            placeholder="type message here"
            style={{ height: 35, flexGrow: 8 }}
            type="text"
          />
          <button style={{ height: 35, flexGrow: 2 }}>Send</button>
        </div>
      </div>
    </div>
  );
}
