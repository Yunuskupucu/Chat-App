import { useSocketContext } from "../context/SocketContext";
import { useConversation } from "../context/ConversationContext";
import { useEffect } from "react";
import notificationSound from "../assets/notification.mp3";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { message, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
      sound.play();
      setMessages([...message, newMessage]);
    });
    return () => {
      socket?.off("newMessage");
    };
  }, [socket, setMessages, message]);
};

export default useListenMessages;
