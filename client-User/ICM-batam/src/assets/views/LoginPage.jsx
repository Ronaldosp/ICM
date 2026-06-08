import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/action/actionCreator";

export default function LoginPage(){

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = () =>{
        const loginData ={
            email,
            password
        }

        dispatch(login(loginData))
        .then(() =>{
            //insert logic for role sepperation

            Swal.fire("Success", "Admin Login Successful!", "success");
            navigate('/')
        })
        .catch((error)=>{
            Swal.fire("Error", error.message, "error");
        })
    }

    return(
        <div className="login-component">
            <div className="login-component-container">
                <div className="login-component-wrapper">

                    <div className="login-component-content">

                        <div className="login-component-content__wrapper">

                            <div className="login-component-content__title-container">
                                <div className="login-component-content__title">

                                </div>
                            </div>

                            <form 
                                className="login-component-content__form-container"
                                onSubmit={(event) =>{
                                    event.preventDefault();
                                    dispatch(handleLogin());
                                }}
                            >
                                <div className="login-component-content__field-email">
                                    <label className="form-label"></label>
                                    <input
                                        className="form-label"
                                        type="email"
                                        value={email}
                                        onChange={(event)=> {
                                            const value = event.target.value;
                                            setEmail(value);
                                        }}
                                    />
                                </div>

                                <div className="login-component-content__field-password">
                                    <label className="form-label"></label>
                                    <input
                                        className="form-label"
                                        type="password"
                                        value={password}
                                        onChange={(event)=> {
                                            const value = event.target.value;
                                            setPassword(value);
                                        }}
                                    />
                                </div>

                                <div className="login-component-content__button-container">
                                    <Button type="submit" variant="outline-success">Login</Button>    
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}