import { categoryConstants } from '../_constants';
import { categoryService } from '../_services';

export const categoryActions = {
    getCategories
};


function getCategories() {
    return dispatch => {
        dispatch(request());

        categoryService.getCategories()
            .then(
                category => dispatch(success(category)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: categoryConstants.GETCATEGORY_REQUEST } }
    function success(category) { return { type: categoryConstants.GETCATEGORY_SUCCESS, category } }
    function failure(error) { return { type: categoryConstants.GETCATEGORY_FAILURE, error } }
}
