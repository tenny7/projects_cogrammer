import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './../../css/style.css'

export default class View extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            id:'',
            title: '',
            author:'',
            books: [],
            loggedIn: this.props.loggedIn
        } 
    }
    
    getBooks = (event) => {
        const url = 'http://cgram.southafricanorth.cloudapp.azure.com:5000/books'

        const headers = {
            'Content-type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
        
        axios.get(url,{headers:headers})
        .then((res) => {
            this.setState({
                books: res.data
            })
        })
    } 

    componentDidMount(){
        this.getBooks();
    }

    render() {
        
        return (
            <div className="container">
                <h1 className="mt-4 custom-font-css fs-1">List of books</h1>
                {/* <div className="row"> */}
                <div className=" row d-flex justify-content-between mt-3"  style={{ marginRight: 2}}>
                    {this.state.books.map( (book, index) => {
                        return <div class="col-md-3  mr-3 mb-3 custom-book-card" key={index}>
                                    <div className="card-body">
                                        <h6 className="card-title custom-font-header lh-1"><b>Book Name:</b> {book.title}</h6>
                                        <h6 className="card-title custom-font-header lh-1"><b>Author:</b> {book.author}</h6>
                                        <div className="custom-card-label">
                                            <h6 className="card-title custom-font-header"><b>N<u>o</u> of Pages:</b> <span className="badge bg-info text-dark">{book.pages}</span> </h6>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                        { this.props.user ? 
                                        <>
                                        <Link to={`/edit/${book._id}`}>Edit</Link> 
                                        </>
                                        : 
                                        <>
                                        </>
                                        }
                                        </div>       
                                    </div>
                                </div>
                    })}
                    </div>
                {/* </div> */}
            </div>
        )
    }
}
