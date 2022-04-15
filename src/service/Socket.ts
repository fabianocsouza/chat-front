import io from "socket.io-client";

export const socket = io("https://service-chat.herokuapp.com");

socket.on("connect", () => {
  console.log("socket connected");
});
