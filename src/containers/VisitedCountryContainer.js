import { connect } from 'react-redux';
import VisitCountryList from '../components/VisitCountryList';

const mapStateToProps = (state) => {
  return {
    visited: state.visited
  };
};

export default connect(mapStateToProps)(VisitedCountryList);
