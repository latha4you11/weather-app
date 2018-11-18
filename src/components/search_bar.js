import React, { Component } from 'react'
import '../App.css'

export class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cityName: ''
        }
    }

    onInputChange = (event) => {
        this.setState({ cityName: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.cityName(this.state.cityName);
        this.setState({ cityName: '' });
    }

  render() {
    return (
      <div>
        <div>
                <form onSubmit={this.onFormSubmit} className="input-group">
                    <input
                        placeholder="Get a five-day forecast in your favourite cities."
                        className="form-control"
                        value={this.state.cityName}
                        onChange={this.onInputChange}
                    />
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="submit">Search</button>
                    </span>
                </form>
            </div>
      </div>
    )
  }
}

export default SearchBar
