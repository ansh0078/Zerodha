import React from 'react'
function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' alt=''/>
                </div>
                <div className='col-6 p-5 mt-5' >
                    <h1> Largest stock broker in India</h1>
                    <p className='mb-5'>2+ millon Zerodha clients contribute to over 15% of alll volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li> <p>Futues and options</p> </li>
                                <li> <p>Comodity derivatives</p> </li>
                                <li> <p>Currency derivatives</p> </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li> <p>Stocks & IPOs</p> </li>
                                <li> <p>Dricect mutual funds</p> </li>
                                <li> <p>Bounds and Govts, Security</p> </li>
                             </ul>
                        </div>
                        <img src="media/images/pressLogos.png" alt='' style={{width:'90%'}}/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Awards;