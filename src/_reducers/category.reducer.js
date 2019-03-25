import { categoryConstants } from '../_constants';

export function category(state = {}, action) {
  switch (action.type) {
    case categoryConstants.GETCATEGORY_REQUEST:
      return {
        loading: true
      };
    case categoryConstants.GETCATEGORY_SUCCESS:
      return {
        categories: action.category.categories
      };
    case categoryConstants.GETCATEGORY_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}
