import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron/jumbo";
import { Container} from "../components/Grid/grid";
import SavedItem from "../components/SavedResult/SavedResult"

class SaveBook extends Component {
    state = {
        savedBooks: []
    };

    componentDidMount() {
        API.getBooks()
            .then(res => this.setState({ savedBooks: res.data }))
            .catch(err => console.log(err))
    }

    handleDeleteButton = id => {
        API.deleteBook(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container fluid className="container">
                <Jumbotron />
                <Container>
                    <SavedItem savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />
                </Container>
            </Container>
        )
    }
}



export default SaveBook 