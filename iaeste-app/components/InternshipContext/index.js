import React from "react";

export const InternshipContext = React.createContext({
  internships: [],
  loading: true
});

class InternshipContextProvider extends React.Component {
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

export default InternshipContextProvider;
