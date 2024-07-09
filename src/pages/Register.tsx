import { FormInput, SubmitBtn } from "../components";
import { Form, Link, redirect } from "react-router-dom";
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
    const response = await customFetch.post("/auth/local/register", data);
    console.log(response);
    toast.success("Successfully registered");
    return redirect("/login");
  } catch (error) {
    const errorMessage = (error as CustomError)?.response?.data?.error?.message;
    toast.error(errorMessage);
    return null;
  }
};

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-200 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput
          type="text"
          name="username"
          label="Username"
          defaultValue="flying spaghetti monster"
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          defaultValue="pasta400@gmail.com"
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          defaultValue="pastafari1234"
        />
        <div className="mt-4">
          <SubmitBtn text="Register" />
        </div>
        <p className="text-center">
          Already registered?{" "}
          <Link to="/login" className="mt-2 link link-hover link-primary">
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
