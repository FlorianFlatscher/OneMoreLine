import {Form} from "semantic-ui-react";
import React from "react";

/*
errors
name
type
register
 */
export const FormInput = ({errors, type, name ,register, ...rest}) => {
    return <Form.Input label={name}  error={errors[name] ? {content: errors[name].message, pointing: "below"} : false}>
        <input type={type} ref={register} name={name} id={name} {...rest}/>
    </Form.Input>
}
