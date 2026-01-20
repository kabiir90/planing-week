import React from 'react';
import { 
  Calendar,
  ChevronLeft,
  ChevronRight,
  Sunrise,
  Sun,
  Cloudy,
  Zap,
  Star,
  Moon,
  Sparkles
} from 'lucide-react';

interface SidebarProps {
  selectedDay: string;
  onSelectDay: (day: string) => void;
  days: string[];
}

const dayIcons = {
  'Monday': Sunrise,
  'Tuesday': Sun,
  'Wednesday': Cloudy,
  'Thursday': Zap,
  'Friday': Star,
  'Saturday': Moon,
  'Sunday': Sparkles
};

export function Sidebar({ selectedDay, onSelectDay, days }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <aside className={`fixed left-0 top-0 h-screen bg-white border-r border-slate-200 flex flex-col transition-all duration-300 z-30 ${
      isCollapsed ? 'w-20' : 'w-72'
    }`}>
      <div className="p-6 border-b border-slate-200 flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-bold text-slate-900 text-lg">Planner</span>
              <span className="text-xs text-slate-500 block">Weekly View</span>
            </div>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5 text-slate-600" />
          ) : (
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          )}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        {!isCollapsed && (
          <div className="mb-4">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Days
            </span>
          </div>
        )}
        <div className="space-y-2">
          {days.map((day) => {
            const isToday = day === today;
            const isSelected = selectedDay === day;
            const DayIcon = dayIcons[day as keyof typeof dayIcons];
            
            return (
              <button
                key={day}
                onClick={() => onSelectDay(day)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'text-slate-700 hover:bg-slate-100'
                } ${isCollapsed ? 'justify-center' : ''}`}
              >
                <DayIcon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-slate-600'}`} />
                {!isCollapsed && (
                  <>
                    <div className="flex-1 text-left">
                      <span className={`text-sm font-semibold ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                        {day}
                      </span>
                      {isToday && (
                        <span className={`text-xs ml-2 ${isSelected ? 'text-indigo-200' : 'text-indigo-600'}`}>
                          • Today
                        </span>
                      )}
                    </div>
                    {isSelected && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </>
                )}
              </button>
            );
          })}
        </div>
      </nav>

      <div className="p-4 border-t border-slate-200">
        <div className={`p-4 rounded-xl bg-slate-50 border border-slate-200 ${
          isCollapsed ? 'flex justify-center' : ''
        }`}>
          {!isCollapsed ? (
            <div>
              <div className="text-sm font-semibold text-slate-900 mb-2">Weekly Progress</div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-600">Completed</span>
                  <span className="font-semibold text-indigo-600">67%</span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-600 w-2/3 rounded-full"></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
              67
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
