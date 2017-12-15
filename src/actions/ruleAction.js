export const STATUS_INVALID = "STATUS_INVALID";
export const STATUS_DOING = "STATUS_DOING";
export const STATUS_DONE = "STATUS_DONE";

export const changeStatus = (id, status) => dispatch => {
    dispatch({
        type: status === -1 ? STATUS_INVALID : status === 0 ? STATUS_DOING : STATUS_DONE,
        payload:id
    })
};