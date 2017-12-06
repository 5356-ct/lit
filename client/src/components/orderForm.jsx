import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';

class orderForm extends Component{
    
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
        // to render the name now
        // Then just use this in the field
        // <li>Name: {this.state.name}</li>
        return(   
            <section id = "map_section">
        
                <section id = "inner_nav">
                <div className="tab">
                    <ul className="tabs">
                    <li><a href="#">MOVING</a></li>
                    <li><Link to="/newJobsHauler">JUNK HAULING</Link></li>
                    </ul> 
                    <div className="tab_content">
        
                    <div className="tabs_item">
                        <form 
                        onSubmit={evt => {
                            evt.preventDefault()
                            this.no_room = evt.target.no_room.value
                            this.start_time = evt.target.start_time.value
                            this.finish_by = evt.target.finish_by.value
                            this.max_price = evt.target.max_price.value
                            this.textareaChars = evt.target.textareaChars.value
                            this.goToGotHauler()
                        }}>
                            <div>
                            <div id ="rooms_div">
                                <p className = "form_input">Number of Rooms to Move:</p>
                                <input placeholder="" id = "no_room" name = "no_room" type="number"/>
                            </div>
                            <div id ="job_start">
                                <p className = "form_input">Job Start Time:</p>
                                <input placeholder="" id = "start_time" name = "start_time" type="datetime"/>
                            </div>
                            <div id ="job_finish">
                                <p className = "form_input">Finish BY:</p>
                                <input placeholder="" id = "finish_by" name = "finish_by" type="datetime"/>
                            </div>
                            <div id ="max_price">
                                <p className = "form_input">Max Price:</p>
                                <input placeholder="" id = "max_price" name = "max_price" type="number"/>
                            </div>
            
                            <p>Describe your Job</p>
                            <p id ="example_text">e.g. Moving' on Up!</p>
                                <textarea id="textareaChars" name="textareaChars" maxlength="100"></textarea>
                                <span id="chars">100</span>/120
                            </div>

                            <div id = "send_button">
                                <button className="button button5" type="submit">Send</button>
                            </div>
                        </form>
                    </div> 
        
                    <div className="tabs_item">
                        <div> I dont know what goes inside here</div>
                    </div> 
                    </div> 
                </div>
                </section>
        
            </section>
           )
    }
}

export default orderForm;
