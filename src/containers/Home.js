import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import idGen from '../helpers/igGen';
import StudentList from '../components/StudentList';
import StudentForm from '../components/StudentForm';


class Home extends Component {
    state = {
        studentModel: {
            firstName: '',
            lastName: '',
            age: '',
            comission: '',
            email: '',
            id: '',
        },
        studentsList: []
    };

    addStudent = (values) => {
        let newStudentsList = [...this.state.studentsList, { ...values, id: idGen('stu') }];
        this.setState({ studentsList: newStudentsList })
    };

    render() {
        return (
            <Fragment>
                <Header pageTitle={'none'} />
                <StudentForm data={this.state.studentModel} submit={this.addStudent} />
                <StudentList data={this.state.studentsList} />
            </Fragment>
        )
    }
}

export default Home;