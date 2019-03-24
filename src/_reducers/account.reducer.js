import { accountConstants } from '../_constants';

export function account(state = {}, action) {
  switch (action.type) {
    case accountConstants.GETACCOUNTINFORMATION_REQUEST:
      return {
        loading: true
      };
    case accountConstants.GETACCOUNTINFORMATION_SUCCESS:
      return {
        information: action.account[0]
      };
    case accountConstants.GETACCOUNTINFORMATION_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}
