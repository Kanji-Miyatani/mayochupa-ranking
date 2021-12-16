import React from 'react';
import Avater from './Avater';
import "../Style/ChatRoom.css";
function ChatRoom() {
    return (
        <div className="chatroom__contaier">
            <div classNeme="chatroom__header">
                <div >
                    Header
                </div>
            </div>
            <div classNeme="chatroom__body">
                <Avater/>
            </div>
            <div classNeme="chatroom__input">
                
            </div>
        </div>
    )
}

export default ChatRoom
