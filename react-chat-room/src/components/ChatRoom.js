import React, { Component } from 'react'

class ChatRoom extends Component {
  constructor(props, context){
    super(props, context)
    this.updateMessage = this.updateMessage.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
    this.state = {
      message:'',
      messages: [
        {id:0, text:'first message'},
        {id:1, text:'second message'},
        {id:2, text:'third message'}
      ]
    }
  }

  updateMessage(event){
    this.setState({
      message: event.target.value
    })
  }

  submitMessage(){
    let messages = [...this.state.messages]
    messages.push({id:this.state.messages.length, text:this.state.message})
    this.setState({
      messages: messages
    })
  }

  render(){
    const currentMessage = this.state.messages.map((message, i)=>{
      return (
        <li key={message.id}>{message.text}</li>
      )
    })
    return(
      <div>
        <ol>
          {currentMessage}
        </ol>
        <input onChange={this.updateMessage} type="text" placeholder="Message"/>
        <br/>
        <button onClick={this.submitMessage}>Submit Message</button>
      </div>
    )
  }
}

export default ChatRoom
