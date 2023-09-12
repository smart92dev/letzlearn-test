import React from 'react'
import {useState} from 'react'
import PersonalDetail from '../../components/PersonalDetail'
import CourseDetail from '../../components/CourseDetail'
import Stepper from '../../components/Stepper'
import Sidebar from '../../components/Sidebar'

export default function index() {
  const [ count, setCount ] = useState(3);
  const downCount = () => {
    setCount(count - 1);
  }
  return (
    <div>
      <Sidebar count={count} />
      <Stepper count={count} setCount = {setCount} />
      <CourseDetail courseNo={count - 1} prev={downCount} />
      <PersonalDetail />
    </div>
  )
}
