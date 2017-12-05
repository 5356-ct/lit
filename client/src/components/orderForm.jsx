import React, {Component} from 'react'
import axios from 'axios'

class orderForm extends Component{
    
    constructor(props) {
        super(props)
        
        this.no_room = ''
        this.start_time = ''
        this.finish_by = ''
        this.max_price = ''
        this.textareaChars = ''
        this.phoneNumber = window.location.search.split("=")[1];
        this.code = window.location.search.split("=")[2];         
        this.goToGotHauler = this.goToGotHauler.bind(this)
      }

    componentDidMount(){
        axios.post(`/api/v1/movers/phone_number/${this.phoneNumber}/code/${this.code}/job`)  
            .then( response =>
                this.setState({
                    no_room : response.number_of_rooms,
                    start_time : response.job_start_time,
                    finish_by : response.job_end_time,
                    max_price : response.max_price,
                    // textareaChars: description                
                })
            )    
    }

    goToGotHauler() {  
        this.props.history.push(`/orderForm?phone=${this.phoneNumber}/`)
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
        // if you want to render the name now
        // Then just use this in the field
        // <li>Name: {this.state.name}</li>
        return(   
            <section id = "map_section">
        
                <section id = "inner_nav">
                <div className="tab">
                    <ul className="tabs">
                    <li><a href="#">MOVING</a></li>
                    <li><a href="#">JUNK HAULING</a></li>
                    </ul> 
                    <div className="tab_content">
        
                    <div className="tabs_item">
                        <form 
                        onSubmit={evt => {
                            evt.preventDefault()
                            this.no_room = ''
                            this.start_time = evt.target.start_time.value
                            this.finish_by = evt.target.finish_by.value
                            this.max_price = evt.target.max_price.value
                            this.textareaChars = evt.target.textareaChars.value
                            this.goToGotHauler()
                        }}>
                            <div>
                            <div id ="rooms_div">
                                <p className = "form_input">Number of Rooms to Move:</p>
                                <input placeholder="" id = "no_room" name = "no_room" type="text"/>
                            </div>
                            <div id ="job_start">
                                <p className = "form_input">Job Start Time:</p>
                                <input placeholder="" id = "start_time" name = "start_time" type="text"/>
                            </div>
                            <div id ="job_finish">
                                <p className = "form_input">Finish BY:</p>
                                <input placeholder="" id = "finish_by" name = "finish_by" type="text"/>
                            </div>
                            <div id ="max_price">
                                <p className = "form_input">Max Price:</p>
                                <input placeholder="" id = "max_price" name = "max_price" type="text"/>
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
