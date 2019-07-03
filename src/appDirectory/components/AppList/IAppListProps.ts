import { IAppitem } from "../AppDirectory";

/**
 * Properties for the app list component
 */
export interface IAppListProps {
  /**
   * Array of app matching the selected tab or the current search query
   */
  app: IAppitem[];
  /**
   * Currently selected tab, eg. 'A'
   */
  selectedIndex: string;
  /**
   * True if the user is searching for app
   */
  hasSearchQuery: boolean;
}