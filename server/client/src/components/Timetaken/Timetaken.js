import React, { useState } from 'react';

import { Link } from "react-router-dom";
import Logo1 from '../images/Logo1.png';
import Logo2 from '../images/Logo2.png';
import {useLocation} from 'react-router-dom';
// import Logo2 from '../images/Logo2.png';
// import { useNavigate } from "react-router-dom";

const Timetaken = () => {
    // const history = useNavigate();
    const location = useLocation();
    const [user,setUser] = useState({
        timetaken:""
    });

    console.log(location.state.id)

    let timetaken, value;

    const handleInputs = (e) => {
        // console.log(e);
        value = e.target.value;

        setUser({...user, [timetaken]:value})
        console.log(user)
    }

//fetch api to transfer data
    const PostData = async (e) => {
        e.preventDefault();
        //object destruction so dont need to write user.name etc again and again
        const { timetaken } = user;
        
        const res = await fetch(`/register/${location.state.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({ 
                // name: name doesnt need to be written because its the same name
                timetaken
            })
        });

        const data = await res.json();

        if(data.status === 422 || !data) {
            window.alert("Invalid Credentials - If error persists, contact admin");
            console.log("Invalid Credentials - If error persists, contact admin");
        } else {
            window.alert("Registration Successful! Welcome Aboard!");
            console.log("Registration Successful! Welcome Aboard!");

            // history("/login");
        }

    }

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
                                            marginBottom: '40px', 
                                        }}
                                    />
                                </div>

                                <form method="POST" id="register-form" className="requires-validation" noValidate>



                                    <div className="col-md-12">
                                        <label htmlFor='phone'
                                        style={{
                                            transform: 'skewX(-15deg)',
                                            marginTop: '10px',
                                        }}
                                        >TIME TAKEN</label>
                                        <input className="form-control" type="number" name="phone" id="phone" value={user.phone} onChange={handleInputs} placeholder="seconds" required
                                        style={{
                                            borderRadius: '0',
                                            transform: 'skewX(-15deg)',
                                            marginTop: '0',
                                        }}/>
                                    </div>

                        
                                    <div
                                    style={{
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        marginTop: '50px',
                                    }}
                                    >
                                        <Link to="/leaderboard">
                                            <button 
                                            style={{
                                                paddingRight: '25px',
                                                paddingLeft: '25px',
                                                padding: '10px',
                                                backgroundColor: 'white',
                                                fontWeight: '1000',
                                            }}>
                                                GO TO LEADERBOARD
                                            </button>
                                        </Link>
                                    </div>


                                    <div
                                        style={{
                                            justifyContent: 'center',
                                            textAlign: 'center',
                                        }}>
                                            <img src={Logo2} alt="Logo" 
                                            style={{
                                                height: '65 px',
                                                width: '250px',
                                                marginTop: '50px',  
                                            }}
                                            />
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

export default Timetaken