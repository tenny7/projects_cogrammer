import React from 'react'
import axios from 'axios'

export default class Add extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            author:"",
            pages: "",
        }

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleInput = (event) => {
	    this.setState({
            [event.target.name] : event.target.value
        })
        
    }

     handleSubmit = (event) => {
        event.preventDefault()

        const url = 'http://localhost:5000/book/create'
        const headers = {
            'Content-type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }

        axios.post(url, {
            title: this.state.title,
            author:this.state.author,
            pages: this.state.pages
        }, {headers})
        .then((res) => {
            this.props.history.push('/books')   
        })
        .catch(err => console.log(err))
    }
    
    render() {
    
        return (
            <div className="container">
                <h2 className="mt-3 custom-font-css text-center">Add book to Library</h2>
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
                            <button type="submit" className="btn btn-primary custom-box-shadow" style={{ backgroundColor: 'rgb(51, 71, 91)'}}>Submit</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}