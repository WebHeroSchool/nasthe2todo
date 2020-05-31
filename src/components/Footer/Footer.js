import React from 'react';

const Footer = ({ count }) => (<footer>Количество задач: {count}</footer>);

Footer.defaultProps = {
	count: 0
};

export default Footer;