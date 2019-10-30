import React from 'react';

const StudentList = ({ data, editStudent }) => {
    return (
        <table>
            <thead>
                <tr>
                    <td>id</td>
                    <td>nombre</td>
                    <td>apellido</td>
                </tr>
            </thead>
            <tbody>
                {data && data.map(student =>
                    <tr key={student.id}>
                        {/* <td>{student.id}</td> */}
                        <td>{student.id}</td>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <button type={'button'} onClick={() => editStudent()}>Edit Modal</button>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default StudentList;