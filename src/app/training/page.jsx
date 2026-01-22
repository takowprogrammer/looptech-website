import React from 'react'
import TrainingHero from './_components/TrainingHero'
import TrainingRoadmap from './_components/TrainingRoadmap'
import CertificationRoadmap from './_components/CertificationRoadmap'
import PartnerSection from '@/components/PartnerSection'
import TrainingPrograms from './_components/TrainingPrograms'

const TrainingPage = () => {
  return (
    <div>
      <TrainingHero />
      <TrainingPrograms />
      <TrainingRoadmap />
      
      <CertificationRoadmap />
       <PartnerSection />
    </div>
  )
}

export default TrainingPage
