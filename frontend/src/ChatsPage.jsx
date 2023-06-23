import React from 'react'
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  
  // Using react-chat-engine-advanced

  const chatProps = useMultiChatLogic(
    'ad756d0e-b8fa-4f95-9359-88a003edee7f', 
    props.user.username, 
    props.user.secret
  );
  return (
    <div style={{height: '100vh'}}>
      <MultiChatSocket {...chatProps}/>
      <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
    </div>
  )

  // Using react-chat-engine-pretty

  // return (
  //   <PrettyChatWindow
  //     projectId="ad756d0e-b8fa-4f95-9359-88a003edee7f"
  //     username = {props.user.username}
  //     secret= {props.user.secret}
  //     style={{ height: '100%' }}
  //   />
  // );
}

export default ChatsPage