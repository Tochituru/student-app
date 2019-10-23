import React, { Component } from 'react';
import Header from '../components/Header';

class Home extends Component {
    state = {
        students: [
            { firstName: 'Micha', lastName: 'Malala', age: '14', commission: '6ta', email: 'micha@malala.com' },
            { firstName: 'Micha', lastName: 'Malala', age: '14', commission: '6ta', email: 'micha@malala.com' }
        ]

    }
    //     render(
    //     <React.Fragment>
    //     <div>Holitas</div>
    //     </React.Fragment >
    //   );
    render() {
        return (
            <React.Fragment>
                <Header pageTitle='PepitoIsHere' />
                {this.state.students.map(e=><p>{e.firstName}</p>)}
            </React.Fragment>
        )
    }
}

export default Home;