import React from 'react'

const phoneNumber = () => {  
   return(   
        <div className="col-xs-12 col-md-3 input-xs">
            <form onSubmit={evt => {evt.preventDefault()}}>
                <div>
                    <input id='phoneNumber' className='form-control input-xs' type="text" name='phoneNumber' minlength='10' maxlength='10' placeholder="Enter Phone Number" />
                </div>
                <div>
                    <button id='sendCode' className='btn btn-primary btn-xs'  type="submit">Send Code</button>
                </div>
            </form>
        </div>
   )
}

export default phoneNumber;
