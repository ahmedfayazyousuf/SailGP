import React from 'react';
import { Link } from "react-router-dom";
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

                                                <div>
                                                    <Link to="/">
                                                        <button 
                                                        style={{
                                                            backgroundColor: '#061A1B',
                                                            color: '#061A1B',
                                                            border: '0',
                                                        }}>
                                                            TAP TO REGISTER
                                                        </button>
                                                    </Link>
                                                </div>


                                                <img src={Logo2} alt="Logo" 
                                                    style={{
                                                        height: '20%',
                                                        width: '20%',
                                                        marginBottom: '100px',
                                                        marginTop: '100px',
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