import React from 'react';
import { ChatFeed, Message } from 'react-chat-ui';

export default class Chats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages : [
      (new Message({ id: 1, message: "1st top message" })), // Gray bubble 
      (new Message({ id: 0, message: "2nd top message" })), // Blue bubble 
      (new Message({ id: 1, message: "3rd top message" })), // Gray bubble 
      (new Message({ id: 0, message: "4th top message" })), // Blue bubble 
      (new Message({ id: 1, message: "5th top message" }))  // Gray bubble 
    ],
    };
  }
  render() {
   
    return (
   
      // Your JSX... 
   
      <ChatFeed
        messages={this.state.messages} // Boolean: list of message objects 
        isTyping={this.state.is_typing} // Boolean: is the recipient typing 
        hasInputField={false} // Boolean: use our input, or use your own 
        bubblesCentered={false} //Boolean should the bubbles be centered in the feed? 
        // JSON: Custom bubble styles 
        bubbleStyles={
          {
            text: {
              fontSize: 20
            },
            chatbubble: {
              borderRadius: 35,
              padding: 20
            },
	    recipientChatbubble: {
              backgroundColor: '#000000',
            },
          }
        }
      />
   
      // Your JSX... 
   
    )
   
  }

}
