import React from 'react';
import Logo2 from '../images/Logo2.png';
import thankyou from '../images/thankyou.png';

const Thankyou = () => { 


    return (
        <>
            <div className="form-body">
                <div className="form-holder">
                            <div className="form-items">

                                <form>
                                    <div class="container" className="profilepanel">
                                                
                                                
                                                <img src={thankyou} alt="Logo" 
                                                    style={{
                                                        height: '90px',
                                                        width: '200px',
                                                        marginBottom: '100px',
                                                        marginTop: '100px',
                                                    }}
                                                />  

                                                    <br></br>

                                                <img src={Logo2} alt="Logo" 
                                                    style={{
                                                        height: '40.5px',
                                                        width: '250px',
                                                        marginBottom: '100px',
                                                        marginTop: '200px',
                                                    }}
                                                />
                                    </div>
                                </form>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Thankyou