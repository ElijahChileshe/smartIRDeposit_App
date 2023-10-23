import { useState } from "react"

const Register = () => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(name, email, password);
    }  

    return (
        <form className="register" onSubmit={handleSubmit}>
            <h3>Register</h3>

            <label>Name:</label>
            <input 
                type="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />

            <label>Email:</label>
            <input 
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />

            <label>Password:</label>
            <input 
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button>Register</button>
        </form>
    )
} 

export default Register