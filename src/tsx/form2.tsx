import React from "react"
import { LabelInput1, LabelInput3, FormContainer } from "./component.tsx"

function Form2(){

    const formVal = [
        {
            title: 'Experience',
            placeholder: 'Minimum',
            placeholder2: 'Maximum',
        },
        {
            title: 'Salary',
            placeholder: 'Minimum',
            placeholder2: 'Maximum',
        }
    ]

    return (
        <div className="flex justify-center mt-4">
            <FormContainer title="Create a job" step="Step 2" button="Save">
                {
                    LabelInput3(formVal)
                }
                {
                    LabelInput1([{title: 'Total employee', placeholder: 'ex. 100', required: false}])
                }
                <div className="mt-8">
                    <label className=" text-sm font-medium">Apply type</label>
                    <div className="mt-1 flex">
                    <input type='radio' id='Quick_apply' className="h-5 w-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"></input>
                    <p className=" inline-block text-[#7A7A7A] ml-1">Quick apply</p>
                    <input type='radio'  id='External_apply' className=" ml-4 h-5 w-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"></input>
                    <p className=" inline-block text-[#7A7A7A] ml-1">External apply</p>
                    </div>
                </div>
            </FormContainer>
       </div>
    )
}

export default Form2