
export const Login = () => {
  return (
    <>
      <div className="container">
        <form action="">
            <label htmlFor="email"></label>
            <input type="email" name="email" id="email" placeholder="Email...." />
            <br />

            <label htmlFor="password"></label>
            <input type="password" name="password" id="password" placeholder="password.." />
            <br />

            <button type="submit">Login</button>


            <p>Forgotton Password?</p>

            <button> Create new account</button>
        </form>
      </div>
    </>
  )
}


