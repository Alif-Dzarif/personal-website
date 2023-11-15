import React from 'react'

import mon_resto from '../assets/images/Mon-Resto.png'
import nyt_clone from '../assets/images/NYT-Clone.png'
import kanbanzen_client from '../assets/images/KanbanZen-Client.png'
import personal_website from '../assets/images/personal-website.png'
import ubike from '../assets/images/UBike.png'
import user_dummy from '../assets/images/user-dummy-API.png'

export default function ProjectCard({ project, index, hour2 }) {

  const images = [personal_website, user_dummy, ubike, nyt_clone, kanbanzen_client, mon_resto]

  return (
    <div className={`card w-96 bg-base-100 shadow-xl ${hour2 < 6 || hour2 >= 18 ? 'bg-opacity-40' : 'bg-opacity-10'} hover:-translate-y-5 cursor-pointer transition-transform`} onClick={() => window.open(project?.url)}>
      <figure className='h-52 overflow-hidden'><img src={images[index]} alt="Shoes" className='h-52 w-full'/></figure>
      <div className="card-body">
        <h2 className="card-title">
          {project?.name}
          <div className={`rounded-2xl px-3 text-sm ${project.platform === 'Mobile'? 'bg-green-500': project.platform === 'Website' ? 'bg-red-500' : 'bg-yellow-500'}`}>{project.platform}</div>
        </h2>
        <p>{project?.info}</p>
        <div className="card-actions justify-end mt-5">
          {project?.tech.map((data, idx) => (
            <div className="badge badge-outline" key={idx}>{data}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
