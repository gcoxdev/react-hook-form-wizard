import React from "react";
import { useFormContext, ErrorMessage } from "react-hook-form";
import { useDataContext } from "react-hook-form-wizard";

export default function Page2() {
    const { register, errors } = useFormContext();
    const { state } = useDataContext();

    return (
        <div>
            <input
                name="field2"
                placeholder="Field 2"
                ref={register({ required: "This is required" })}
                defaultValue={state.data.field2}
            />
            <div>
                <ErrorMessage name="field2" errors={errors} />
            </div>
        </div>
    );
}
