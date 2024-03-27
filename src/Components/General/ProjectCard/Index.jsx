import React from 'react'
import PropTypes from 'prop-types';
import styles from './styles.module.scss'
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ link , imageSrc, projectName }) => {
  return (
    <Link passHref href={link}>
        <div className = {styles.projectCard} >
            <div className={styles.projectImage}>
                <Image alt='' src={imageSrc} width={192} height={160}/>
            </div>
            <div className={styles.projectContent}>
                <h5 className='text-xl text-main-primary'>{projectName}</h5>
            </div>
        </div>
    </Link>
  )
}

ProjectCard.propTypes = {}

export default ProjectCard