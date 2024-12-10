import React from 'react'
import CapacityChart from './Components/CapacityChart'
import InteractiveMap from './components/InteractiveMap'
import { getTrackDetails } from './Models/TrackStation'
import { getTaskHistory } from './Models/Tasks'
import AIChatbot from './components/AIChatbot'

function TrackOverview() {
    const trackDetails = getTrackDetails();
    const taskHistory = getTaskHistory(); //Would fetch from database and map it to a list
  return (
    <div>
        <CapacityChart />
        <InteractiveMap />
        <div>{trackDetails}</div>
        <div>{taskHistory}</div>
        <AIChatbot />

    </div>
  )
}

export default TrackOverview