import React from 'react'
import axios from 'axios'

export default class Edit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id:"",
            title: "",
            author:"",
            pages: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
 
    }
    
    getBooks = (event) => {
        const bookId = this.props.match.params.id;
        const url = `http://localhost:5000/book/${bookId}`

        const headers = {
            'Content-type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
        
        axios.get(url,{headers:headers})
        .then((res) => {    
            this.setState({
                id      : res.data.data._id,
                title   : res.data.data.title,
                author   : res.data.data.author,
                pages   : res.data.data.pages
            })
        }).catch((error) => {
            console.log(error)
        })
    } 

    componentWillMount(){
        this.getBooks();
    }

    handleInput = (event) => {
	    this.setState({
            [event.target.name] : event.target.value
        })  
    }

    handleSubmit = (event) => {
        const bookId = this.props.match.params.id;
        event.preventDefault()

        const url = `http://localhost:5000/book/${bookId}`
      
        const headers = {
            'Content-type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
        
        axios.put(url,{
            title : this.state.title,
            author: this.state.author,
            pages : this.state.pages
        },
        {
            headers:headers
        })
        .then((res) => {
            this.props.history.push('/books')
        }).catch((error) => {
            console.log(error)
        })   
    }

    handleDelete() {

        const headers = {
            'Content-type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }

        const bookId = this.state.id
        const url = `http://localhost:5000/book/delete/${bookId}`

        axios.delete(url, {headers:headers})
        .then((res) => {
            this.props.history.push('/books')
        }) 
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <div className="container">
                <h2 className="mt-3 custom-font-css text-center">Edit book to Library</h2>
                <div className="row mt-3 d-flex justify-content-center">
                <div className="col-md-6 col-md-offset-3 card custom-box-shadow" style={{ padding: '15px', borderRadius: '25px'}}>

                    
                    <form onSubmit={ (e) => this.handleSubmit(e)}>
                        <div className="input-group mb-3">
                            <input  type="text"  
                                    name="title"
                                    className="form-control"
                                    value={this.state.title} 
                                    onChange={e => this.handleInput(e)}
                                    placeholder="Enter title of book"/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                        </div>

                        <div className="input-group mb-3">
                            <input  type="text" 
                                    className="form-control" 
                                    name="author" 
                                    value={this.state.author}
                                    onChange={e => this.handleInput(e)} 
                                    placeholder="Author" />
                        </div>

                        <div className="input-group mb-3">
                            <input  type="text" 
                                    className="form-control" 
                                    name="pages" 
                                    value={this.state.pages}
                                    onChange={e => this.handleInput(e)} 
                                    placeholder="Number of pages" />
                        </div>
                        
                        <div className="input-group mb-3 d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary custom-box-shadow" style={{ backgroundColor: 'rgb(51, 71, 91)'}}>Update</button>
                            <button type="button" className="btn btn-danger custom-box-shadow " onClick={this.handleDelete.bind(this)}>Delete</button>
                        </div>
                    </form>
                    
                    </div>
                </div>
            </div>
        )
    }
}