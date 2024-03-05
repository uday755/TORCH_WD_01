import React from 'react'
import Introduction from './Introduction'
import SkillsAndProjects from './SkillsAndProjects'
import Education from './Education'

export default function Home() {
    return (
        <>
        <div>
            <div className="container my-5">
                <Introduction/>
                <SkillsAndProjects/>
                <Education/>
            </div>
        </div>
        </>
    )
}
