import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ButtonBackHome } from '../components/ButtonBackHome'
import { NotFound } from './NotFound';

const PUBLIC_KEY = 'b2a79383223f2f9da052dc17c27b5406';

export class Detail extends Component {
    state = {
        comic: {}
    }

    fetchComic ({ id }) {
        fetch(`https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=${PUBLIC_KEY}`)
        .then(response  => response.json())
        .then(data => {
            if (data.code === 404){
                return <small>Me falta redirigir a <NotFound /></small>
            }
            const comic = data.data.results[0]
            this.setState({ comic })
        })
    }

    componentDidMount () {
        console.log(this.props)
        const { id } = this.props.match.params
        this.fetchComic({ id })
    }

    render (){
        const { description, id, title } = this.state.comic
        return (
            <div>
                <ButtonBackHome />
                <h2>{title}</h2>
                <h2>{id}</h2>
                <h2>{description}</h2>
                </div>
        )
    }
    static propTypes = {
        match: PropTypes.shape ({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }
}