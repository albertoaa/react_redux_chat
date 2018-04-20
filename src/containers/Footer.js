import { connect } from 'react-redux';
import FooterComponent from '../components/Footer';

export const Footer = connect(state => {
  return {count: state.users.length}
})(FooterComponent);