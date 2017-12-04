import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

class phoneNumber extends Component {
    constructor(props) {
      super(props)
      
      this.phoneNumber = '';
      this.goToEnterCode = this.goToEnterCode.bind(this)
    }
  
    goToEnterCode() {
      this.props.history.push(`/samplePhoneNumber?phone=${this.phoneNumber}`)
    }
  
    render() {
        return(
            <div className="col-xs-12 col-md-3 input-xs">
                <form 
                onSubmit={evt => {
                    evt.preventDefault()
                    this.phoneNumber = evt.target.phoneNumber.value
                    this.goToEnterCode()
                }}>
                    <div>
                        <input name='phoneNumber' id='phoneNumber' className='form-control input-xs' type="text" minlength='10' maxlength='10' placeholder="Enter Phone Number" />
                    </div>
                    <div>
                        <button className="waves-effect btn btn-small green darken-2" id='sendCode'  type="submit">Send Code</button>
                    </div>
                </form>
            </div>
        )
    }
  }
  
export default withRouter(phoneNumber)
