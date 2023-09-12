import React from 'react'
import PersonalDetail from '../../components/PersonalDetail'
import CourseDetail from '../../components/CourseDetail'
import Stepper from '../../components/Stepper'

export default function index() {
  return (
    <div>
      <Stepper count={3}/>
      <CourseDetail courseNo={1}/>
      <PersonalDetail />
    </div>
  )
}
