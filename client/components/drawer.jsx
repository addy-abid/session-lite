import React from 'react';
class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false
    };
    this.handleClickDrawer = this.handleClickDrawer.bind(this);
  }

  handleClickDrawer() {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  }

  render() {
    return (
      <div className='hide-mobile'>
        <i className="fas fa-bars fa-2x hamburger-menu-orange" onClick={this.handleClickDrawer} id={this.state.drawerOpen ? '' : 'open'}></i>
        <div className={this.state.drawerOpen ? 'row margin-0' : 'hidden'}>
          <div className="column-25">
            <h1 className='raleway-500-menu'>Menu</h1>
            <a href='#marketplace' className="block mb raleway-size" onClick={this.handleClickDrawer}>Marketplace</a>
            <a href='#form' className="block mb raleway-size" onClick={this.handleClickDrawer}>Post a Session</a>
          </div>
          <div className="column-75 overlay" onClick={this.handleClickDrawer}>
          </div>
        </div>
      </div>
    );
  }
}

export default AppDrawer;