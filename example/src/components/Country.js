import React from "react";
import { useFormContext, ErrorMessage } from "react-hook-form"
import { useDataContext } from "react-hook-form-wizard"

export default function Country() {
    const { register, errors } = useFormContext()
    const { state } = useDataContext()

    return (
        <div>
            <select
                name="country"
                placeholder="Country"
                ref={register({ required: { value: true, message: 'Country is required' } })}
                defaultValue={state.data.country}
            >
                <option value=""></option>
                <option value="United States">United States</option>
                <option value="Some other country">Some other country</option>
            </select>
            <div>
                <ErrorMessage name="country" errors={errors} />
            </div>
        </div>
    );
}
