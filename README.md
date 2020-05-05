# react-hook-form-wizard

A simple wizard for react-hook-form

**Basic usage**

```
import React from 'react'
import ReactDOM from 'react-dom'
import Page2 from './Page2'

function App() {
    const onSubmit = ({ dataContext, formContext, wizardContext }) => {
        console.log(dataContext)
    }

    const useFormArgs = {
        mode: 'onSubmit'
    }

    return (
        <div className="App">
            <Wizard useFormArgs={useFormArgs} initialPage={0} onSubmit={onSubmit} enableDevTool={true}>
                <Pages>
                    <Page>
                        {({ dataContext: { state }, formContext: { register, errors }, wizardContext }) => {
                            return (
                                <>
                                    <input name="field1" placeholder="Field1" ref={register({ required: { value: true, message: 'Required' }, minLength: { value: 5, message: 'Please enter at least 5 characters' } })} defaultValue={state.data.field1} />
                                    {errors.field1 && <span>{errors.field1.message}</span>}
                                </>
                            )
                        }}
                    </Page>
                    <Page>
                        <Page2 />
                    </Page>
                </Pages>
                <Navigation />
            </Wizard>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

```

**Page2.js**

```
import React from 'react'
import { useFormContext, ErrorMessage } from 'react-hook-form'
import { useDataContext } from 'react-hook-form-wizard'

export default function Page2() {
    const { register, errors } = useFormContext()
    const { state } = useDataContext()

    return (
        <div>
            <input name="field2" placeholder="Field2" ref={register({ required: 'This is required' })} defaultValue={state.data.field2} />
            <ErrorMessage name="field2" errors={errors} />
        </div>
    )
}
```
