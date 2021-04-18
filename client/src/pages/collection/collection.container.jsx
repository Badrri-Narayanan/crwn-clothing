import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';
import {compose} from 'redux'

import { selectisCollectionLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../component/with-spinner/with-spinner.component'

import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
    isLoading : state => !selectisCollectionLoaded(state),
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(CollectionPage);

export default CollectionPageContainer;