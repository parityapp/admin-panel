import React from 'react';
import { ChatFeed, Message } from 'react-chat-ui';

export default class Chats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages : [
      (new Message({ id: 1, message: "I'm the recipient! (The person you're talking to)" })), // Gray bubble 
      (new Message({ id: 0, message: "I'm you -- the blue bubble!" })) // Blue bubble 
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
        bubblesCentered={true} //Boolean should the bubbles be centered in the feed? 
        // JSON: Custom bubble styles 
        bubbleStyles={
          {
            text: {
              fontSize: 15
            },
            chatbubble: {
              borderRadius: 35,
              padding: 20
            }
          }
        }
      />
   
      // Your JSX... 
   
    )
   
  }

}
