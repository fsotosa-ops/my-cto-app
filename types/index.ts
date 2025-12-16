// types/index.ts
export interface TechTask {
    id: string;
    source: 'github' | 'linear' | 'manual';
    title: string;
    status: 'done' | 'pending';
    raw_data: any;
  }
  
  export interface ImpactMilestone {
    id: string;
    title: string;
    category: 'impact' | 'security' | 'foundation';
    status: 'connecting' | 'completed';
    ai_summary: string | null;
  }