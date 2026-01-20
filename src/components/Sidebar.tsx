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
  Sparkles,
  X
} from 'lucide-react';
import { Sheet, SheetContent } from './ui/sheet';

interface SidebarProps {
  selectedDay: string;
  onSelectDay: (day: string) => void;
  days: string[];
  isMobileMenuOpen?: boolean;
  onMobileMenuClose?: () => void;
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

export function Sidebar({ selectedDay, onSelectDay, days, isMobileMenuOpen = false, onMobileMenuClose }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  const sidebarContent = (
    <>
      <div className="p-4 sm:p-6 border-b border-slate-200 flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div className="min-w-0">
              <span className="font-bold text-slate-900 text-base sm:text-lg block truncate">Planner</span>
              <span className="text-xs text-slate-500 block">Weekly View</span>
            </div>
          </div>
        )}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden md:flex p-2 active:scale-95 active:bg-slate-100 rounded-lg transition-all touch-manipulation"
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5 text-slate-600" />
            ) : (
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            )}
          </button>
          <button
            onClick={onMobileMenuClose}
            className="md:hidden p-2 active:scale-95 active:bg-slate-100 rounded-lg transition-all touch-manipulation"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-slate-600" />
          </button>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 safe-area-inset-bottom">
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
                className={`w-full flex items-center gap-3 px-4 py-3.5 min-h-[44px] rounded-xl transition-all active:scale-[0.98] touch-manipulation ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'text-slate-700 active:bg-slate-100'
                } ${isCollapsed ? 'justify-center' : ''}`}
              >
                <DayIcon className={`w-5 h-5 flex-shrink-0 ${isSelected ? 'text-white' : 'text-slate-600'}`} />
                {!isCollapsed && (
                  <>
                    <div className="flex-1 text-left min-w-0">
                      <span className={`text-sm font-semibold block truncate ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                        {day}
                      </span>
                      {isToday && (
                        <span className={`text-xs ${isSelected ? 'text-indigo-200' : 'text-indigo-600'}`}>
                          • Today
                        </span>
                      )}
                    </div>
                    {isSelected && (
                      <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                    )}
                  </>
                )}
              </button>
            );
          })}
        </div>
      </nav>

      <div className="p-4 border-t border-slate-200 safe-area-inset-bottom">
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
                  <div className="h-full bg-indigo-600 w-2/3 rounded-full transition-all duration-500"></div>
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
    </>
  );

  return (
    <>
      <aside className={`hidden md:flex fixed left-0 top-0 h-screen bg-white border-r border-slate-200 flex-col transition-all duration-300 z-30 ${
        isCollapsed ? 'w-20' : 'w-72'
      }`}>
        {sidebarContent}
      </aside>

      <Sheet open={isMobileMenuOpen} onOpenChange={(open) => !open && onMobileMenuClose?.()}>
        <SheetContent side="left" className="w-[280px] sm:w-[320px] p-0 flex flex-col">
          <div className="flex flex-col h-full bg-white">
            {sidebarContent}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
