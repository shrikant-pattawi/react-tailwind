import React, { Children } from "react";

export function JobCards (list:any){
    let jobCard =  list.map((job:any)=>{
        return (
        <div className='flex pl-6 pt-4 max-w-[51.875rem] min-w-[22] h-[20rem] rounded-[10px] bg-white ' key={job.title}>
            <img className='w-12 h-12 rounded' src={require('../../src/netflix-icon-icon.png')} alt="company icon"></img>
            <div className='ml-1'>
                <h2 className='mt-0'>{job.title}</h2>
                <p className=''>{job.comName} - {job.industry}</p>
                <p className=' text-gray-600'>{job.location} ({job.remoteType})</p>
                <p className=' mt-6'>Part-Time (9.00 am - 5.00 pm IST)</p>
                <p className='mt-2'>Experience ({job.minex} - {job.maxex} years)</p>
                <p className='mt-2'>INR (₹) {job.minsal} - {job.max} / Month</p>
                <p className='mt-2'>{job.totalemp} employees</p>
                <div className=' mt-6'>
                    {job.applytype && <button className="py-2 px-4 mr-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        Apply Now
                    </button>}
                    {job.externalapply && <button className="py-2 px-4 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-opacity-75 border-solid border-slate-500">
                        External Apply
                    </button>}
                </div>
            </div>
        </div>)})
        return jobCard;   
}

let inputClass = "p-2 border-[#E6E6E6] border-solid border-2 rounded-[5px] w-[100%] placeholder-[#7A7A7A]";

export function LabelInput1 (list:any){
    let listInput = list.map((val:any) =>{
        return (
            <div key={val.title}>
                <div className="mt-8">
                    <label className=" text-sm font-medium">{val.title}</label>
                    {val.required && <span className=" text-[#D86161]">*</span>}
                </div>
                <div className="mt-1">
                    <input placeholder={val.placeholder} className={inputClass}></input>
                </div>
            </div>
        )
    })
    return listInput;
}


export function LabelInput2 (list:any){
    let listInput = list.map((val:any) =>{
        return (
            <div key={val.title}>
                <div>
                    <label className=" text-sm font-medium">{val.title}</label>
                </div>
                <div className="mt-1">
                    <input placeholder={val.placeholder} className={inputClass}></input>
                </div>
            </div>
        )
    })
    return listInput;
}

export function LabelInput3 (list:any){
    let listInput = list.map((val:any) =>{
        return (
            <div key={val.title} className="mt-8">
                <div>
                    <label className=" text-sm font-medium">{val.title}</label>
                </div>
                <div className="mt-1 columns-2 gap-6">
                    <div>
                        <input placeholder={val.placeholder} className={inputClass}></input>
                    </div>
                    <div>
                        <input placeholder={val.placeholder2} className={inputClass}></input>
                    </div>
                </div>
            </div>
        )
    })
    return listInput;
}

export function FormContainer ({title, step, button, children}:{title:any, step:any,  button:any, children:any}){
    return (
        <div className="p-8 w-[577px] border-solid border-opacity-100 border-[1px] rounded-[10px] border-[#E6E6E6]">
            <div className=" grid grid-cols-2 gap-4 place-content-between w-auto">
                <p className=" text-xl">{title}</p>
                <p className="flex flex-row-reverse">{step}</p>
            </div>
            {children}
            <div className=" flex flex-row-reverse mt-24" >
                <button className="bg-[#1597e4d4] pt-2 pr-4 pb-2 pl-4 rounded-md shadow-sm text-white hover:bg-[#72bee9d4]">{button}</button>
            </div>
        </div>
    )
}