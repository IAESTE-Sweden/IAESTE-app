import React from "react";

export const InternshipContext = React.createContext();

export class InternshipProvider extends React.Component {
  state = {
    internships: [],
    loading: true
  };

  fetchInternships = () =>
    fetch("https://iaeste.se/api/wp-json/internships/v1/offers/foreign")
      .then(response => response.json())
      .then(internships => this.setState({ internships, loading: false }))
      .catch(error => console.error(error));

  componentDidMount() {
    this.fetchInternships();
  }

  render() {
    const { fetchInternships, state } = this;
    return (
      <InternshipContext.Provider value={{ ...state, fetchInternships }}>
        {this.props.children}
      </InternshipContext.Provider>
    );
  }
}

export const InternshipConsumer = props => {
  const children = value =>
    React.Children.map(props.children, (child, index) => {
      return React.cloneElement(child, {
        index,
        ...props,
        ...value
      });
    });
  return (
    <InternshipContext.Consumer>
      {value => children(value)}
    </InternshipContext.Consumer>
  );
};
