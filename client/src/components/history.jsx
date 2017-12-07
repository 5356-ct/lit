import React, {Component} from 'react'
import axios from 'axios'

class history extends Component{
    
    constructor(props) {
        super(props)
        
        this.no_room = 2
        this.start_time = '4:30 pm'
        this.finish_by = '8:00 pm'
        this.max_price = 75
        this.textareaChars = ''
        this.phoneNumber = window.location.search.split("=")[1].split("?")[0];
        this.code = window.location.search.split("=")[2].split("/")[0];         
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
                        <p>Moved {this.no_room} Rooms</p>
                        <p>4:30 pm - 8:00 pm</p>
                        <p>$ {this.max_price}</p>
                      </div>
      
                      <div className="narrow">
                        <img id = "houseImage" src="https://raw.githubusercontent.com/5356-ct/lit/master/client/public/images/house1.jpg" />
                      </div>
                    </div>
                  </div>
      
                  <div className = "grandparent">
                    <div className ="parent">
                      <div className="wide">
                        <p>Moved 5 Rooms</p>
                        <p>3:00 pm - 9:00 pm</p>
                        <p>$ 150</p>
                      </div>
                      <div className="narrow" onClick={ evt => this.goToGotHauler(evt)}>
                        <img id = "houseImage" src="https://raw.githubusercontent.com/5356-ct/lit/master/client/public/images/house2.jpeg" />
                      </div>
                    </div>
                  </div>
      
                  <div className = "grandparent">
                    <div className ="parent">
                      <div className="wide">
                        <p>Moved 4 Rooms</p>
                        <p>1:00 pm - 5:00 pm</p>
                        <p>$ 200</p>
                      </div>
                      <div className="narrow" onClick={ evt => this.goToGotHauler(evt)}>
                         <img id = "houseImage" src="https://raw.githubusercontent.com/5356-ct/lit/master/client/public/images/house3.jpg" />
                      </div>
                    </div>
                  </div>
      
                  <div className = "grandparent">
                    <div className ="parent">
                      <div className="wide">
                        <p>Moved 3 Rooms</p>
                        <p>12:30 am - 8:00 am</p>
                        <p>$ 450</p>
                      </div>
                      <div className="narrow" onClick={ evt => this.goToGotHauler(evt)}>
                        <img id = "houseImage" src="https://raw.githubusercontent.com/5356-ct/lit/master/client/public/images/house4.jpg" />
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

export default history;
