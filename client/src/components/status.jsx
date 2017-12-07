import React, {Component} from 'react'
import axios from 'axios'

class status extends Component{
    
    constructor(props) {
        super(props)
        
        this.no_room = ''
        this.start_time = ''
        this.finish_by = ''
        this.max_price = ''
        this.textareaChars = ''
        this.phoneNumber = window.location.search.split("=")[1].split("?")[0];
        this.code = window.location.search.split("=")[2].split("/")[0];         
        this.goToGotHauler = this.goToGotHauler.bind(this)
      }

    componentWillMount(){
        axios.get(`/api/v1/movers/phone_number/${this.phoneNumber}/code/${this.code}/jobs`)
            .then( res => {
                this.setState({
                    no_room: res.data[0].number_of_rooms,
                    start_time: res.data[0].job_start_time,
                    finish_by: res.data[0].job_end_time,
                    max_price: res.data[0].max_price,
                    textareaChars: res.data[0].description,
                })           
            })
            .catch(function(error) {
                console.log(error)
            }) 
    }
    goToGotHauler() {  
        this.props.history.push(`/confirmMover?phone=${this.phoneNumber}?code=${this.code}/`)
    }

    render() {
        return(   
            <section id = "inner_nav">
            <div className="tab">
              <ul className="tabs">
                <li>Past Moving Requests</li>
              </ul> 
              <div className="tab_content">
      
                <div className="tabs_item" id = "hauler_tab_item">
                  <div className = "grandparent">
                    <div className ="parent">
                      <div className="wide">
                        <p>2 Rooms to move</p>
                        <p>4:30 pm - 8:00 pm</p>
                        <p>$ 75</p>
                      </div>
      
                      <div className="narrow" onClick={ evt => this.goToGotHauler(evt)}>
                        <p className ="job_accept">Accept</p>
                      </div>
                    </div>
                  </div>
      
                  <div className = "grandparent">
                    <div className ="parent">
                      <div className="wide">
                        <p>10 Rooms to move</p>
                        <p>3:00 pm - 9:00 pm</p>
                        <p>$ 150</p>
                      </div>
                      <div className="narrow" onClick={ evt => this.goToGotHauler(evt)}>
                        <p className ="job_accept">Accept</p>
                      </div>
                    </div>
                  </div>
      
                  <div className = "grandparent">
                    <div className ="parent">
                      <div className="wide">
                        <p>8 Rooms to move</p>
                        <p>1:00 pm - 5:00 pm</p>
                        <p>$ 200</p>
                      </div>
                      <div className="narrow" onClick={ evt => this.goToGotHauler(evt)}>
                        <p className ="job_accept">Accept</p>
                      </div>
                    </div>
                  </div>
      
                  <div className = "grandparent">
                    <div className ="parent">
                      <div className="wide">
                        <p>3 Rooms to move</p>
                        <p>12:30 am - 8:00 am</p>
                        <p>$ 450</p>
                      </div>
                      <div className="narrow" onClick={ evt => this.goToGotHauler(evt)}>
                        <p className ="job_accept">Accept</p>
                      </div>
                    </div>
                  </div>
      
                </div> 
      
      
                <div className="tabs_item" id = "hauler_tab_item_2">
                  <div className = "grandparent">
                    <div className ="parent">
                      <div className="wide">
                        <p>4 Rooms to move</p>
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

export default status;
