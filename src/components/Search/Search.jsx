import React, { Component } from "react";
import style from "./Search.module.scss";
// import SearchSvg from "../../containers/img/Search.svg";
export class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openSearch: false,
    };
    this.openSearch = this.openSearch.bind(this);
  }

  openSearch = () => {
    this.setState({ openSearch: false });
  };

  render() {
    return (
      <div>
        {this.state.openSearch ? (
          <div className={style.searchBox}>
            <input
              type="text"
              placeholder="Search Inventory"
              onChange={(e) => this.searchMyInventory(e.target.value)}
            />
            <img
              alt=""
              className={style.closeSearch}
              onClick={() => this.openSearch()}
            />
          </div>
        ) : (
          <div
            className={style.search}
            onClick={() => this.setState({ openSearch: true })}
          >
            <img alt="" />
          </div>
        )}
      </div>
    );
  }
}

export default Search;
