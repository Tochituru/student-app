import React from 'react';

const StudentList = (props) => {
    let { data } = props
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
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default StudentList;