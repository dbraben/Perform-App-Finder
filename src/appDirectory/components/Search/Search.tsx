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
         {this.props.showTitles === '1' ? <h3>{this.props.searchTitleText || null ? this.props.searchTitleText : 'Search Apps'}</h3> : ''}
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
