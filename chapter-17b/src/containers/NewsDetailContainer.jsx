import React, { Component } from "react";
import Loader from "../components/Loader";
import NewsDetail from "../components/NewsDetail";
import { fetchGameDetail } from "../utils/api";

export default class NewsDetailContainer extends Component {
  state = {
    detail: null,
    loading: true,
  };

  componentDidMount() {
    this.fetchDetailData();
  }

  async fetchDetailData() {
    try {
      const data = await fetchGameDetail(this.props.newsKey);
      this.setState({ detail: data.results, loading: false });
    } catch (error) {
      console.error(error);
      this.setState({ loading: false });
    }
  }

  render() {
    const { detail, loading } = this.state;

    return (
      <div>
        {loading ? (
          <Loader />
        ) : (
          <NewsDetail data={detail} onBack={this.props.onBack} />
        )}
      </div>
    );
  }
}
