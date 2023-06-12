import React from 'react'

function RandomUserData() {

   
    return (
        <div className='generate-random-user'>
            <div className='container'>
                <form onSubmit={HandleSubmit}>
                    <button className='button'>Generate Random User Info</button>
                    <div className='main'>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default RandomUserData