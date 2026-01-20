import React from 'react';
import { Bell, Search, Settings, User, Calendar } from 'lucide-react';

interface HeaderProps {
  selectedDay: string;
}

export function Header({ selectedDay }: HeaderProps) {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-slate-200 px-8 py-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-indigo-600 rounded-xl">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900">{selectedDay}'s Planning</h1>
              <p className="text-sm text-slate-500">{currentDate}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search missions..."
              className="pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent w-64"
            />
          </div>

          <button className="p-2.5 hover:bg-slate-100 rounded-xl transition-colors relative">
            <Bell className="w-5 h-5 text-slate-600" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-600 rounded-full"></span>
          </button>

          <button className="p-2.5 hover:bg-slate-100 rounded-xl transition-colors">
            <Settings className="w-5 h-5 text-slate-600" />
          </button>

          <div className="w-px h-6 bg-slate-200 mx-2"></div>

          <button className="flex items-center gap-2 px-3 py-2 hover:bg-slate-100 rounded-xl transition-colors">
            <div className="w-9 h-9 bg-indigo-600 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-semibold text-slate-900 hidden md:block">Developer</span>
          </button>
        </div>
      </div>
    </header>
  );
}
