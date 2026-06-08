import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function RegisterPage(){

    const [username , setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    return(
        <div className="register-component">
            <div className="register-component-container">
                <div className="register-component-wrapper">

                    <div className="register-component-content">

                        <div className="register-component-content__wrapper">

                            <div className="register-component-content__title-container">
                                <div className="register-component-content__title">

                                </div>
                            </div>

                            <form 
                                className="register-component-content__form-container"
                                onSubmit={(event)=>{
                                event.preventDefault();

                                if(!email.trim() || !password.trim() || !username.trim()){
                                    Swal.fire({
                                    icon: "error",
                                    title: "Oops...",
                                    text: "email , password , username are required",
                                    });
                                    return;
                                }

                                if (password !== confirmPassword) {
                                    Swal.fire({
                                    icon: "error",
                                    title: "Oops...",
                                    text: "Passwords do not match",
                                    });
                                    return;
                                }

                                const registerData={
                                    email , password , username , role
                                };

                                if (role === "dealer") {
                                    dispatch(registerDealer(registerData))
                                    .then(()=>{
                                    Swal.fire("Success", "Dealer Register Successful!", "success");
                                    navigate('/')
                                    })
                                    .catch((error)=>{
                                    Swal.fire("Error", error.message, "error");
                                    })
                                } else if (role === "admin") {

                                    const registerDataAdmin={
                                    email , password , username
                                    }

                                    dispatch(register(registerDataAdmin))
                                    .then(()=>{
                                    Swal.fire("Success", "Admin Register Successful!", "success");
                                    navigate('/')
                                    })
                                    .catch((error)=>{
                                    Swal.fire("Error", error.message, "error");
                                    })
                                }
                                
                                navigate('/');
                                }}
                            >
                                <div className="register-component-content__field-username">
                                    <label className="form-label"></label>
                                    <input
                                        className="form-label"
                                        type="text"
                                        value={username}
                                        onChange={(event)=> {
                                            const value = event.target.value;
                                            setUsername(value);
                                        }}
                                    />
                                </div>

                                <div className="register-component-content__field-email">
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

                                <div className="register-component-content__field-password">
                                    <label className="form-label"></label>
                                    <div className="input-group">
                                        <input
                                            className="form-label"
                                            type="password"
                                            value={password}
                                            onChange={(event)=> {
                                                const value = event.target.value;
                                                setPassword(value);
                                            }}
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? "Hide" : "Show"}
                                        </button>
                                    </div>
                                </div>


                                <div className="register-component-content__field-confirm-password">
                                    <label className="form-label"></label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="form-control"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>

                                <div className="register-component-content__button-container">
                                    <Button type="submit" variant="outline-success">Register</Button>    
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}