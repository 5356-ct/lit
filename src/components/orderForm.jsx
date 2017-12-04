import React, {Component} from 'react'

class orderForm extends Component{

    // componentWillMount() {
    //     grabDataFromAPI()
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
                        <div>
                        <div id ="rooms_div">
                            <p className = "form_input">Number of Rooms to Move:</p>
                            <input placeholder="" id = "no_room" type="text"/>
                        </div>
                        <div id ="job_start">
                            <p className = "form_input">Job Start Time:</p>
                            <input placeholder="" id = "no_room" type="text"/>
                        </div>
                        <div id ="job_finish">
                            <p className = "form_input">Finish BY:</p>
                            <input placeholder="" id = "no_room" type="text"/>
                        </div>
                        <div id ="max_price">
                            <p className = "form_input">Max Price:</p>
                            <input placeholder="" id = "no_room" type="text"/>
                        </div>
        
                        <p>Describe your Job</p>
                        <p id ="example_text">e.g. Moving' on Up!</p>
                            <textarea id="textareaChars" maxlength="100"></textarea>
                            <span id="chars">100</span>/120
                        </div>
                        <div id = "send_button">
                        <button className="button button5">Send</button>
                        </div>
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
