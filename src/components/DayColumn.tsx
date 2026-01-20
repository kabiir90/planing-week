import React from 'react';
import { MissionCard } from './MissionCard';
import { Target, TrendingUp } from 'lucide-react';
import type { Mission } from '../data/plannerData';

interface DayColumnProps {
  day: string;
  missions: Mission[];
  focus: string;
  isSelected: boolean;
}

export function DayColumn({ day, missions, focus, isSelected }: DayColumnProps) {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const isToday = day === today;

  const completedCount = Math.floor(missions.length * 0.33);
  const percentage = Math.round((completedCount / missions.length) * 100);

  return (
    <div className="flex flex-col w-full space-y-6">
      {/* Header Section */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-start justify-between mb-5">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-3xl font-bold text-slate-900">
                {day}
              </h3>
              {isToday && (
                <div className="px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-semibold">
                  Today
                </div>
              )}
            </div>
            
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="p-2 bg-indigo-600 rounded-lg">
                <Target className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-slate-500 uppercase mb-1">Daily Focus</div>
                <p className="text-sm text-slate-900 font-medium">
                  {focus}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-semibold text-slate-900">Daily Progress</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-600">{completedCount} / {missions.length} tasks</span>
              <span className="text-lg font-bold text-indigo-600">
                {percentage}%
              </span>
            </div>
          </div>
          
          <div className="h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
            <div 
              className="h-full bg-indigo-600 rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
              <div className="text-xs text-emerald-700 font-medium mb-1">Completed</div>
              <div className="text-xl font-bold text-emerald-900">{completedCount}</div>
            </div>
            <div className="p-3 rounded-xl bg-blue-50 border border-blue-200">
              <div className="text-xs text-blue-700 font-medium mb-1">In Progress</div>
              <div className="text-xl font-bold text-blue-900">2</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs text-slate-700 font-medium mb-1">Pending</div>
              <div className="text-xl font-bold text-slate-900">{missions.length - completedCount - 2}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Cards */}
      <div className="space-y-4">
        {missions.map((mission, index) => (
          <MissionCard key={`${day}-${index}`} mission={mission} index={index} />
        ))}
      </div>
    </div>
  );
}
