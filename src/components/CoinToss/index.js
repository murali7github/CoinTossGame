// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {isHead: true, total: 0, heads: 0, tails: 0}

  onClickTossCoinBtn = () => {
    const {total, heads, tails} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      const newTotalCount = total + 1
      const newHeadsCount = heads + 1
      this.setState({isHead: true, total: newTotalCount, heads: newHeadsCount})
    } else {
      const newTotalCount = total + 1
      const newTailsCount = tails + 1
      this.setState({isHead: false, total: newTotalCount, tails: newTailsCount})
    }
  }

  render() {
    const {isHead, total, heads, tails} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          {isHead ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              className="image-icon"
              alt="toss result"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              className="image-icon"
              alt="toss result"
            />
          )}
          <button
            type="button"
            className="button"
            onClick={this.onClickTossCoinBtn}
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result-para">Total: {total}</p>
            <p className="result-para">Heads: {heads}</p>
            <p className="result-para">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
