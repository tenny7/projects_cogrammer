import React from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import './../../css/style.css'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
             username: '',
             password: '',
             loggedIn: this.props.loggedIn
         }
        //  localStorage.getItem('token') ? true : false
         
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    

    handleSubmit = (event) => {
        event.preventDefault()

        const url = `http://localhost:5000/login`
        
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

        const data = {
                username: this.state.username,
                password: this.state.password    
        }
        
        axios.post(url,data,{headers})

        .then((res) => {
            localStorage.setItem("token", res.data.token)
            this.setState({
                loggedIn: true
            })
            this.props.setUser(res.data.user)
        }).catch(error => console.log(error))   
    }

    render() {

        if (this.state.loggedIn){
            return <Redirect to="/dashboard" />
        }

        return (
            <div className="container">
                <h1 className="mt-5 custom-font-css text-center">Login</h1>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 col-md-offset-3 card custom-box-shadow" style={{ padding: '15px', borderRadius: '25px'}}>
                        <form onSubmit={e => this.handleSubmit(e) }>
                            <div className="input-group-mb-3">
                                <input  type="text"  
                                        className="form-control" 
                                        name="username" 
                                        value={this.state.username} 
                                        onChange={e => this.handleInput(e)}
                                        placeholder="Username" 
                                        required/>
                            </div>
                            <br/>
                            <div className="input-group-mb-3">
                                <input  type="password"  
                                        className="form-control" 
                                        name="password" 
                                        value={this.state.password}
                                        onChange={e => this.handleInput(e)} 
                                        placeholder="Password" 
                                        required/>
                            </div>
                            <br/>
                            <div className="input-group-mb-3 d-flex justify-content-center">
                                <button type="submit"  className="btn btn-primary custom-box-shadow" style={{ backgroundColor: 'rgb(51, 71, 91)'}}> Proceed</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}