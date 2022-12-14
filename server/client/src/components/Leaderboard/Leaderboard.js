import React from 'react';
import Logo1 from '../images/Logo1.png';
import { Link } from "react-router-dom";

const Profile = () => {



    return (
        <>
            <div className="form-body">
                <div className="row">
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items" >
                            <div
                            style={{
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}>
                                <img src={Logo1} alt="Logo" 
                                style={{
                                    height: '65 px',
                                    width: '250px',
                                    marginBottom: '20px',  
                                }}
                                />
                            </div>
                                <form method="POST" id="register-form" className="requires-validation" noValidate>


                                <table class="table"
                                style={{
                                    color: 'white',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: '20px',
                                    textAlign: 'center'
                                }}>
                                    <tr>
                                        <td style={{
                                            fontWeight: '700',
                                        }}>
                                            NAME
                                        </td>


                                        <td style={{
                                            fontWeight: '700',
                                        }}>
                                            TIME SCORE
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>ZAKI</td>
                                        <td>120</td>
                                    </tr>

                                    <tr>
                                        <td>ADITHYA</td>
                                        <td>300</td>
                                    </tr>

                                    <tr>
                                        <td>ARSHIYA</td>
                                        <td>73</td>
                                    </tr>

                                    <tr>
                                        <td>KAMIL</td>
                                        <td>93</td>
                                    </tr>

                                    <tr>
                                        <td>NABEEL</td>
                                        <td>43</td>
                                    </tr>

                                    <tr>
                                        <td>ALEEM</td>
                                        <td>57</td>
                                    </tr>

                                    <tr>
                                        <td>KWEEN</td>
                                        <td>09</td>
                                    </tr>

                                    <tr>
                                        <td>HOMSI</td>
                                        <td>49</td>
                                    </tr>

                                </table>

                        

                                <div
                                style={{
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                }}>
                                    <Link to="/thankyou">
                                        <button 
                                        style={{
                                            paddingRight: '55px',
                                            paddingLeft: '55px',
                                            padding: '10px',
                                            marginTop: '20px',
                                            backgroundColor: 'white',
                                            fontWeight: '1000',
                                        }}>
                                            END
                                        </button>
                                    </Link>
                                </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile