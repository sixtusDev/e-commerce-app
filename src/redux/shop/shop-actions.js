import shopActionTypes from "./shop-types";

export const updateShopCollection = (collectionsMap) => ({
  type: shopActionTypes.UPDATE_SHOP_COLLECTION,
  payload: collectionsMap,
});
