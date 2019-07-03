import { IAppitem } from ".";

/**
 * State for the app directory component
 */
export interface IAppDirectoryState {
    /**
     * True if the component is loading its data, false otherwise
     */
    loading: boolean;
    /**
     * Contains the error message that occurred while loading the data.
     * If no error message occurred, null.
     */
    errorMessage: string;
    /**
     * Currently selected tab, eg. 'A'
     */
    selectedIndex: string;
    /**
     * Current search query. Empty string if no search query has been issued
     */
    searchQuery: string;
    /**
     * List of app matching either the currently selected tab or the
     * search query. Empty array if no matching app found.
     */
    app: IAppitem[];
}