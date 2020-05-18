import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export class Comic extends Component {
    render() {
        const { id, title, thumbnail: { extension, path } } = this.props
        return (
            <Link to={`/${id}`} className="card">
                <div className="card-image">
                    <figure className="image">
                        <img
                            alt={title}
                            src={`${path}.${extension}`}
                        />
                    </figure>
                </div>
                <div classNam="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{title}</p>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
    static propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        thumbnail: PropTypes.string,
    }
}