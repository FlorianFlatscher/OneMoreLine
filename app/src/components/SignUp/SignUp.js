import React from "react";
import {
    Form,
    Button,
} from "semantic-ui-react";
import {useForm} from "react-hook-form";
import {FormInput} from "../Form/FormInput";

export const SignUp = (props) => {
    const {register, handleSubmit, errors, watch} = useForm();
    const onSubmit = data => console.log(data);

    return <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group width="equal">
            <FormInput errors={errors} name="First name" placeholder="First name" type="text"
                       register={register({required: "required"})}/>
            <FormInput errors={errors} name="Last name" placeholder="Last name" type="text"
                       register={register({required: "required"})}/>
        </Form.Group>
        <FormInput errors={errors} name="Email" placeholder="Email" type="text"
                   register={register({required: "required"})}/>
        <FormInput errors={errors} name="Username" placeholder="Username" type="text"
                   register={register({required: "required"})}/>
        <FormInput errors={errors} name="Password" placeholder="Password" type="password"
                   register={register({required: "required"})}/>
        <FormInput errors={errors} name="Repeat password" placeholder="Repeat password" type="password"
                   register={register({required: "required", validate: (value) => value === watch("Password") ? undefined : "passwords don't match"})}/>
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Button type='submit'>Submit</Button>
    </Form>
}
