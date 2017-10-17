import React, {Component} from 'react';

export default class EmployeeEditor extends Component {
    constructor() {
        super();
        this.state = {
            employee: null,
            originalEmployee: null,
            notModified: true,
        }
    }

    componentWillReceiveProps(props) {
        this.setState({employee: Object.assign({}, props.selected), originalEmployee: props.selected, notModified: props.selected });
    }

    save() {
        this.state.originalEmployee.updateName(this.state.employee.name);
        this.state.originalEmployee.updatePhone(this.state.employee.phone);
        this.state.originalEmployee.updateTitle(this.state.employee.title);
        this.setState({notModified: true});
        this.props.refreshList();

    }

    cancel() {
        var employeeCopy = Object.assign({}, this.state.originalEmployee);
        this.setState({employee: originalEmployee});
    }

}