import Button from "../Button/Button";
import Input from "../Input/Input";

function LoginForm() {
  //Trigger onClick:
  //функция, прописанная заранее:
  const testFunction = () => {
    console.log("Vlick Button Test works ");
  };

  const login = (event) => {
    event.preventDefault();
    console.log(event);
    console.log("Login started");
  };
  return (
    <form className="login-form-container">
      <p className="title">Login Form</p>
      <div className="inputs-container">
        <Input
          id="email-id"
          name="email"
          type="email"
          placeholder="Enter your email"
          label="Email"
        />

        <Input
          id="password-id"
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
        />
      </div>
      <Button name="Login" type="button" onClick={login} />
      {/* 1 пример: функция прописанна заранее */}
      <Button type="button" onClick={testFunction}>
        Test
      </Button>
      {/* 2 пример: функция прописанна непосредственно в фигурных скобках в onClick */}
      {/* <button
        type="button"
        onClick={() => {
          console.log("Click on button Test works");
        }}
      >
        Test
      </button> */}
    </form>
  );
}

export default LoginForm;
