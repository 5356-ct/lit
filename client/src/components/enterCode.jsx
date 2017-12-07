import React, { Component } from 'react'
import axios from 'axios'
import orderForm from './orderForm'

class enterCode extends Component {
    constructor(props) {
        super(props)
        
        this.phoneNumber = window.location.search.split("=")[1];        
        this.goToOrderForm = this.goToOrderForm.bind(this)
      }
    
      componentDidMount(){
        this.props.isAMover ?
        axios.get(`/api/v1/movers/phone_number/${this.phoneNumber}/code`)  
        : 
        axios.get(`/api/v1/haulers/phone_number/${this.phoneNumber}/code`)     
      }

      goToOrderForm() {
        {<orderForm isAMover={this.props.isAMover} />} 
        this.props.isAMover ?
        this.props.history.push(`/orderForm?phone=${this.phoneNumber}?code=${this.code}/`)
        :
        this.props.history.push(`/newJobsHauler?phone=${this.phoneNumber}?code=${this.code}/`)
      }

    render(){
        return(   
            <div className="col-xs-12 col-md-3 input-xs">
                <form 
                onSubmit={evt => {
                    evt.preventDefault()
                    this.code = evt.target.code.value
                    this.goToOrderForm()
                }}>
                    <div>
                        <input id='code' className='form-control input-xs' type="text" name='code' minLength='4' maxLength='4' placeholder="Enter Code" />
                    </div>
                    <div>
                        <button id='joinButton' className='btn btn-primary btn-xs'  type="submit">Join</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default enterCode;
