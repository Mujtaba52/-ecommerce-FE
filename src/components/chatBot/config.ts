import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
    botName: "Exclusive Bot 🤖",
    initialMessages: [createChatBotMessage(`Welcome to Exclusive! How may I help you?`, {loading:true})],
    customStyles: {
        botMessageBox: {
        backgroundColor: "#00429b",
        },
        chatButton: {
        backgroundColor: "#00429b",
        },
    },
};

export default config;