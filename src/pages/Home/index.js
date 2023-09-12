import React from 'react'
import PersonalDetail from '../../components/PersonalDetail'
import CourseDetail from '../../components/CourseDetail'

export default function index() {
  return (
    <div>
      <CourseDetail courseNo={1}/>
      <PersonalDetail />
    </div>
  )
}
