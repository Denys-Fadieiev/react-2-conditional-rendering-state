// Создать компонент Сообщение.
// Он принимает в качестве пропсов
// Отправителя
// Текст сообщения
// У Сообщения должно быть состояние, к котором хранится информация, прочитано ли оно.
// Это состояние изменяется по нажатию на кнопку.

// Bonus Tasks:

// * После того как сообщение становится помечено как прочитанное, на кнопку больше нельзя нажать.

import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMessageRead: false,
    };
  }
  readMessage = () => {
    this.setState((state, props) => {
      return {
        isMessageRead: !state.isMessageRead
      }
    })
  }

  render(){
    const {author, textMessage} = this.props;
    return (
      <>
        <p><i>Message from <b>{author}:</b></i></p>
        <p>{textMessage}</p>
        <button onClick={this.readMessage} disabled={this.state.isMessageRead}>Read</button>
      </>
    )
  }
}

export default Message;