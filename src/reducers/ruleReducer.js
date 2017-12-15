import * as RuleActions from '../actions/ruleAction';

const initialState = [
    {
        id: 1,
        title:"Rule number 1",
        nextIfPassed: 2,
        nextIfFailed: 3,
        status: RuleActions.STATUS_DOING,
        isFailureCheck: false,
        isRoot:true,
        ruleBody: function (val) {
            return val % 2 === 0
        }
    }, {
        id: 3,
        title:"Rule number 3",
        nextIfPassed: 2,
        nextIfFailed: null,
        status: RuleActions.STATUS_INVALID,
        isFailureCheck: true,
        isRoot:false,
        ruleBody: function (val) {
            return val % 3 === 0
        }
    }, {
        id: 2,
        title:"Rule number 2",
        nextIfPassed: null,
        nextIfFailed: 3,
        status: RuleActions.STATUS_INVALID,
        isFailureCheck: false,
        isRoot:false,
        ruleBody: function (val) {
            return val % 6 === 0
        }
    }
];

export default (state = initialState, action) => {
    switch (action.type) {
        case RuleActions.STATUS_DOING:
            const rule1 = state.find((item) => item.id === action.payload);
            rule1.status = RuleActions.STATUS_DOING;
            return state;
        case RuleActions.STATUS_DONE:
            const rule2 = state.find((item) => item.id === action.payload);
            rule2.status = RuleActions.STATUS_DONE;
            return state;
        default:
            return state
    }
}