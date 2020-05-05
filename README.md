# react-hook-form-wizard

A simple wizard for react-hook-form

Inspired by Brian Yang's [multi-step wizard](https://github.com/brianyang/react-hooks-multi-step-wizard) and the wizard form example on the react-hook-form [website](https://react-hook-form.com/advanced-usage#WizardFormFunnel)

I'm still new to React so don't beat me up too bad.
If you'd like to provide feedback or contribute please let me know.
This is still in development.

**Limitations**

Currently only local storage is supported

---

**Components Included**

```
<Wizard>
    <Progress />
    <Pages>
        <Page>
            -- Fields goes here --
        <Page>
        <Page>
            -- Fields goes here --
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

This component is just for example purposes. Would likely not be used in a real-world scenario.

---

**Hooks API**

| Hook             | State / Methods   | Return / Argument           | Description                                                                   |
| ---------------- | ----------------- | --------------------------- | ----------------------------------------------------------------------------- |
| useDataContext   | _see below_       |                             | Hooks into the little-state-machine store.                                    |
|                  | action(payload)   | `(payload: Object) => void` | Method to update store state.                                                 |
|                  | state             | `Object`                    | Returns store state.                                                          |
| useFormContext   | _same as useForm_ |                             | see docs for [useFormContext](https://react-hook-form.com/api#useFormContext) |
| useWizardContext | _see below_       |                             | Hooks into several states and methods for managing the wizard.                |
|                  | activePage        | `number`                    | Returns the active page that the wizard is currently on. Zero-based index.    |
|                  | pageTotal         | `number`                    | Returns the total number of Page components within the Pages component.       |
|                  | previousPage()    | `() => {}`                  | Method for navigating to the previous page.                                   |
|                  | nextPage()        | `() => {}`                  | Method for navigating to the next page.                                       |
|                  | goToPage(index)   | `(index: number) => void`   | Method for navigating to a particular page. Be careful for out of bounds.     |
|                  | isLastPage        | `boolean`                   | Whether the active page is the last page.                                     |

---

**Basic Example**

See [Basic example demo](https://codesandbox.io/s/basic-example-7py8c)
