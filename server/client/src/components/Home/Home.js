import React from 'react';
import { Link } from "react-router-dom";
import Logo1 from '../images/Logo1.png';
import Logo2 from '../images/Logo2.png';
import "./Home.css";

const Home = () => { 


    return (
        <>
            <div className="form-body">
                <div className="form-holder">
                            <div className="form-items">

                                <form>
                                    <div class="container" className="profilepanel">
                                                <div class="row" className="profilepanel">
                                                <img src={Logo1} alt="Logo" 
                                                style={{
                                                    height: '78px',
                                                    width: '300px',
                                                    marginTop: '100px',
                                                    marginBottom: '100px',
                                                }}
                                                />
                                                </div>

                                                <div>
                                                    <Link to="/signup">
                                                        <button 
                                                        style={{
                                                            paddingRight: '25px',
                                                            paddingLeft: '25px',
                                                            padding: '10px',
                                                            backgroundColor: 'white',
                                                            fontWeight: '1000',
                                                        }}>
                                                            TAP TO REGISTER
                                                        </button>
                                                    </Link>


                                                </div>
                                                <img src={Logo2} alt="Logo" 
                                                    style={{
                                                        height: '60px',
                                                        width: '300px',
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

export default Home