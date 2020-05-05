# react-hook-form-wizard

A simple wizard for react-hook-form

Inspired by Brian Yang's [multi-step wizard](https://github.com/brianyang/react-hooks-multi-step-wizard) and the wizard form example on the react-hook-form [website](https://react-hook-form.com/advanced-usage#WizardFormFunnel)

I'm still new to React so don't beat me up too bad.
If you'd like to provide feedback or contribute please let me know.
This is still in development.

---

**Components included**

```
<Wizard>
    <Progress />
    <Pages>
        <Page>
            -- Content goes here --
        <Page>
    </Pages>
    <Navigation />
</Wizard>
```

---

**Component API**

###### Wizard

| Prop          | Type                                                   | Required | Description                                                                                                                         |
| ------------- | ------------------------------------------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| useFormArgs   | `Object`                                               |          | Same arguments passed into useForm, see [useForm](https://react-hook-form.com/api#useForm)                                          |
| initialPage   | `number`                                               |          | Which page the wizard should start. Zero-based index.                                                                               |
| onSubmit      | `({ dataContext, formContext, wizardContext}) => void` | Yes      | The submit function that will run on the final page of the form.                                                                    |
| enableDevTool | `boolean`                                              |          | Enable DevTool component include in little-state-machine, see [docs](https://github.com/bluebill1049/little-state-machine#-example) |

###### Progress

This component is just for example purposes. Would likely not be used in a real-world scenario.

###### Pages

This component is a container component for Page components

###### Page

This component can contain your own components but also exposes render props for using included contexts. See basic usage example.

###### Navigation

## This component is just for example purposes. Would likely not be used in a real-world scenario.

**Hooks API**

| Hook             | Methods           | Argument / Return | Description                                                                   |
| ---------------- | ----------------- | ----------------- | ----------------------------------------------------------------------------- |
| useDataContext   | _see below_       |                   | Hooks into the little-state-machine store.                                    |
|                  | action(payload)   | `Object`          | Method to update store state.                                                 |
|                  | state             | `Object`          | Returns store state.                                                          |
| useFormContext   | _same as useForm_ |                   | see docs for [useFormContext](https://react-hook-form.com/api#useFormContext) |
| useWizardContext | _see below_       |                   | Hooks into several states and methods for managing the wizard.                |
|                  | activePage        | `number`          | Returns the active page that the wizard is currently on. Zero-based index.    |
|                  | pageTotal         | `number`          | Returns the total number of Page components within the Pages component.       |
|                  | previousPage()    | `() => {}`        | Method for navigating to the previous page.                                   |
|                  | nextPage()        | `() => {}`        | Method for navigating to the next page.                                       |
|                  | goToPage(index)   | `(number) => {}`  | Method for navigating to a particular page. Be careful for out of bounds.     |
|                  | isLastPage        | `boolean`         | Whether the active page is the last page.                                     |

---

**Basic Usage**

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Page2 from './Page2';

function App() {
    const onSubmit = ({ dataContext, formContext, wizardContext }) => {
        console.log(dataContext);
    };

    const useFormArgs = {
        mode: 'onSubmit',
    };

    return (
        <div className="App">
            <Wizard useFormArgs={useFormArgs} initialPage={0} onSubmit={onSubmit} enableDevTool={true}>
                <Pages>
                    <Page>
                        {({ dataContext: { state }, formContext: { register, errors }, wizardContext }) => {
                            return (
                                <>
                                    <input
                                        name="field1"
                                        placeholder="Field1"
                                        ref={register({
                                            required: { value: true, message: 'Required' },
                                            minLength: { value: 5, message: 'Please enter at least 5 characters' },
                                        })}
                                        defaultValue={state.data.field1}
                                    />
                                    {errors.field1 && <span>{errors.field1.message}</span>}
                                </>
                            );
                        }}
                    </Page>
                    <Page>
                        <Page2 />
                    </Page>
                </Pages>
                <Navigation />
            </Wizard>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

**Page2.js**

```javascript
import React from 'react';
import { useFormContext, ErrorMessage } from 'react-hook-form';
import { useDataContext } from 'react-hook-form-wizard';

export default function Page2() {
    const { register, errors } = useFormContext();
    const { state } = useDataContext();

    return (
        <div>
            <input name="field2" placeholder="Field2" ref={register({ required: 'This is required' })} defaultValue={state.data.field2} />
            <ErrorMessage name="field2" errors={errors} />
        </div>
    );
}
```
