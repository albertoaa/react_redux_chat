import { connect } from 'react-redux';
import TopbarComponent from '../components/Topbar';

export const Topbar = connect(state => {
  return {...state.header, count: state.messages.length}
})(TopbarComponent);