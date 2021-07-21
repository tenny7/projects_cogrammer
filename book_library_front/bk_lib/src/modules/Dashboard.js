import React from 'react'


export default class Dashboard extends React.Component {
    

    
    render() {

        if (this.props.user){
            return (
                <div className="container">
                    <div className="card custom-box-shadow mt-5">
                        <h2 className="custom-font-css text-center">Hi {this.props.user.username}</h2>
                    </div>
                </div>
                
            )
        }
        return (
            <div className="container">
                <div className="card custom-box-shadow mt-5">
                    <h1 className="custom-font-css text-center">User not Logged in</h1>
                </div>
            </div>
        )
    }
}