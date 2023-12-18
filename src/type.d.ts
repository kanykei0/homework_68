export interface taskProps {
  task: string;
  status: boolean;
}

export interface tasksList {
  [id: string]: taskProps;
}
