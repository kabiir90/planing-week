import React from 'react';
import { Bell, Search, Settings, User, Calendar, Menu } from 'lucide-react';

interface HeaderProps {
  selectedDay: string;
  onMenuClick?: () => void;
}

export function Header({ selectedDay, onMenuClick }: HeaderProps) {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-slate-200 px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 safe-area-inset-top">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 min-w-0 flex-1">
          <button
            onClick={onMenuClick}
            className="md:hidden p-2.5 -ml-1 active:scale-95 active:bg-slate-100 rounded-xl transition-all touch-manipulation"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-slate-700" />
          </button>
          
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="p-2 sm:p-2.5 bg-indigo-600 rounded-xl flex-shrink-0">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div className="min-w-0">
              <h1 className="text-base sm:text-lg font-bold text-slate-900 truncate">
                {selectedDay}'s Planning
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 truncate">{currentDate}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search missions..."
              className="pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent w-64"
            />
          </div>

          <button 
            className="p-2.5 active:scale-95 active:bg-slate-100 rounded-xl transition-all touch-manipulation relative"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5 text-slate-600" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-600 rounded-full"></span>
          </button>

          <button 
            className="hidden sm:flex p-2.5 active:scale-95 active:bg-slate-100 rounded-xl transition-all touch-manipulation"
            aria-label="Settings"
          >
            <Settings className="w-5 h-5 text-slate-600" />
          </button>

          <div className="hidden md:block w-px h-6 bg-slate-200 mx-1"></div>

          <button 
            className="hidden sm:flex items-center gap-2 px-2 sm:px-3 py-2 active:scale-95 active:bg-slate-100 rounded-xl transition-all touch-manipulation"
            aria-label="User profile"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-sm font-semibold text-slate-900 hidden lg:block">Developer</span>
          </button>
        </div>
      </div>
    </header>
  );
}
