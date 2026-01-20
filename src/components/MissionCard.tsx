import React from 'react';
import { 
  Clock, 
  Heart, 
  BookOpen, 
  Coffee, 
  GraduationCap, 
  Code,
  Utensils,
  Dumbbell,
  Users,
  Moon,
  Brain,
  Lightbulb,
  Briefcase,
  GamepadIcon,
  Languages,
  Circle,
  CheckCircle2,
  PlayCircle
} from 'lucide-react';
import type { Mission } from '../data/plannerData';

interface MissionCardProps {
  mission: Mission;
  index: number;
}

const getPriority = (activity: string): 'high' | 'medium' | 'low' => {
  const lowerActivity = activity.toLowerCase();
  if (lowerActivity.includes('prayer') || lowerActivity.includes('exam') || lowerActivity.includes('node.js learning')) {
    return 'high';
  }
  if (lowerActivity.includes('practice') || lowerActivity.includes('uml') || lowerActivity.includes('development')) {
    return 'medium';
  }
  return 'low';
};

const getStatus = (time: string): 'pending' | 'in-progress' | 'completed' => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const currentTotalMinutes = currentHour * 60 + currentMinute;
  
  const [startTime] = time.split('-');
  const [startHour, startMinute] = startTime.split(':').map(Number);
  const startTotalMinutes = startHour * 60 + startMinute;
  
  if (currentTotalMinutes > startTotalMinutes + 30) {
    return 'completed';
  } else if (currentTotalMinutes >= startTotalMinutes) {
    return 'in-progress';
  }
  return 'pending';
};

const getIcon = (activity: string) => {
  const lowerActivity = activity.toLowerCase();
  
  if (lowerActivity.includes('prayer')) return Heart;
  if (lowerActivity.includes('english')) return Languages;
  if (lowerActivity.includes('exam')) return GraduationCap;
  if (lowerActivity.includes('node.js learning')) return BookOpen;
  if (lowerActivity.includes('node.js practice')) return Code;
  if (lowerActivity.includes('uml') || lowerActivity.includes('system design')) return Briefcase;
  if (lowerActivity.includes('development') || lowerActivity.includes('logic')) return Brain;
  if (lowerActivity.includes('review')) return Lightbulb;
  if (lowerActivity.includes('breakfast') || lowerActivity.includes('lunch') || lowerActivity.includes('dinner')) return Utensils;
  if (lowerActivity.includes('break') || lowerActivity.includes('rest')) return Coffee;
  if (lowerActivity.includes('gym') || lowerActivity.includes('stretching')) return Dumbbell;
  if (lowerActivity.includes('family')) return Users;
  if (lowerActivity.includes('relax') || lowerActivity.includes('fun')) return GamepadIcon;
  if (lowerActivity.includes('reflection') || lowerActivity.includes('calm')) return Moon;
  
  return Clock;
};

export function MissionCard({ mission, index }: MissionCardProps) {
  const priority = getPriority(mission.activity);
  const status = getStatus(mission.time);
  const Icon = getIcon(mission.activity);

  const statusConfig = {
    pending: {
      bg: 'bg-slate-50',
      border: 'border-slate-300',
      text: 'text-slate-700',
      icon: Circle
    },
    'in-progress': {
      bg: 'bg-blue-50',
      border: 'border-blue-400',
      text: 'text-blue-700',
      icon: PlayCircle
    },
    completed: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-400',
      text: 'text-emerald-700',
      icon: CheckCircle2
    }
  };

  const priorityColors = {
    high: 'text-indigo-600',
    medium: 'text-slate-600',
    low: 'text-slate-500'
  };

  const config = statusConfig[status];
  const StatusIcon = config.icon;

  return (
    <div 
      className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 active:scale-[0.99] transition-all duration-200 touch-manipulation"
      style={{ 
        animation: `fadeIn 0.4s ease-out ${index * 0.05}s both`
      }}
    >
      <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2 sm:gap-3">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
          <div className="p-2 bg-indigo-50 rounded-lg border border-indigo-100 flex-shrink-0">
            <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${priorityColors[priority]}`} />
          </div>
          
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-600 min-w-0">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="font-medium whitespace-nowrap">{mission.time}</span>
          </div>
        </div>

        <div className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-full ${config.bg} border ${config.border} flex-shrink-0`}>
          <StatusIcon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${config.text}`} />
          <span className={`text-xs font-semibold ${config.text} uppercase hidden sm:inline`}>
            {status.replace('-', ' ')}
          </span>
        </div>
      </div>

      <div className="space-y-2 sm:space-y-3">
        <h3 className="text-sm sm:text-base font-semibold text-slate-900 leading-snug break-words">
          {mission.activity}
        </h3>
        
        {mission.focus && (
          <div className="p-2.5 sm:p-3 rounded-lg bg-indigo-50 border border-indigo-100">
            <div className="text-xs font-semibold text-indigo-700 uppercase mb-1">Focus</div>
            <p className="text-xs sm:text-sm text-slate-700 break-words">{mission.focus}</p>
          </div>
        )}
        
        {mission.details && (
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed break-words">
            {mission.details}
          </p>
        )}
      </div>

      <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
        <span className={`text-xs font-semibold ${priorityColors[priority]} uppercase tracking-wide truncate`}>
          {priority} Priority
        </span>
        <div className="flex gap-1 flex-shrink-0">
          {[...Array(priority === 'high' ? 3 : priority === 'medium' ? 2 : 1)].map((_, i) => (
            <div key={i} className={`w-1.5 h-4 sm:h-5 rounded-full ${priority === 'high' ? 'bg-indigo-600' : 'bg-slate-400'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
}
