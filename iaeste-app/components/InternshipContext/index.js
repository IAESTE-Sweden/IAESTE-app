import React from "react";

import { setSaved, getSaved } from "../../storage";

export const InternshipContext = React.createContext();

export class InternshipProvider extends React.Component {
  state = {
    internships: [],
    loading: true,
    saved: []
  };

  fetchInternships = () =>
    fetch("https://iaeste.se/api/wp-json/internships/v1/offers/foreign")
      .then(response => response.json())
      .then(internships => this.setState({ internships, loading: false }))
      .catch(error => console.error(error));

  addSaved = RefNo => {
    const { state } = this;
    const saved = [...state.saved, RefNo];
    this.setState({ saved });
    setSaved(saved);
  };

  removeSaved = RefNo => {
    const { state } = this;
    const saved = state.saved.filter(saved => saved !== RefNo);
    this.setState({ saved });
    setSaved(saved);
  };

  componentDidMount() {
    this.fetchInternships();
    getSaved().then(saved => {
      this.setState({ saved });
    });
  }

  render() {
    const { fetchInternships, addSaved, removeSaved, state } = this;
    return (
      <InternshipContext.Provider
        value={{
          ...state,
          fetchInternships,
          addSaved,
          removeSaved,
          badgeCount: state.saved.length
        }}
      >
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
        ...value,
        ...props
      });
    });
  return (
    <InternshipContext.Consumer>
      {value => children(value)}
    </InternshipContext.Consumer>
  );
};
