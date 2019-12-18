import React from 'react';
import { Link } from 'react-router-dom';

export default class PartyComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:53042/api/Party/"+ this.props.match.params.id+"/participants")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Загрузка...</div>;
        } else {
            return (
            <table>
                <thead>
                    <tr><th>Id</th><th>Имя</th><th>Дата прибытия</th></tr>
                    </thead>
                    <tbody>
  
                    {items.map(item => (
                        <tr><td>{ item.id }</td>
                        <td> {item.name}</td> <td> {item.arrivalDate} </td> </tr>
                    ))}

                    </tbody>
                    </table>
                    

            );
        }
    }
}