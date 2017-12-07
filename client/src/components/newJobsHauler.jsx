import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class newJobsHauler extends Component{
    
    constructor(props) {
        super(props)
        
        this.no_room = 4
        this.start_time = '12:30 pm'
        this.finish_by = '8:00 pm'
        this.max_price = '450'
        this.textareaChars = ''
        this.ID = 32
        this.phoneNumber = window.location.search.split("=")[1].split("?")[0];
        this.code = window.location.search.split("=")[3].slice(0,-1);         
        this.goToGotHauler = this.goToGotHauler.bind(this)

        this.state ={
            showMe: true
        }
      }

    goToGotHauler() {  
        axios.post(`/api/v1/movers/phone_number/${this.phoneNumber}/code/${this.code}/job`,{
            number_of_rooms: this.no_room,
            job_start_time: this.start_time,
            job_end_time: this.finish_by,
            max_price: this.max_price,
            description: this.textareaChars
        })  
            .then( response => {
                console.log(response)            
            })
            .catch(function(error) {
                console.log(error)
            })     
        
        
        this.props.history.push(`/confirmMover?phone=${this.phoneNumber}?code=${this.code}?ID=${this.ID}/`)
    }

    acceptedJob(){
        var ID = Math.floor(Math.random()*50)
        axios.get(`/api/v1/movers/phone_number/${this.phoneNumber}/code/${this.code}/job/${ID}`)
        this.setState({ID: ID})
        this.setState({showMe: false})
    }

    render() {
        return(   
            <section id = "inner_nav">
            <div className="tab">
              <ul className="tabs">
                <li><a href="#">NEW JOBS</a></li>
                <li><Link to={`/currentJob?phone=${this.phoneNumber}?code=${this.code}?ID=${this.ID}/`}>CURRENT JOB</Link></li>
              </ul> 
              <div className="tab_content">
      
                <div className="tabs_item" id = "hauler_tab_item">
                  <div className = "grandparent">
                    <div className ="parent">
                      <div className="wide">
                        <p>{this.no_room} Rooms to move</p>
                        <p>{this.start_time} - {this.finish_by}</p>
                        <p>$ {this.max_price}</p>
                      </div>
                        {
                            this.state.showMe ?
                            <div className="narrow" onClick={ evt => this.acceptedJob(evt)}>
                                <p className ="job_accept">Accept</p>
                            </div>
                            :
                            <div className="narrow">
                                <p className ="job_accept">Accepted Job!</p>
                            </div>
                        }
                    </div>
                  </div>
      
                  <div className = "grandparent">
                    <div className ="parent">
                      <div className="wide">
                        <p>3 Room to move</p>
                        <p>12:45 pm - 3:00 pm</p>
                        <p>$ 200</p>
                      </div>
                      <div className="narrow" onClick={ evt => this.acceptedJob(evt)}>
                        <p className ="job_accept">Accept</p>
                      </div>
                    </div>
                  </div>
      
                  <div className = "grandparent">
                    <div className ="parent">
                      <div className="wide">
                        <p>5 Rooms to move</p>
                        <p>11:30 pm - 5:00 am</p>
                        <p>$ 700</p>
                      </div>
                      <div className="narrow" onClick={ evt => this.acceptedJob(evt)}>
                        <p className ="job_accept">Accept</p>
                      </div>
                    </div>
                  </div>
      
                  <div className = "grandparent">
                    <div className ="parent">
                      <div className="wide">
                        <p>7 Rooms to move</p>
                        <p>1:30 pm - 5:00 pm</p>
                        <p>$ 300</p>
                      </div>
                      <div className="narrow" onClick={ evt => this.acceptedJob(evt)}>
                        <p className ="job_accept">Accept</p>
                      </div>
                    </div>
                  </div>
      
                </div> 
      
      
                <div className="tabs_item" id = "hauler_tab_item_2">
                  <div className = "grandparent">
                    <div className ="parent">
                      <div className="wide">
                        <p>7 Rooms to move</p>
                        <p>12:30 pm - 8:00 pm</p>
                        <p>$ 450</p>
                      </div>
                      <div className="narrow_2" onClick={ evt => this.goToGotHauler(evt)}>
                        <p className ="job_done">Done</p>
                      </div>
                    </div>
                  </div>
                </div> 
              </div> 
            </div> 
          </section>
      
           )
    }
}

export default newJobsHauler;
