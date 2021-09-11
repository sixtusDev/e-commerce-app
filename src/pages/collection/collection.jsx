import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectShopCollection } from "../../redux/shop/shop-selectors";

import "./collection.scss";

const CollectionPage = ({ match, collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collection)(state),
});

export default connect(mapStateToProps)(CollectionPage);
