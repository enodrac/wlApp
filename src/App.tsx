//@ts-nocheck
import React, { useState } from 'react';
import Welcome from './components/welcome/welcome';
import Calendar from './components/calendar/calendar';
import DayData from './components/dayData/dayData';

import './App.scss'

export interface IUserData {
  name: string
  gender: string
  height: string
  age: string
  weight: string
  heaviestWeight: string
  objectiveWeight: string
}

export interface IDayData {
  [day: string]: {
    weight: string
    foodList: IFoodData
    exerciseList: any
  }
}

export interface IFoodData {
  [name: string]: {
    calories: string
    grams: string
  }
}

export interface ICalendarData {
  [month: string]: IDayData;
}

export interface IWlAppData {
  userData: IUserData
  calendarData: ICalendarData
  foodData: IFoodData
  appData: any
}

export default function App() {
  const [wlAppData, setWlAppData] = useState<IWlAppData>()

  return (
    <div className='main_container'>
      {!wlAppData || wlAppData?.appData?.continue ?
        <Welcome wlAppData={wlAppData} setWlAppData={setWlAppData} />
        :
        <>
          <Calendar wlAppData={wlAppData} setWlAppData={setWlAppData} />
          <DayData wlAppData={wlAppData} setWlAppData={setWlAppData} />
        </>
      }
    </div>
  );
}
