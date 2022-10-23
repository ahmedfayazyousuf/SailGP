import React, { useState } from 'react';
import "./Signup.css";
import Logo1 from '../images/Logo1.png';
import Logo2 from '../images/Logo2.png';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import { notInitialized } from 'react-redux/es/utils/useSyncExternalStore';

const Signup = () => {
    const history = useNavigate();
    const [user,setUser] = useState({
        name:"",email:"",phone:"", day:"", month:"", year:"", timetaken:0
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value})
    }

//fetch api to transfer data
    const PostData = async (e) => {
        e.preventDefault();
        //object destruction so dont need to write user.name etc again and again
        const { name, email, phone, day, month, year} = user;
        
        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({ 
                // name: name doesnt need to be written because its the same name
                name, email, phone, day, month, year
            })
        });

        const data = await res.json();

        // console.log(data._id)

        if(data.status === 422 || !data) {
            window.alert("Invalid Credentials - If error persists, contact admin");
            console.log("Invalid Credentials - If error persists, contact admin");
        } else {
            window.alert("Registration Successful! Welcome Aboard!");
            console.log("Registration Successful! Welcome Aboard!");

            history("/timetaken",{state:{id:data.id}});
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
                                        marginBottom: '20px',  
                                    }}
                                    />
                                </div>
                                <form method="POST" id="register-form" className="requires-validation" noValidate>



                                    <div className="col-md-12">
                                        <label htmlFor='name'
                                        style={{
                                            transform: 'skewX(-15deg)',
                                        }}
                                        >NAME</label>
                                        <input className="form-control" type="text" name="name" id="name" value={user.name} onChange={handleInputs} required
                                        style={{
                                            borderRadius: '0',
                                            transform: 'skewX(-15deg)',
                                            marginTop: '0',
                                        }}/>
                                    </div>





                                    <div className="col-md-12">
                                        <label htmlFor='email'
                                        style={{
                                            transform: 'skewX(-15deg)',
                                            marginTop: '10px',
                                        }}
                                        >EMAIL</label>
                                        <input className="form-control" type="email" name="email" id="email" value={user.email} onChange={handleInputs} required
                                        style={{
                                            borderRadius: '0',
                                            transform: 'skewX(-15deg)',
                                            marginTop: '0',
                                        }}/>
                                        
                                    </div>





                                    <div className="col-md-12">
                                        <label htmlFor='phone'
                                        style={{
                                            transform: 'skewX(-15deg)',
                                            marginTop: '10px',
                                        }}
                                        >MOBILE</label>
                                        <input className="form-control" type="number" name="phone" id="phone" value={user.phone} onChange={handleInputs} required
                                        style={{
                                            borderRadius: '0',
                                            transform: 'skewX(-15deg)',
                                            marginTop: '0',
                                        }}/>
                                    </div>





                                    <div>
                                        <label
                                        style={{
                                            transform: 'skewX(-15deg)',
                                            marginTop: '10px',
                                        }}
                                        >DATE OF BIRTH</label>
                                        <div 
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',   
                                        }}>
                                            <input className="form-control" type="number" name="day" id="day" value={user.day} onChange={handleInputs} placeholder="DD" required
                                            style={{
                                                width: '30%',
                                                borderRadius: '0',
                                                transform: 'skewX(-15deg)',
                                                marginTop: '0',
                                                display: 'inline-flex',
                                            }}
                                            />

                                            <input className="form-control" type="number" name="month" id="month" value={user.month} onChange={handleInputs} placeholder="MM" required
                                            style={{
                                                width: '30%',
                                                borderRadius: '0',
                                                transform: 'skewX(-15deg)',
                                                marginTop: '0',
                                                marginLeft: '5px',
                                                display: 'inline-flex',
                                            }}
                                            />


                                            <input className="form-control" type="number" name="year" id="year" value={user.year} onChange={handleInputs} placeholder="YYYY" required
                                            style={{
                                                width: '40%',
                                                borderRadius: '0',
                                                transform: 'skewX(-15deg)',
                                                marginTop: '0',
                                                marginLeft: '5px',
                                                display: 'inline-flex',
                                            }}
                                            />
                                        </div>
                                    </div>


                                <div className="form-check" style={{marginTop: '10px'}}>
                                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                                    <label className="form-check-label" style={{fontSize: '12px'}}>If under 16, please tick to confirm parental consent.</label>
                                    <div className="invalid-feedback">If under 16, please tick to confirm parental consent.</div>
                                </div>


                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                                    <label className="form-check-label" style={{fontSize: '12px'}}>I would like to receive information from P&O Marinas regarding sailing information and promotions.</label>
                                    <div className="invalid-feedback">If under 16, please tick to confirm parental consent.</div>
                                </div>

                                    <div
                                    style={{
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        marginTop: '10px',  
                                    }}>

                                        <Link to="/">
                                            <button 
                                            style={{
                                                paddingRight: '55px',
                                                paddingLeft: '55px',
                                                backgroundColor: '#061A1B',
                                                color: 'grey',
                                                marginRight: '5px',
                                                borderColor: 'grey',
                                                padding: '10px',
                                                fontWeight: '1000',
                                            }}>
                                                CANCEL
                                            </button>
                                        </Link>


                                            
                                        <Link to="/signup">
                                            <button 
                                            onClick={PostData}
                                            style={{
                                                paddingRight: '55px',
                                                paddingLeft: '55px',
                                                padding: '10px',
                                                backgroundColor: 'white',
                                                fontWeight: '1000',
                                            }}>
                                                SUBMIT
                                            </button>
                                        </Link><br></br>


                                        <img src={Logo2} alt="Logo" 
                                        style={{
                                            height: '30px',
                                            width: '150px',
                                            marginTop: '20px',
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

export default Signup