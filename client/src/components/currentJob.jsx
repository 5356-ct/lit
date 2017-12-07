import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class currentJob extends Component{
    
    constructor(props) {
        super(props)
        
        this.no_room = ''
        this.start_time = ''
        this.finish_by = ''
        this.max_price = ''
        this.textareaChars = ''        
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
        
        
        this.props.history.push(`/confirmMover?phone=${this.phoneNumber}?code=${this.code}/`)
    }

    acceptedJob(){
        var ID = Math.floor(Math.random()*50)
        axios.get(`/api/v1/movers/phone_number/${this.phoneNumber}/code/${this.code}/job/${ID}`)
        this.setState({showMe: false})
    }

    render() {
        return(   
            <div id = "inner_nav">
            <div className="tab">
              <ul className="tabs">
                <li><a href="#">NEW JOBS</a></li>
                <li><Link to="">CURRENT JOB</Link></li>
              </ul> 
              <div className="tab_content">
      
                <div className="tabs_item" id = "hauler_tab_item">
                  <div className = "grandparent">
                    <div className ="parent">
                      <div className="wide">
                        <p>4 Rooms to move</p>
                        <p>12:30 pm - 8:00 pm</p>
                        <p>$ 450</p>
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
                </div>
                 
            </div> 
          </div>
          </div>
      
           )
    }
}

export default currentJob;