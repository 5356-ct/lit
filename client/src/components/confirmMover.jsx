import React, { Component } from 'react'
import axios from 'axios'

class confirmMover extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            price: 300
        }

        this.phoneNumber = window.location.search.split("=")[1].split("?")[0]; 
        this.isAMover = window.location.search.split("=")[2];
        this.code = window.location.search.split("=")[3].slice(0,-1);
        this.goToHistory = this.goToHistory.bind(this)
      }
    
      componentWillMount(){
        axios.get(`/api/v1/movers/phone_number/${this.phoneNumber}/code/${this.code}/job`)
            .then( (res) => {
                console.log(res)
                let price = res.data[0].max_price
                this.setState({ price: price})
            }) 
            .catch(function (error) {
                console.log(error)
            })
      }

      goToHistory() {  
        this.props.history.push(`/history?phone=${this.phoneNumber}?code=${this.code}/`)
      }

    render(){
        return(   
            <div>
            
            <div id = "heading">
                <div id = "heading_image">
                    <img id = "party_image" src="https://raw.githubusercontent.com/5356-ct/lit/master/client/public/images/party.png" />
                </div>
                <div id = "heading text"> <p>Jeff McMover Accepts</p></div>
            </div>
            
            <div id="root"></div>
            <section id = "photo_section">
                <img id = "profile_image" src="https://raw.githubusercontent.com/5356-ct/lit/master/client/public/images/profile.jpg" />
            </section>

            <section id ="page7_text_section">
            <div id = "acceptance_message">
              <p id="acceptance_message_text">Jeff has accepted your job - make sure coordinate with jeff to confirm any details! Don't forget you will need to pay jeff in cash as soon as the job is done</p>
            </div>
            <div id="info_section">
              <table>
              <tbody>
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
                  <td>{this.state.price}</td>
                </tr>
                </tbody>
              </table>
            </div>
            
            <div id = "message_button">
              <button className="button button5 msg_button" onClick={this.goToHistory}>History</button>
            </div>
            </section>
          
            </div>
        )
    }
}


export default confirmMover