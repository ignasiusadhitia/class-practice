import React, { Component } from "react";
import NewsList from "../components/NewsList";
import { fetchGame } from "../utils/api";
import Loader from "../components/Loader";

export default class NewsListContainer extends Component {
  state = {
    news: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchNewsData();
  }

  async fetchNewsData() {
    try {
      const data = await fetchGame();
      this.setState({ news: data, loading: false });
    } catch (error) {
      this.setState({ loading: false });
      console.error(error);
    }
  }

  render() {
    const { news, loading } = this.state; //destructuring object
    return (
      <div>
        {loading ? (
          <Loader />
        ) : (
          <NewsList onSelect={this.props.onSelect} news={news} />
        )}
      </div>
    );
  }
}
