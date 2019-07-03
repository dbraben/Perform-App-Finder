import * as React from 'react';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import styles from './AppDirectory.module.scss';
import {
  Spinner,
  SpinnerSize
} from 'office-ui-fabric-react/lib/Spinner';
import {
  MessageBar,
  MessageBarType
} from 'office-ui-fabric-react/lib/MessageBar';
import { WebPartTitle } from "@pnp/spfx-controls-react/lib/WebPartTitle";
import {
  IAppDirectoryProps,
  IAppDirectoryState,
  IAppSearchResults,
  IAppitem,
  ICell
} from '.';
import { IndexNavigation } from '../IndexNavigation';
import { AppList } from '../AppList';
import { AppPanel } from '../AppPanel';
import * as strings from 'AppDirectoryWebPartStrings';

export class AppDirectory extends React.Component<IAppDirectoryProps, IAppDirectoryState> {
  constructor(props: IAppDirectoryProps) {
    super(props);

    this.state = {
      loading: false,
      errorMessage: null,
      selectedIndex: '______/',
      searchQuery: '',
      app: []
    };
  }

  private _handleIndexSelect = (index: string): void => {
    // switch the current tab to the tab selected in the navigation
    // and reset the search query
    this.setState({
      selectedIndex: index,
      searchQuery: ''
    },
      function () {
        // load information about app matching the selected tab
        this._loadAppInfo(index, null);
      });

  }

  private _handleSearch = (searchQuery: string): void => {
    // activate the Search tab in the navigation and set the
    // specified text as the current search query
    this.setState({
      selectedIndex: 'Search',
      searchQuery: searchQuery
    },
      function () {
        // load information about app matching the specified search query
        this._loadAppInfo(null, searchQuery);
      });

  }

  private _handleSearchClear = (): void => {
    // activate the A tab in the navigation and clear the previous search query
    this.setState({
      selectedIndex: '______/',
      searchQuery: ''
    },
      function () {
        // load information about app whose last name begins with A
        this._loadAppInfo('______/', null);
      });
  }

