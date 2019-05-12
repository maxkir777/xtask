import React from 'react';

class DetailBoard extends React.Component {
  componentDidMount() {
    const { fetchDetailBoard, match } = this.props;
    fetchDetailBoard(match.params.id)
  }

  render() {
    const { boardInfo } = this.props;

    return (
      <p>{boardInfo.name}</p>
    )
  }
}

export default DetailBoard;
