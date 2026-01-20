import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { DayColumn } from './components/DayColumn';
import { weeklyPlannerData } from './data/plannerData';

export default function App() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  
  const [selectedDay, setSelectedDay] = useState<string>(today);

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar selectedDay={selectedDay} onSelectDay={setSelectedDay} days={days} />
      
      <div className="flex-1 flex flex-col ml-72">
        <Header selectedDay={selectedDay} />
        
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-4xl mx-auto">
            <DayColumn
              day={selectedDay}
              missions={weeklyPlannerData.daily_template}
              focus={weeklyPlannerData.weekly_focus[selectedDay as keyof typeof weeklyPlannerData.weekly_focus]}
              isSelected={true}
            />
          </div>
        </main>
      </div>
    </div>
  );
}