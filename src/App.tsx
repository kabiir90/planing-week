import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { DayColumn } from './components/DayColumn';
import { weeklyPlannerData } from './data/plannerData';

export default function App() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  
  const [selectedDay, setSelectedDay] = useState<string>(today);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      <Sidebar 
        selectedDay={selectedDay} 
        onSelectDay={(day) => {
          setSelectedDay(day);
          setIsMobileMenuOpen(false);
        }} 
        days={days}
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuClose={() => setIsMobileMenuOpen(false)}
      />
      
      <div className="flex-1 flex flex-col md:ml-72 w-full">
        <Header 
          selectedDay={selectedDay} 
          onMenuClick={() => setIsMobileMenuOpen(true)}
        />
        
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 pb-20 md:pb-8 safe-area-inset-bottom">
          <div className="max-w-4xl mx-auto w-full">
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