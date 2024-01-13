const socket: WebSocket = new WebSocket("ws://localhost:9000/ws");

const connect = (cb: (msg: MessageEvent) => void): void => {
    console.log("connecting");

    socket.onopen = (): void => {
        console.log("Successfully Connected");
    };

    socket.onmessage = (msg: MessageEvent): void => {
        console.log("Message from WebSocket: ", msg);
        cb(msg);
    };

    socket.onclose = (event: CloseEvent): void => {
        console.log("Socket Closed Connection: ", event);
    };

    socket.onerror = (error: Event): void => {
        console.log("Socket Error: ", error);
    };
};

const sendMsg = (msg: string): void => {
    console.log("sending msg: ", msg);
    socket.send(msg);
};

export { connect, sendMsg };