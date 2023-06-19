import React from "react"
import { FormContainer, LabelInput1, LabelInput2 } from "./component.tsx"
function Form1(){

    const formVal = [
        {
            title: 'Job title',
            placeholder: 'ex. UX UI Designer',
            required: true
        },
        {
            title: 'Company name',
            placeholder: 'ex. Google',
            required: true
        },
        {
            title: 'Industry',
            placeholder: 'ex. Information Technology',
            required: true
        },
    ]

    const formVal2 = [
        {
            title: 'Location',
            placeholder: 'ex. Chennai',
        },
        {
            title: 'Remote type',
            placeholder: 'ex. In-office',
        }
    ]

    return (
        <div className="flex justify-center mt-4">
            <FormContainer title="Create a job" step="Step 1" button="Next">
                {
                    LabelInput1(formVal)
                }
                <div className="columns-2 gap-6 mt-8">
                {
                    LabelInput2(formVal2)
                }
                </div>
            </FormContainer>
        </div>
       
    )
}

export default Form1