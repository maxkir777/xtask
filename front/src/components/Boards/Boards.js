import React from 'react';

class Boards extends React.Component{
  constructor(props) {
    super(props);

    const { getBoards } = this.props;
    getBoards()
  }

  render() {
    return (<p>Boards</p>)
  }
}

export default Boards
