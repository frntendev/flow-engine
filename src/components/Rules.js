import React from 'react';
import RuleComponent from './RuleComponent';
import data from '../data';

export default class Rules extends React.Component {
    renderRules() {
        let rulesArray = [];
        this.props.rules.map((item, index) => {
            rulesArray.push(
                <RuleComponent
                    key={`rule-item-${index}`}
                    data={item.isRoot && data}
                    ruleId={item.id}
                    title={item.title}
                    passedId={item.nextIfPassed}
                    failedId={item.nextIfFailed}
                    isFailureCheck={item.isFailureCheck}
                    status = {item.status}
                    changeStatus={this.props.changeStatus}
                    ruleBody={item.ruleBody}
                />
            )
        });
        return rulesArray;
    }

    render() {
        return (
            <div>
                {this.renderRules()}
            </div>
        )
    }
}