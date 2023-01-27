import React from 'react'
import { data } from '../../../data/db'
import { Contributor } from '../../contributor/Contributor'

//This is a component that appears on homepage to show contributors
const ContributorSection = () => {
  return (
    <section className="px-10 py-8 flex flex-col items-center border-solid border-2">
      <h2 className="text-blue text-2xl mb-4">Contributors</h2>
      <div className="flex flex-wrap p-6 max-w-3xl border-solid border-2 dark:border-white border-blue bg-white dark:text-platinum text-blue dark:bg-blue rounded-lg">
        {data.map((res) => <Contributor res={res} key={res.id} />)}
      </div>
    </section>
  )
}

export default ContributorSection