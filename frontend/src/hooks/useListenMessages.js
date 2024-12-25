import { useSocketContext } from "../context/SocketContext";
import { useEffect } from "react";
import notificationSound from "../assets/sounds/notification.mp3";
import useConversations from "../zustand/useConversation";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { message, setMessages } = useConversations();

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
