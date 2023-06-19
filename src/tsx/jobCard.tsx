import React from "react"
import { JobCards } from "./component.tsx"

function JobCard(){
    const jobDetails = [{
        title: 'UX UI Designer',
        comName: 'Great Vibes',
        industry: 'Information Technology',
        location: 'Chennai, Tamilnadu, India',
        remoteType: 'In-office',
        minex: '1',
        maxex: '2',
        minsal: '30,000',
        maxsal: '60,000',
        totalemp: '51-200',
        applytype: true,
        externalapply: false
    },
    {
      title: 'Developer',
      comName: 'Great Vibes',
      industry: 'Information Technology',
      location: 'Chennai, Tamilnadu, India',
      remoteType: 'In-office',
      minex: '1',
      maxex: '2',
      minsal: '50,000',
      maxsal: '70,000',
      totalemp: '51-200',
      applytype: false,
      externalapply: true
  },
  {
    title: 'Interaction Designer',
    comName: 'Great Vibes',
    industry: 'Information Technology',
    location: 'Chennai, Tamilnadu, India',
    remoteType: 'In-office',
    minex: '1',
    maxex: '2',
    minsal: '30,000',
    maxsal: '50,000',
    totalemp: '51-200',
    applytype: false,
    externalapply: true
  },
  {
    title: 'SEO Analyst',
    comName: 'Great Vibes',
    industry: 'Information Technology',
    location: 'Chennai, Tamilnadu, India',
    remoteType: 'In-office',
    minex: '1',
    maxex: '2',
    minsal: '30,000',
    maxsal: '50,000',
    totalemp: '51-200',
    applytype: true,
    externalapply: false
  },
  ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-6  bg-slate-400 mt-4">
            {JobCards(jobDetails)}
        </div>
    )
}

export default JobCard