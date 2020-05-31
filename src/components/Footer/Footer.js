import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ count }) => (<footer>Количество задач: {count}</footer>);

Footer.defaultProps = {
	count: 0
};

Footer.propTypes = {
  count: PropTypes.number.isRequired
};

export default Footer;