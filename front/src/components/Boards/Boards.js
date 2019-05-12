import React from 'react';

class Boards extends React.Component {
  componentDidMount() {
    const { getBoards } = this.props;
    getBoards()
  }

  render() {
    const { allUserBoards } = this.props;

    const listBoards = allUserBoards.map(board => <p>{board.name}</p>);

    return (
      listBoards
    )
  }
}

export default Boards
