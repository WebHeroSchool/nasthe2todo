import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import styles from './Item.module.css';


class Item extends React.Component {

	componentDidMount() {
		console.log('Component did mount!');
		this.timerID = setInterval(() => console.log('Interval has been set!'), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
		console.log('Memory leak neutralized!');
	}

	render() {

		const { value, isDone } = this.props;

		return(
			<span className={
				classnames({
					[styles.item]: true,
					[styles.done]: isDone
				})
			}> 
				{value}
			</span>
		);
	}
}


Item.defaultProps = {
	isDone: false
};

Item.propTypes = {
	value: PropTypes.string.isRequired,
	isDone: PropTypes.bool.isRequired
};

export default Item;