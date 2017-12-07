import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class currentJob extends Component{
    
    constructor(props) {
        super(props)
        
        this.no_room = 4
        this.start_time = '12:30 pm'
        this.finish_by = '8:00 pm'
        this.max_price = '450'
        this.textareaChars = ''
        this.ID = window.location.search.split("=")[3].slice(0,-1)
        this.phoneNumber = window.location.search.split("=")[1].split("?")[0] 
        this.code = window.location.search.split("=")[2].split("?")[0]        

        this.state ={
            showMe: true
        }
      }

    acceptedJob(){
        var ID = Math.floor(Math.random()*50)
        axios.get(`/api/v1/movers/phone_number/${this.phoneNumber}/code/${this.code}/job/${ID}/finish`)
        this.setState({showMe: false})
    }

    render() {
        return(   
            <div id = "inner_nav">
            <div className="tab">
              <ul className="tabs">
                <li><Link to="">NEW JOBS</Link></li>
                <li><Link to="">CURRENT JOB</Link></li>
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
                                <p className ="job_accept">Finished Job?</p>
                            </div>
                            :
                            <div className="narrow">
                                <p className ="job_accept">Finished Job! </p>
                            </div>
                        }
                    </div>
                  </div>
                </div>
                 
            </div> 
          </div>
          </div>
      
           )
    }
}

export default currentJob;
