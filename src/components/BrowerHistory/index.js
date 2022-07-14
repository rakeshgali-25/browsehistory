import {Component} from 'react'

import './index.css'

import HistoryItem from '../HistoryItem'

const {initialHistoryList} = this.props

class BrowserHistory extends Component {
  state = {searchInput: '', deleteId: null, HistoryList: initialHistoryList}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickDeleteItem = id => {
    this.setState({deleteId: id})
  }

  render() {
    const {searchInput, deleteId, HistoryList} = this.state

    const filteredHistoryList = HistoryList.filter(each =>
      each.title.toLowerCase().includes(searchInput),
    )

    const newFilteredSearch = filteredHistoryList.filter(
      each => each.id !== deleteId,
    )

    return (
      <div className="bg-container">
        <div className="upper">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="history-image"
            alt="app logo"
          />
          <div className="search-bar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search-icon"
              alt="search"
            />
            <input
              type="search"
              className="input"
              placeholder="Search history"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
        </div>
        <div className="bottom">
          <ul className="card-container">
            {HistoryList.map(each => (
              <HistoryItem
                key={each.id}
                item={each}
                onClickDeleteItem={this.onClickDeleteItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
