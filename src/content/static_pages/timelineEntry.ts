export type MilestoneType = 'feat' | 'edu' | 'fix' | 'init' | 'default';

export interface Milestone {
  id: string;
  date: string; // Formato YYYY-MM-DD
  title: string;
  description: string;
  class: MilestoneType;
}

// Nuova interfaccia per il gruppo annuale
export interface TimelineGroup {
  year: number;
  milestones: Milestone[];
}

// I dati sono già raggruppati manualmente
export const timelineData: TimelineGroup[] = [
  {
    year: 2026,
    milestones: [
      {
        id: 'a344ebf',
        date: '2026-02-07',
        title: 'Senior Data Scientist',
        description: 'Leading the AI automation team. Optimizing neural networks efficiency.',
        class: 'feat'
      }
    ]
  },
  {
    year: 2025,
    milestones: [
      {
        id: 'c430e95',
        date: '2025-07-20',
        title: 'Master Degree in CS',
        description: 'Graduated with honors. Thesis on Reinforcement Learning.',
        class: 'edu'
      }
    ]
  },
  {
    year: 2024,
    milestones: [
      {
        id: '3cfc9d6',
        date: '2024-03-15',
        title: 'Research Assistant',
        description: 'Collaborated on robotic arm manipulation algorithms.',
        class: 'fix'
      }
    ]
  },
  {
    year: 2023,
    milestones: [
      {
        id: '646748a',
        date: '2023-10-01',
        title: 'Freelance Full Stack',
        description: 'Built automation tools for logistics using React & Node.',
        class: 'feat'
      },
      {
        id: '9988abc',
        date: '2023-05-12',
        title: 'Docker Certification',
        description: 'Achieved Docker Associate certification.',
        class: 'edu'
      }
    ]
  },
  {
    year: 2020,
    milestones: [
      {
        id: '0e22f62',
        date: '2020-01-15',
        title: 'Hello World',
        description: 'First Python script. The journey begins.',
        class: 'init'
      }
    ]
  }
];
