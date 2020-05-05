import React from 'react'

import { Wizard, Pages, Page, Navigation, Progress } from 'react-hook-form-wizard'
import Page2 from './components/Page2'

const App = () => {
    const onSubmit = ({ dataContext, formContext, wizardContext }) => {
        console.log(JSON.stringify(dataContext.state.data));
    };

    const useFormArgs = {
        mode: "onBlur"
    };

    return (
        <Wizard useFormArgs={useFormArgs} onSubmit={onSubmit}>
            <Progress />
            <Pages>
                <Page>
                    {({
                        dataContext: { state },
                        formContext: { register, errors },
                        wizardContext
                    }) => {
                        return (
                            <div>
                                <input
                                    name="field1"
                                    placeholder="Field 1"
                                    ref={register({
                                        required: {
                                            value: true,
                                            message: "This field is required"
                                        },
                                        minLength: {
                                            value: 5,
                                            message: "Please enter at least 5 characters"
                                        }
                                    })}
                                    defaultValue={state.data.field1}
                                />
                                {errors.field1 && <div>{errors.field1.message}</div>}
                            </div>
                        );
                    }}
                </Page>
                <Page>
                    <Page2 />
                </Page>
            </Pages>
            <Navigation />
        </Wizard>
    )
}

export default App
