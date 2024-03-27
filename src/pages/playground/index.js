import React from 'react';
import Layout from '@/Components/HOC/Layout'
import ProjectCard from '@/Components/General/ProjectCard/Index'
import { ProjectData } from '@/data/projects';
import styles from './styles.module.scss';


const Playground = () => {
  return (
    <Layout headingText={'React Playground'}>
      <div className={styles.project__container}>
          {ProjectData.map(project => <ProjectCard key ={project.id} 
                                        link={project.link} 
                                        imageSrc={project.imageSrc || '/next.svg'} 
                                        projectName={project.name}/>
          )}
      </div>  
    </Layout>
  )
}

export default Playground