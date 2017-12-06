
import React, { Component } from 'react'
import axios from 'axios'

class confirmMover extends Component {
    constructor(props) {
        super(props)
        
        this.phoneNumber = window.location.search.split("=")[1].split("?")[0];
        this.code = window.location.search.split("=")[2].split("/")[0];
        this.status = ''
        this.goToOrderForm = this.goToOrderForm.bind(this)
      }
    
      componentWillMount(){
        axios.get(`/api/v1/movers/phone_number/${this.phoneNumber}/code/${this.code}/job`)
            .then(res => this.setState({ status: res.full_name }))     
      }

      goToOrderForm() {  
        this.props.history.push(`/orderForm?phone=${this.phoneNumber}?code=${this.code}/`)
      }

    render(){
        return(   
            <div>
            
            <div id = "heading">
                <div id = "heading_image">
                    <img id = "party_image" src="../../public/images/party.png" />
                </div>
                <div id = "heading text"> <p>Jeff McMover Accepts</p></div>
            </div>
            
            <div id="root"></div>
            <section id = "photo_section">
                <img id = "profile_image" src="../../public/images/profile.jpg" />
            </section>

            <section id ="page7_text_section">
            <div id = "acceptance_message">
              <p id="acceptance_message_text">Jeff has accepted ur job - make sure  coordinate h jeff to confirm ckup timed any details! Don't forget you will need to pay jeff in cash  soon as the job is done</p>
            </div>
            <div id="info_section">
              <table>
                <tr>
                  <td id ="right"><i className="fa fa-truck fa-3x" aria-hidden="true"></i></td>
                  <td>Large box Truck</td>
                </tr>
                <tr>
                  <td id ="right"><i className="fa fa-phone fa-3x" aria-hidden="true"></i></td>
                  <td>(212)555-1212</td>
                </tr>
                <tr>
                  <td id ="right"><i className="fa fa-money fa-3x" aria-hidden="true"></i></td>
                  <td>$475</td>
                </tr>
                <tr>
                <td>{JSON.stringify(this.status)}</td>
                </tr>
              </table>
            </div>
      
            <div id = "message_button">
              <button className="button button5 msg_button">Send</button>
            </div>
            </section>
          
            </div>
        )
    }
}


export default confirmMover