import React from 'react';

class Inbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: []
    };
  }

  componentDidMount() {
    const userId = window.localStorage.getItem('userId');
    fetch(`/api/messages/${userId}`)
      .then(response => response.json())
      .then(message => {
        this.setState({ message });
      });
  }

  render() {
    return (
    <div className='container'>
      <div className='modal-row'>
        <div className='column-80 margin-auto'>
          <h2 className='roboto-7 margin-bottom-0'>Inbox</h2>
        </div>
      </div>
      <div className='modal-row border-bottom-2px'>
        <div className='column-80 margin-auto mobile-text-center'>
          <h3 className='roboto-4 margin-bottom-0'>Messages</h3>
        </div>
      </div>

          {this.state.message.map(
            (eachMessage, index) => {
              return (
                <div className='modal-row border-bottom hover-highlight' key={index}>
                  <div className='column-40 margin-auto'>
                    <h2 className='roboto-4 font-size-1-2 mt-20px'>{eachMessage.username}</h2>
                    <p className='roboto-3 mb-20px'>{eachMessage.message}</p>
                  </div>
                  <div className='column-40 text-align-center img-flex'>
                    <img className='inbox-img' src={eachMessage.imgUrl}/>
                </div>
              </div>
              );
            }
          )}
    </div>
    );
  }
}

export default Inbox;