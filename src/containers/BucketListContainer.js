import { connect } from 'react-redux';
import BucketList from '../components/BucketList.js';

const mapStateToProps = (state) => {
  return {
    bucketlist: state.bucketlist
  };
}

export default connect(mapStateToProps)(BucketList);
