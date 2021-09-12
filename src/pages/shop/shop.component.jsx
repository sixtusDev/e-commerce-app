import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverview from "../../components/collections-overview/collections-overview";
import CollectionPage from "../collection/collection";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { updateShopCollection } from "../../redux/shop/shop-actions";

class ShopPage extends React.Component {
  unSubscribeFromSnapShot = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      this.props.updateCollections(convertCollectionsSnapshotToMap(snapshot));
      // console.log(convertCollectionsSnapshotToMap(snapshot));
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collection`} component={CollectionPage} />
      </div>
    );
  }
}

const mapDisPatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateShopCollection(collectionsMap)),
});

export default connect(null, mapDisPatchToProps)(ShopPage);
