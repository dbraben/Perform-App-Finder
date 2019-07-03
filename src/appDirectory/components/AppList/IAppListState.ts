import { IAppitem } from "../AppDirectory";

export interface IAppListState {
  showCallOut: boolean;
  calloutElement: number;
  appitem: IAppitem;
}