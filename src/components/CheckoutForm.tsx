import { Form } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";

export const action = async () => {
  return null;
};

const CheckoutForm = () => {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl">shipping information</h4>
      <FormInput label="First Name" name="name" type="text" />
      <FormInput label="Address" name="address" type="text" />
      <div className="mt-4">
        <SubmitBtn text="place your order" />
      </div>
    </Form>
  );
};
export default CheckoutForm;
