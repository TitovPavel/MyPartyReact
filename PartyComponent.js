
import React from 'react';
import { Link } from 'react-router-dom';

export default class PartyComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            item: null
        };
    }

    componentDidMount() {
        fetch("http://localhost:53042/api/Party/" + this.props.match.params.id)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        item: result
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
        const { error, isLoaded, item } = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Загрузка...</div>;
        } else {
            return (
            <div>
                <div>{item.title}</div>
                <div>{item.location}</div>
                <div>{item.date}</div>
                <Link to={"/parties/" + this.props.match.params.id + "/participants"}>Participants</Link>
            </div>
            );
        }
    }
}