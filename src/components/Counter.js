import React from 'react';

const withCounter = (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

    render() {
      const { count } = this.state;
      return <Component {...this.props} count={count} handleClick={this.handleClick} />;
    }
  };
};

export default withCounter;
