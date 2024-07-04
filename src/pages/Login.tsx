import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-200 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          name="identifier"
          label="Email"
          defaultValue="test@test.com"
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          defaultValue="password1234"
        />
        <div className="mt-4">
          <SubmitBtn text="Login" />
        </div>
        <button
          type="button"
          className="btn btn-secondary btn-block capitalize"
        >
          guest user
        </button>
        <p className="text-center">
          Haven't registered?{" "}
          <Link to="/register" className="mt-2 link link-hover link-primary">
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
