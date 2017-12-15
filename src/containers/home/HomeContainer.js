import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {changeStatus} from '../../actions/ruleAction'
import Rules from "../../components/Rules";

const Home = props => (
    <div className={'home-page-container'}>
        <Rules
            rules={props.rules}
            changeStatus={props.changeStatus}
        />
    </div>
);

const mapStateToProps = state => ({
    rules: state.rules,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    changeStatus: (id, status) => changeStatus(id, status),
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
