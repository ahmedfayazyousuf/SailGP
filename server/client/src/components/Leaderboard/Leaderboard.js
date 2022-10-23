import React from 'react';
import Logo1 from '../images/Logo1.png';
 
const Profile = () => {



    return (
        <>
            <div className="form-body">
                <div className="row">
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items" >
                                <img src={Logo1} alt="Logo" 
                                style={{
                                    height: '65 px',
                                    width: '250px',
                                    marginBottom: '20px',
                                }}
                                />
                                <form method="POST" id="register-form" className="requires-validation" noValidate>


                                <table class="table"
                                style={{
                                    color: 'white',
                                    justifyContent: 'center',
                                    alignItems: 'center',
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

                                </table>

                        

                                    <div className="form-button mt-3">
                                        <button id="signup" name="signup" type="submit" className="btn btn-primary" >SUBMIT</button>
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