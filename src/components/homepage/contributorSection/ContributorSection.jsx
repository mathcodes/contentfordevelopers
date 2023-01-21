import React from 'react'
import { Contributor } from '../../contributor/Contributor'

//This is a component that appears on homepage to show contributors
const ContributorSection = () => {
  return (
  <section className="contributor_section-scrollbar mx-2 my-8 flex flex-col items-center">
                <h2 className="text-black mb-4">Contributors</h2>
                <div className="flex flex-wrap justify-evenly p-6 overflow-y-scroll max-w-6xl max-h-[70vh] bg-blue-800 rounded-lg">
                    <Contributor />
                </div>
    </section>
  )
}

export default ContributorSection