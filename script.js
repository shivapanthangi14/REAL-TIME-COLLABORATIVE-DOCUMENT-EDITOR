const socket = io("http://localhost:5000");

const editor = document.getElementById("editor");

editor.addEventListener("keyup", () => {
  socket.emit("send-text", editor.value);
});

socket.on("receive-text", (data) => {
  editor.value = data;
});