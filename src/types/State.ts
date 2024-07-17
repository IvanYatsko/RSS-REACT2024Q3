export interface IState {
  hasError: boolean;
}
export type StateType = {
  count: number;
  searchValue: string;
};

export type ActionType = {
  type: string;
  payload?: string | number;
};
