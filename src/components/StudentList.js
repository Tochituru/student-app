import React from 'react';

const StudentList = ({ data, editStudent, deleteStudent }) => {
    return (
        <table width={'100%'}>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Nombre</td>
                    <td>Apellido</td>
                    <td>Email</td>
                    <td>Edad</td>
                    <td>Comisión</td>
                    <td>Acciones</td>
                </tr>
            </thead>
            <tbody>
                {data && data.map(student =>
                    (<tr key={student.id}>
                        {/* <td>{student.id}</td> */}
                        <td>{student.id}</td>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.email}</td>
                        <td>{student.age}</td>
                        <td>{student.comission}</td>
                        <td>
                            <button type={'button'} onClick={() => editStudent(student.id)}>Editame</button>
                            <button type={'button'} onClick={() => deleteStudent(student.id)}>Borrame</button>
                        </td>
                    </tr>)
                )}
            </tbody>
        </table>
    )
}

export default StudentList;