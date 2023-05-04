/* eslint-disable no-unused-vars */
import { MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";
import Header from "@/components/customHeader/CustomHeader";

const Chat = ({ user, secret }) => {
  const chatProps = useMultiChatLogic (
    import.meta.env.VITE_PROJECT_ID,
    "userTest",
    "420"
  )
  const chat = {
    title: "chatName",
    description: "chatDescription"
  }
  
  return (
    <div style={{ flexBasis: "100%" }}>
      <MultiChatWindow
        {... chatProps}
        style={{ height:"100vh" }}
        renderChatHeader={(chat) => <Header chat={chat}/>}
      >

      </MultiChatWindow>
    </div>
  );
};

export default Chat;
