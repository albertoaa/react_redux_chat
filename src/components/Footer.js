import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ count }) => (
  <section id="footer" className="topbar">
    {count} usuarios conectados
  </section>
);

Footer.propTypes = {
  count: PropTypes.integer,
};

export default Footer;