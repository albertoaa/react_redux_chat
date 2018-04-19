import React from 'react';
import PropTypes from 'prop-types';

const TopBar = ({ lastUserName, lastMessageDateTime, count }) => (
    lastUserName ? (
      <section id="topbar" className="topbar">
        &Uacute;ltimo mensaje por {lastUserName} recibido en {lastMessageDateTime.toLocaleString()} (total: {count} mensajes)
      </section>
    ) : (
      <section id="topbar" className="topbar">
        A&uacute;n no recibiste nada
      </section>
    )
);

TopBar.propTypes = {
    lastUserName: PropTypes.string,
    lastMessageDateTime: PropTypes.instanceOf(Date)
};

export default TopBar;