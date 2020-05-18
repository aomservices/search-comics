import React, { Component } from 'react';
import { Title } from '../components/Title';
import { SearchForm } from '../components/SearchForm';
import { ComicsList } from '../components/ComicsList';


export class Home extends Component {
    state = {
        results : [],
        usedSearch: false
    }

    onResults = (results) => {
    this.setState({ results, usedSearch: true })
    }

    renderResults = () => {
        return this.state.results.length === 0
            ? <p>No hay resultados de tu búsqueda</p>
            : <ComicsList comics={this.state.results} />
    }
    render() {
        return (
            <div>
            <Title>MARVEL Comics</Title>
                <div className="SearchForm-wrapper">
                    <SearchForm onResults={this.onResults} />
                </div>
                {
                    this.state.usedSearch
                    ? this.renderResults()
                    : <p>Realiza una búsqueda</p>
                }
            </div>
        )
    }

}