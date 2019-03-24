import { accountConstants } from '../_constants';
import { accountService } from '../_services';
import { history } from '../_helpers';

export const accountActions = {
    getAccountInformation,
    // logout,
    // register
};


function getAccountInformation() {
    return dispatch => {
        dispatch(request());

        accountService.getAccountInformation()
            .then(
                account => dispatch(success(account)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: accountConstants.GETACCOUNTINFORMATION_REQUEST } }
    function success(account) { return { type: accountConstants.GETACCOUNTINFORMATION_SUCCESS, account } }
    function failure(error) { return { type: accountConstants.GETACCOUNTINFORMATION_FAILURE, error } }
}
