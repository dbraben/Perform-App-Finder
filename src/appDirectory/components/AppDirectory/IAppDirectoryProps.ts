import { SPHttpClient } from "@microsoft/sp-http";
import { DisplayMode } from "@microsoft/sp-core-library";

/**
 * Properties for the app directory component
 */
export interface IAppDirectoryProps {
  /**
   * Absolute URL of the current site
   */
  webUrl: string;
  /**
   * Instance of the SPHttpClient. Used to retrieve information about
   * app.
   */
  spHttpClient: SPHttpClient;
  /**
   * Web part title to be displayed in the web part
   */
  title: string;
  /**
   * Current page display mode. Used to determine if the user should
   * be able to edit the page title or not.
   */
  displayMode: DisplayMode;
   /**
   * Current locale
   */
  locale: string;
  /**
   * Event handler for changing the web part title
   */
  onTitleUpdate: (newTitle: string) => void;
    /**
   * Panel title. Property passed to the AppPanel display
   */
  PanelTitle: string;
  PanelContent: any;
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
}
