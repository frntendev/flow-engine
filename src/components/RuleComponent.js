import React from 'react';
import * as RuleActions from '../actions/ruleAction'

export default class RuleComponent extends React.Component {
    state = {collapsed: false};

    changeCollapse() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    componentWillReceiveProps(props) {
        if (props.status === RuleActions.STATUS_DOING) {
            props.data.map((item) => {
                let result = props.ruleBody(item);
                props.changeStatus(props.ruleId, RuleActions.STATUS_DONE);
                if (result) {
                    if (props.passedId === null) {
                        props.changeStatus(props.ruleId, RuleActions.STATUS_DONE);
                    }
                    else {
                        props.changeStatus(props.passedId, RuleActions.STATUS_DOING);
                    }
                }
                else {
                    if(props.failedId === null){
                        props.changeStatus(props.ruleId, RuleActions.STATUS_DONE);
                    }
                    else{
                        props.changeStatus(props.failedId, RuleActions.STATUS_DOING);
                    }
                }
                console.log(result)
            })
        }
    }

    render() {
        return (
            <div className={`rule-container${this.props.isFailureCheck ? ' red' : ''}`}>
                <div onClick={this.changeCollapse.bind(this)} className={`header`}>
                    <div className="header-id"><span>{this.props.ruleId}</span></div>
                    <div className="header-title"><span>{this.props.title}</span></div>
                </div>
                <div className={`content${this.state.collapsed ? ' hide' : ''}`}>
                    <div className="content-body">
                        <span>Rule body:</span>
                        <p>{this.props.ruleBody.toString()}</p>
                    </div>
                    <div className="content-validation">
                        <div className="content-valid">
                            <span>Next rule if passed</span>
                            <p>{this.props.passedId === null ? "-" : this.props.passedId}</p>
                        </div>
                        <div className="content-invalid">
                            <span>Next rule if failed</span>
                            <p>{this.props.failedId === null ? "-" : this.props.failedId}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}