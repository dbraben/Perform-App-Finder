import * as React from 'react';
import styles from './Search.module.scss';
import { ISearchProps } from '.';
import {
  SearchBox
} from 'office-ui-fabric-react/lib/SearchBox';
import * as strings from 'AppDirectoryWebPartStrings';


export class Search extends React.Component<ISearchProps, {}> {
  private _handleSearch = (searchQuery: string): void => {
    if(searchQuery.length >= 3){
      this.props.onSearch(searchQuery);
    }
  }

  private _handleClear = (): void => {
    this.props.onClear();
  }

  public render(): React.ReactElement<ISearchProps> {
    return (
      <div className={styles.search}>
          <h3>Search Apps</h3>
          <SearchBox
            placeholder={strings.SearchBoxPlaceholder}
            onChange={this._handleSearch}
            onClear={this._handleClear}
            value={this.props.searchQuery}
            className={styles.searchBox}
          />
      </div>
    );
  }
}
