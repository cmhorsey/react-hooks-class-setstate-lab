import React from "react"
import ShoppingList from "./ShoppingList"
import itemData from "../data/items"

class App extends React.Component {
  state = {
    items: itemData,
    isDarkMode: false,
  }

  handleDarkModeClick = () => {
    this.setState({
      isDarkMode: !this.state.isDarkMode,
    })
  }

  render() {
    return (
      <div className={"App " + (this.state.isDarkMode ? "dark" : "light")}>
        <header>
          <h2>Shopster</h2>
          <button onClick={this.handleDarkModeClick}>
            {this.isDarkMode ? "Dark" : "Light"} Mode
          </button>
        </header>
        <ShoppingList items={this.state.items} />
      </div>
    )
  }
}

export default App
