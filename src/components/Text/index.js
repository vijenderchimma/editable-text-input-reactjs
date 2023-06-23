import {Component} from 'react'
import './index.css'

class Text extends Component {
  state = {userInput: '', isSaved: true}

  onClickSaveBtn = () => {
    this.setState({isSaved: false})
  }

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClickEditBtn = () => {
    this.setState({isSaved: true})
  }

  render() {
    const {userInput, isSaved} = this.state
    return (
      <>
        {isSaved ? (
          <div className="text-container">
            <h1 className="text-para">Editable Text Input</h1>
            <div className="input-container">
              <input
                type="text"
                value={userInput}
                onChange={this.onChangeInput}
                className="user-input"
              />
              <button
                type="button"
                className="save-btn"
                onClick={this.onClickSaveBtn}
              >
                save
              </button>
            </div>
          </div>
        ) : (
          <div className="text-container">
            <h1 className="text-para">Editable Text Input</h1>
            <div className="input-container">
              <p className="input-para">{userInput}</p>
              <button
                type="button"
                className="edit-btn"
                onClick={this.onClickEditBtn}
              >
                Edit
              </button>
            </div>
          </div>
        )}
      </>
    )
  }
}
export default Text
