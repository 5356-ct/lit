import React, {Component} from 'react'
import axios from 'axios'

class newJobsHauler extends Component{
    
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

    // componentWillMount() {
    //     //grabDataFromAPI()
    // }

    // grabDataFromAPI() {
        //  make the api call
        /*
        callTheAPIfunction().then({ (response) =>
            let name = response.name
            this.setState({
                name: name
            })
        })*/
    //}

    render() {
        return(   
            <section id = "inner_nav">
            <div class="tab">
              <ul class="tabs">
                <li><a href="#">NEW JOBS</a></li>
                <li><a href="#">PENDING JOBS</a></li>
              </ul> 
              <div class="tab_content">
      
                <div class="tabs_item" id = "hauler_tab_item">
                  <div class = "grandparent">
                    <div class ="parent">
                      <div class="wide">
                        <p>4 Rooms to move</p>
                        <p>12:30 pm - 8:00 pm</p>
                        <p>$ 450</p>
                      </div>
      
                      <div class="narrow" onclick="location.href='www.noshin.me';">
                        <p class ="job_accept">Accept</p>
                      </div>
                    </div>
                  </div>
      
                  <div class = "grandparent">
                    <div class ="parent">
                      <div class="wide">
                        <p>4 Rooms to move</p>
                        <p>12:30 pm - 8:00 pm</p>
                        <p>$ 450</p>
                      </div>
                      <div class="narrow" onclick="location.href='www.noshin.me';">
                        <p class ="job_accept">Accept</p>
                      </div>
                    </div>
                  </div>
      
                  <div class = "grandparent">
                    <div class ="parent">
                      <div class="wide">
                        <p>4 Rooms to move</p>
                        <p>12:30 pm - 8:00 pm</p>
                        <p>$ 450</p>
                      </div>
                      <div class="narrow" onclick="location.href='www.noshin.me';">
                        <p class ="job_accept">Accept</p>
                      </div>
                    </div>
                  </div>
      
                  <div class = "grandparent">
                    <div class ="parent">
                      <div class="wide">
                        <p>4 Rooms to move</p>
                        <p>12:30 pm - 8:00 pm</p>
                        <p>$ 450</p>
                      </div>
                      <div class="narrow" onclick="location.href='www.noshin.me';">
                        <p class ="job_accept">Accept</p>
                      </div>
                    </div>
                  </div>
      
                </div> 
      
      
                <div class="tabs_item" id = "hauler_tab_item_2">
                  <div class = "grandparent">
                    <div class ="parent">
                      <div class="wide">
                        <p>4 Rooms to move</p>
                        <p>12:30 pm - 8:00 pm</p>
                        <p>$ 450</p>
                      </div>
                      <div class="narrow_2" onclick="location.href='www.noshin.me';">
                        <p class ="job_done">Done</p>
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
