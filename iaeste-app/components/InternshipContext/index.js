import React from "react";

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
    this.setState(({ saved }) => ({ saved: [...saved, RefNo] }));
  };

  removeSaved = RefNo => {
    this.setState(({ saved }) => ({
      saved: saved.filter(saved => saved !== RefNo)
    }));
  };

  componentDidMount() {
    this.fetchInternships();
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
