export type MilestoneType = 'Per' | 'Dev' | 'Rnd' | 'init' ;



export interface Milestone {
  date: Date;
  title: string;
  description: string;
  class: MilestoneType;
}

export interface TimelineGroup {
  year: number;
  milestones: Milestone[];
}

// Mappatura colori per le classi
export const MILESTONE_COLORS: Record<MilestoneType, { text: string }> = {
  Per:   { text: 'text-blue-600' },
  Dev:    { text: 'text-purple-600' },
  Rnd:    { text: 'text-orange-600' },
  init:   { text: 'text-emerald-600' },
};

export const timelineData: TimelineGroup[] = [
  {
    year: 2026,
    milestones: [
      {
        date: new Date('2026-02-07'),
        title: 'Git Init',
        description: 'First Deploy of this webSpace and activity tracking.',
        class: 'init'
      }
    ]
  },

];
