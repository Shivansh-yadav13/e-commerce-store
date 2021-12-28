import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class item extends Component {
    static defaultProps = {
        name: 'N/A',
        desc: 'N/A',
        size: 0,
        price: 0,
        img: 'N/A'
    }

    static propTypes = {
        name: PropTypes.string,
        desc: PropTypes.string,
        size: PropTypes.number,
        price: PropTypes.number,
    }
    render() {
        return (
            <div className='bg-red-100 w-fit p-4'>
                    <img src='https://raw.githubusercontent.com/Shivansh-yadav13/simple-weather-app/main/src/assests/images/Rain.png' alt='' />
                <ul>
                    <li>{this.props.name}</li>
                    <li>{this.props.desc}</li>
                    <li>{this.props.size}</li>
                    <li>{this.props.price}</li>
                </ul>
            </div>
        )
    }
}