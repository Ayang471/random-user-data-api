import React from 'react'

function RandomUserData() {
    const GenerateRandomUserInfos = () => {
        fetch(`https://random-data-api.com/api/v2/users?size=20`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                let main = document.querySelector('.main');
                main.innerHTML = data.map(({ first_name, last_name, address, email, }) => {
                    return `<div className='card'>
                  <section className='info'>
                    <p><strong>Name: </strong><span>${first_name} ${last_name}</span></p>
                   <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Address:</strong>${address.city}, ${address.country}</p>
                  </section>
                   </div>`;
                })
            }); return null
    }


    const HandleSubmit = (e) => {
        e.preventDefault();
        GenerateRandomUserInfos();
    }
   
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