  /**
   * Loads information about app using SharePoint Search
   * @param index Selected tab in the index navigation or 'Search', if the user is searching
   * @param searchQuery Current search query or empty string if not searching
   */
  private _loadAppInfo(index: string, searchQuery: string): void {
    // update the UI notifying the user that the component will now load its data
    // clear any previously set error message and retrieved list of app
    this.setState({
      loading: true,
      errorMessage: null,
      app: []
    });

    const headers: HeadersInit = new Headers();
    // suppress metadata to minimize the amount of data loaded from SharePoint
    headers.append("accept", "application/json;odata.metadata=none");

    // if no search query has been specified, retrieve app whose last name begins with the
    // specified letter. if a search query has been specified, escape any ' (single quotes)
    // by replacing them with two '' (single quotes). Without this, the search query would fail
    const query: string = searchQuery === null ? `Title:${index}*` : searchQuery.replace(/'/g, `''`);

    // retrieve information about app using SharePoint App Search
    // sort results ascending by the last name%7B741dc85c-c127-4725-921c-cfb98d159773%7D
    this.props.spHttpClient
      .get(`${this.props.webUrl}/_api/search/query?querytext='((Title:${query}+AND+ListId:6cc1c555-8aba-4d82-96be-1888165a73fa)+OR+(RefinableString113:${query}+AND+ListId:6cc1c555-8aba-4d82-96be-1888165a73fa)+OR+(RefinableString101:${query}+AND+ListId:6cc1c555-8aba-4d82-96be-1888165a73fa)+OR+(RefinableString102:${query}+AND+ListId:6cc1c555-8aba-4d82-96be-1888165a73fa))'&selectproperties='Title,RefinableString101,RefinableString102,RefinableString110,RefinableString112,RefinableString113'&rowlimit=500'`, SPHttpClient.configurations.v1, {
     // .get(`${this.props.webUrl}/_api/search/query?querytext='(Title:${query}+AND+ListId:418745E4-71BA-4937-906A-4A44C9AF599F)'&selectproperties='Title,Description,RefinableString101,RefinableString102,RefinableString106,RefinableString110,RefinableString105'&rowlimit=500'`, SPHttpClient.configurations.v1, {
        headers: headers
      })
      .then((res: SPHttpClientResponse): Promise<IAppSearchResults> => {
        return res.json();
      })
      .then((res: IAppSearchResults): void => {
        if (res.error) {
          // There was an error loading information about app.
          // Notify the user that loading data is finished and return the
          // error message that occurred
          this.setState({
            loading: false,
            errorMessage: res.error.message
          });
          return;
        }


       console.log(res.PrimaryQueryResult.RelevantResults.Table.Rows);
       // convert the SharePoint App Search results to an array of app
       // filter out specific domains i.e. dazn, hotmail etc based upon the email value
       
       
      let appListRes = res.PrimaryQueryResult.RelevantResults.Table.Rows;
       if (appListRes.length === 0) {
        // No results were found. Notify the user that loading data is finished
        this.setState({
          loading: false
        });
        return;
      }

       let app: IAppitem[] = appListRes.map(r => {
             return {
               title: this._getValueFromSearchResult('Title', r.Cells),
               manufacturer: this._getValueFromSearchResult('RefinableString102', r.Cells),
               strapline: this._getValueFromSearchResult('RefinableString101', r.Cells),
               link: this._getValueFromSearchResult('RefinableString110', r.Cells),
               appIconUrl: this._getValueFromSearchResult('RefinableString112', r.Cells),
          };  
        });

        const selectedIndex = this.state.selectedIndex;

        if (this.state.searchQuery === '') {
          // An Index is used to search app.
          //Reduce the app collection if the first letter of the lastName of the appitem is not equal to the selected index
          app = app.reduce((result: IAppitem[], appitem: IAppitem) => {
            if (appitem.title.indexOf(selectedIndex) === 0) {
              result.push(appitem);
            }
            return result;
          }, []);
        }

        if (app.length > 0) {
          // notify the user that loading the data is finished and return the loaded information
          this.setState({
            loading: false,
            app: app
          });
        }
        else {
          // App collection could be reduced to zero, so no results
          this.setState({
            loading: false
          });
          return;
        }
      }, (error: any): void => {
        // An error has occurred while loading the data. Notify the user
        // that loading data is finished and return the error message.
        this.setState({
          loading: false,
          errorMessage: error
        });
      })
      .catch((error: any): void => {
        // An exception has occurred while loading the data. Notify the user
        // that loading data is finished and return the exception.
        this.setState({
          loading: false,
          errorMessage: error
        });
      });
  }

  /**
   * Retrieves the value of the particular managed property for the current search result.
   * If the property is not found, returns an empty string.
   * @param key Name of the managed property to retrieve from the search result
   * @param cells The array of cells for the current search result
   */
  private _getValueFromSearchResult(key: string, cells: ICell[]): string {
    for (let i: number = 0; i < cells.length; i++) {
      if (cells[i].Key === key) {
        return cells[i].Value;
      }
    }

    return '';
  }

  public componentDidMount(): void {
    // load information about app after the component has been
    // initiated on the page
    this._loadAppInfo(this.state.selectedIndex, null);
  }

  public render(): React.ReactElement<IAppDirectoryProps> {
    const { loading, errorMessage, selectedIndex, searchQuery, app } = this.state;

    return (
      <div className={styles.appDirectory}>
        {!loading &&
          errorMessage &&
          // if the component is not loading data anymore and an error message
          // has been returned, display the error message to the user
          <MessageBar
            messageBarType={MessageBarType.error}
            isMultiline={false}>{strings.ErrorLabel}: {errorMessage}</MessageBar>
        }
        <WebPartTitle
          displayMode={this.props.displayMode}
          title={this.props.title}
          updateProperty={this.props.onTitleUpdate} />
        <IndexNavigation
          selectedIndex={selectedIndex}
          searchQuery={searchQuery}
          onIndexSelect={this._handleIndexSelect}
          onSearch={this._handleSearch}
          onSearchClear={this._handleSearchClear}
          locale={this.props.locale}
          featuredAppOneTitle={this.props.featuredAppOneTitle}
          featuredAppOneImage={this.props.featuredAppOneImage}
          featuredAppOneUrl={this.props.featuredAppOneUrl}
          featuredAppTwoTitle={this.props.featuredAppTwoTitle}
          featuredAppTwoImage={this.props.featuredAppTwoImage}
          featuredAppTwoUrl={this.props.featuredAppTwoUrl}
          featuredAppThreeTitle={this.props.featuredAppThreeTitle}
          featuredAppThreeImage={this.props.featuredAppThreeImage}
          featuredAppThreeUrl={this.props.featuredAppThreeUrl}
          featuredAppFourTitle={this.props.featuredAppFourTitle}
          featuredAppFourImage={this.props.featuredAppFourImage}
          featuredAppFourUrl={this.props.featuredAppFourUrl}
          featuredAppFiveTitle={this.props.featuredAppFiveTitle}
          featuredAppFiveImage={this.props.featuredAppFiveImage}
          featuredAppFiveUrl={this.props.featuredAppFiveUrl}
          featuredAppSixTitle={this.props.featuredAppSixTitle}
          featuredAppSixImage={this.props.featuredAppSixImage}
          featuredAppSixUrl={this.props.featuredAppSixUrl}
          showIcons={this.props.showIcons}
        />
        {loading &&
          // if the component is loading its data, show the spinner
          <Spinner size={SpinnerSize.large} label={strings.LoadingSpinnerLabel} />
        }
        {!loading &&
          !errorMessage &&
          // if the component is not loading data anymore and no errors have occurred
          // render the list of retrieved app
          <div className={styles.container}>
            <div className={styles.item}>
            <AppList
              selectedIndex={selectedIndex}
              hasSearchQuery={searchQuery !== ''}
              app={app} 
            />
            </div>
            <div className={styles.hideMobile}>
            <AppPanel 
              content={this.props.PanelContent}
              searchQuery={searchQuery}
            />
            </div>
          </div>
        }
      </div>
    );
  }
}