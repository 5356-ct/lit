import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import enterCode from "./enterCode"

class phoneNumber extends Component {
    constructor(props) {
      super(props)
      
      this.state = {
        phoneNumber: '',
        didNotChooseStatus: true,
        isAMover: true
      }
      this.goToEnterCode = this.goToEnterCode.bind(this)
    }
  
    toggleStatus(event){
        event.preventDefault()
        this.state.didNotChooseStatus ?
            this.setState({ didNotChooseStatus: false}) :
            this.setState({ didNotChooseStatus: true})
    }

    toggleStatusAndSetHauler(event){
        event.preventDefault()
        this.state.didNotChooseStatus ?
            this.setState({ didNotChooseStatus: false}) :
            this.setState({ didNotChooseStatus: true})
        
        this.setState({ isAMover: false })
    }
    
    goToEnterCode() {
      this.state.isAMover ?
      axios.get(`/api/v1/movers/phone_number/${this.state.phoneNumber}`)
      : 
      axios.get(`/api/v1/haulers/phone_number/${this.state.phoneNumber}`)
      
      {<enterCode isAMover={this.state.isAMover} />}
      this.props.history.push(`/samplePhoneNumber?phone=${this.state.phoneNumber}`)
    }
  
    render() {
        return(
            <div className="col-xs-12 col-md-3 input-xs">
                {
                    this.state.didNotChooseStatus ? 
                    <div id = "Status_Button">
                        <button 
                        onClick={ evt => this.toggleStatus(evt)}
                        className="button button5" 
                        >
                        Mover
                        </button>

                        <button 
                        onClick={ evt => this.toggleStatusAndSetHauler(evt)}
                        className="button button5" 
                        >
                        Hauler
                        </button>
                    </div> 
                : 
                <form 
                onSubmit={evt => {
                    evt.preventDefault()
                    this.state.phoneNumber = evt.target.phoneNumber.value
                    this.goToEnterCode()
                }}>
                    <div>
                        <input name='phoneNumber' id='phoneNumber' className='form-control input-xs' type="text" minLength='10' maxLength='10' placeholder="Enter Phone Number" />
                    </div>
                    <div>
                        <button className="waves-effect btn btn-small green darken-2" id='sendCode'  type="submit">Send Code</button>
                    </div>
                </form>
                }
                
            </div>
        )
    }
  }
  
export default withRouter(phoneNumber)
