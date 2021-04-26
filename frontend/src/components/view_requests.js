import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import React, { Component } from "react";
import axios from "axios";

  /*
      Throw axios and constructor to declare state
        for the render below function to output the data from backend/residentrequests/api/
        Maybe terrence or draco can do it, should be fairly simple. (otherwise i can do it but not till next wednesday)
    */

class Requests extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          requestList: [],
          
        };
    }
    
    componentDidMount() {
        this.refreshList();
    }
    
    refreshList = () => {
        axios
          .get("/requests/api/")
          .then((res) => this.setState({ requestList: res.data }))
          .catch((err) => console.log(err));
    };

    renderRequests = () => {
        const newItems = this.state.requestList;

        return newItems.map((item) => (
            
            <Card>
                <div className="col-md-8 col-sm-10 mx-auto p-0">
                    <Accordion defaultActiveKey="">
                        <Accordion.Toggle as={Card.Header} eventKey = {item.email}>
                            {item.email}
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey={item.id}>
                            <Card.Body>
                            <p>Request 1:  {item.requestOne} </p>
                            
                            <p>Request 2: {item.requestTwo} </p>
                                
                            <p>Request 3: {item.requestThree} </p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Accordion>

                </div>
            
            </Card>

        ));
    };

    render() {
    return (
        <main className="container">
            <h3 className="text-center">Schedule Requests</h3>
            <div className="row">
                <div className="col-md-8 col-sm-10 mx-auto p-0">
                    <div className="card p-3">
                

                <ul className="list-group list-group-flush border-top-0">
                    {this.renderRequests()}
                </ul>


                
                </div>
                </div>
            </div>
        </main>
        );
    };
}
export default Requests;