import React from "react";

export function JobCards (list:any){
    let jobCard =  list.map((job:any)=>{
        return (
        <div className='flex pl-6 pt-4 pb-4 pr-6 max-w-[51.875rem] min-w-[22] min-h-[20rem] rounded-[10px] bg-white ' key={job.title}>
            <img className='w-12 h-12 rounded' src={require('../../src/netflix-icon-icon.png')} alt="company icon"></img>
            <div className='ml-1'>
                <h2 className='mt-0'>{job.title}</h2>
                <p className=''>{job.comName} - {job.industry}</p>
                <p className=' text-placeholder'>{job.location} ({job.remoteType})</p>
                <p className=' mt-6'>Part-Time (9.00 am - 5.00 pm IST)</p>
                <p className='mt-2'>Experience ({job.minex} - {job.maxex} years)</p>
                <p className='mt-2'>INR (₹) {job.minsal} - {job.max} / Month</p>
                <p className='mt-2'>{job.totalemp} employees</p>
                <div className=' mt-6'>
                    {
                        job.applytype && <Button button={"Apply Now"} fontweight='font-medium' fontColor='text-white' bgColor='bg-primary' hbgColor="hover:bg-[#72bee9d4]" border=""/>
                    }
                    {
                        job.externalapply && <Button button={" External Apply"} fontweight='font-medium' fontColor='text-primary' bgColor='bg-white' hbgColor="hover:bg-slate-200" border= "border-solid border-primary border-[1px]"/>   
                    }
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
        <div className="p-8 w-[577px] border-solid border-opacity-100 border-[1px] rounded-[10px] border-borderColor">
            <div className=" grid grid-cols-2 gap-4 place-content-between w-auto">
                <p className=" text-xl">{title}</p>
                <p className="flex flex-row-reverse">{step}</p>
            </div>
            {children}
            <div className=" flex flex-row-reverse mt-24" >
                <Button button={button} fontweight='font-medium' fontColor='text-white' bgColor='bg-primary' hbgColor="hover:bg-[#72bee9d4]" border=""></Button>
            </div>
        </div>
    )
}

export function Button ({button, fontweight, fontColor, bgColor, hbgColor, border= ""}:{button:any, fontweight:any, fontColor:any, bgColor:any, hbgColor:any, border:any}){
    return <button className={` pt-2 pr-4 pb-2 pl-4 ${fontweight} ${bgColor} rounded-md shadow-sm ${fontColor} ${hbgColor} ${border}`}>{button}</button>
}