

const Login = () => {
    return (
        <div className="auth auth--login">
            <form className="auth__form">
                <h2 className="auth__title">Login</h2>

                <div className="auth__field">
                    <label htmlFor="email" className="auth__label">Email</label>
                    <input type="email" id="email" className="auth__input" required />
                </div>

                <div className="auth__field">
                    <label htmlFor="password" className="auth__label">Password</label>
                    <input type="password" id="password" className="auth__input" required />
                </div>

                <button type="submit" className="auth__button">Login</button>
                <p className="auth__text">
                    Don't have an account? <a href="/register" className="auth__link">Register here</a>
                </p>
            </form>
        </div>
    )
}

export default Login