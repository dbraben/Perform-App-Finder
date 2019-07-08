/**
 * Properties for the index navigation component
 */
export interface IIndexNavigationProps {
  /**
   * Name of the currently selected tab, eg. 'A'
   */
  selectedIndex: string;
  /**
   * Current search query. Empty, if not searching.
   */
  searchQuery: string;
    /**
   * Current locale
   */
  locale: string;
  /**
   * Event handler for selecting a tab
   */
  onIndexSelect: (index: string) => void;
  /**
   * Event handler for issuing a search query
   */
  onSearch: (searchQuery: string) => void;
  /**
   * Event handler for clearing the search query
   */
  onSearchClear: () => void;
  featuredAppOneTitle?: string;
  featuredAppOneImage?: string;
  featuredAppOneUrl?: string;
  featuredAppTwoTitle?: string;
  featuredAppTwoImage?: string;
  featuredAppTwoUrl?: string;
  featuredAppThreeTitle?: string;
  featuredAppThreeImage?: string;
  featuredAppThreeUrl?: string;
  featuredAppFourTitle?: string;
  featuredAppFourImage?: string;
  featuredAppFourUrl?: string;
  featuredAppFiveTitle?: string;
  featuredAppFiveImage?: string;
  featuredAppFiveUrl?: string;
  featuredAppSixTitle?: string;
  featuredAppSixImage?: string;
  featuredAppSixUrl?: string;
  showIcons?: string;
  showTitles?: string;
  featuredTitleText?: string;
  searchTitleText?: string;
}
