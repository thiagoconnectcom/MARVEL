import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import axios from 'axios';
import './styles.css';

class Marvel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      search: '',
      activePage: 1,
      countPerPage: 12
    };
  }

  handlePageChange = pageNumber => {
    this.setState({ activePage: pageNumber });
  };

  componentDidMount() {
    this.getArticles(this.props.default);
  }

  getArticles(url) {
    axios
      .get(
        'https://gateway.marvel.com/v1/public/characters?ts=1551762449100&apikey=8165fc7465fe80b31220f362d80117bc&hash=af86c06436a9a5cddc91040e9e2335af'
      )
      .then(response => {
        const res = response.data.data.results;
        console.log(response);
        this.setState({ articles: res });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleSearch = ({ target }) => {
    this.setState({ search: target.value });
  };

  render() {
    const { search } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="right">
              <input
                placeholder="Pesquisar pelo nome do Personagem ..."
                type="text"
                onChange={this.handleSearch}
                className="search"
              />
            </div>
          </div>
        </div>
        <div className="row">
          {this.state.articles
            .filter(item => RegExp(search, 'i').test(item.name))
            .filter(
              (data, index) =>
                index >=
                  this.state.countPerPage * (this.state.activePage - 1) &&
                index < this.state.countPerPage * this.state.activePage
            )
            .map(news => {
              return (
                <div className="col-md-3">
                  <div className="card" key={news.name}>
                    <img
                      className="img"
                      src={`${news.thumbnail.path}.${news.thumbnail.extension}`}
                      alt=""
                    />
                    <div className="card-body">
                      <h6 className="card-text text-center azul">
                        {news.name}
                      </h6>

                      <p className="card-text text-center cinza">
                        {news.description.length < 40
                          ? `${news.description}`
                          : `${news.description.substring(0, 50)}...`}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          <div className="col-md-12">
            <div className="text-center">
              <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={4}
                totalItemsCount={this.state.articles.length}
                pageRangeDisplayed={4}
                onChange={this.handlePageChange}
                innerClass="pagination"
                itemClass="page-item"
                linkClass="page-link"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Marvel;
