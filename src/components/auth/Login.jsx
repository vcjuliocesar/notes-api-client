

const Login = () => {
    return (
        <div className="form">
            <div className="form__header">
                <h1 className="form__title">Login</h1>
            </div>
            <form className="form__content">
                <div className="foer__field">
                    <label className="form__label" htmlFor="username">User Name</label>
                    <input className="form__input" type="text" name="" id="" />
                </div>
                <div className="foer__field">
                    <label className="form__label" htmlFor="password">password</label>
                    <input className="form__input" type="password" name="" id="" />
                </div>
                <button className="form__button form__button--login">Login</button>
            </form>
        </div>
    )
}

export default Login