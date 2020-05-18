import React, { Component } from 'react';

const PUBLIC_KEY = 'b2a79383223f2f9da052dc17c27b5406';

export class SearchForm extends Component {
    state = {
        inputComic: ''
    }

    handleChange = (e) => {
        this.setState({inputComic: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { inputComic } = this.state

        fetch(`https://gateway.marvel.com:443/v1/public/comics?title=${inputComic}&apikey=${PUBLIC_KEY}`)
        .then(response  => response.json())
        .then(data => {
            const { results = [] } = data.data
            this.props.onResults(results)
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input
                            className="input"
                            onChange={this.handleChange}
                            type="text"
                            placeholder="Buscar comics" />
                    </div>
                    <div className="control">
                        <button className="button is-info">Buscar</button>
                    </div>
                </div>
            </form>
        );
    }
}