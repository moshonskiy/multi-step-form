# Multi step form

Form with 3 steps (persist data between steps)

You can enter your data to the form, add files and submit. After submitting uploads directory will be created in locally. There you can find added files and data in json format.

Inputs in the form supports validation. Phone number supports numbers in international format.

## Form steps

##### Step 1

![step1 image](https://github.com/moshonskiy/multi-step-form/blob/main/markdown/img/Step1.png "Step 1")

##### Step 2

![step2 image](https://github.com/moshonskiy/multi-step-form/blob/main/markdown/img/Step2.png "Step 2")

##### Step 3

![step3 image](https://github.com/moshonskiy/multi-step-form/blob/main/markdown/img/Step3.png "Step 3")

##### Result

![result image](https://github.com/moshonskiy/multi-step-form/blob/main/markdown/img/Result.png "Result")

##### Success

![success image](https://github.com/moshonskiy/multi-step-form/blob/main/markdown/img/Success.png "Success")

## Dependencies used

- react
- react-hook-form
- react-dropzone
- material ui
- redux
- yup (for validation)
- libphonenumber-js
- express
- express-fileupload
- concurrently

Install the dependencies and devDependencies and start the server.

```sh
yarn install

yarn dev
```
