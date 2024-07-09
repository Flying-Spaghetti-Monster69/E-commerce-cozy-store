import { FormInput, SubmitBtn } from "../components";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { loginUser } from "../stores/userStore";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

interface CustomError extends Error {
  response: {
    data: {
      error: {
        message: string;
      };
    };
  };
}

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post("/auth/local", data);
    toast.success("Logged in successfully");
    loginUser(response.data);
    return redirect("/");
  } catch (error) {
    const errorMessage = (error as CustomError)?.response?.data?.error?.message;
    toast.error(errorMessage);
    return null;
  }
};

const Login = () => {
  const navigation = useNavigate();

  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      loginUser(response.data);
      toast.success("Welcome guest user");
      navigation("/");
    } catch (error) {
      console.log(error);
      toast.error("guest user login error please try again");
    }
  };

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
          onClick={loginAsGuestUser}
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
