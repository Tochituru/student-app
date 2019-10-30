import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import idGen from '../helpers/igGen';
import Modal from '../components/Modal';
import StudentList from '../components/StudentList';
import StudentForm from '../components/StudentForm';
import './Home.scss'

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
        studentsList: [],
        isModalOpen: false,
        pageTitle: 'Holas estudiantes'
    };

    openStudentModal = () => {
        this.toggleModal();
    }

    addStudent = (values) => {
        let newStudentsList = [...this.state.studentsList, { ...values, id: idGen('stu') }];
        this.setState({ studentsList: newStudentsList });
        this.toggleModal();
    };
    toggleModal = (e) => {
        e && e.preventDefault();
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }

    render() {
        return (
//            let {pageTitle, this.openStudentModal, StudentList, studentModel, is} = this.state
            <Fragment>
                <Header title={this.state.pageTitle} addStudent={this.openStudentModal} />
                <StudentList data={this.state.studentsList} />
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} title='Modalcito'>
                    <StudentForm data={this.state.studentModel} submit={this.addStudent} /> {' '}
                </Modal>
            </Fragment>
        )
    }
}

export default Home;