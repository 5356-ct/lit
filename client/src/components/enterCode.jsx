import React from 'react'

const enterCode = () => {
    this.phoneNumber = window.location.search.split("=")[1];

   return(   
        <div className="col-xs-12 col-md-3 input-xs">
            <form onSubmit={evt => {evt.preventDefault()}}>
                <div>
                    <input id='code' className='form-control input-xs' type="text" name='code' minlength='4' maxlength='4' placeholder="Enter Code" />
                </div>
                <div>
                    <button id='joinButton' className='btn btn-primary btn-xs'  type="submit">Join</button>
                </div>
            </form>
        </div>
   )
}

export default enterCode;
