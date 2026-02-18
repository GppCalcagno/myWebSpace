export interface Update {
    date: string;
    type: "DEV" | "NOT" | "ME";
    text: string;
}

export const lastUpdatesData: Update[] = [
  { date: "18/02", type: "DEV", text: "Add SEO" },

  { date: "18/02", type: "NOT", text: "Library Update" },  
  { date: "14/02", type: "ME", text: "timeline Pull: trip update" },  
];
