import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Comic } from './Comic';

export class ComicsList extends Component {
    render() {
        const { comics } = this.props
        return (
            <div className="ComicsList">
                {
                    comics.map(comic => {
                        return (
                            <div key={comic.id} className="ComicsList-item">
                                <Comic
                                    id={comic.id}
                                    title={comic.title}
                                    thumbnail={comic.thumbnail}
                                />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    static propTypes = {
        comics: PropTypes.array
    }
}