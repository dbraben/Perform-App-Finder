import * as React from 'react';
import styles from './IndexNavigation.module.scss';
import { IIndexNavigationProps } from '.';
import { Search } from '../Search';
import { AppFeatured } from '../AppFeatured';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';

export class IndexNavigation extends React.Component<IIndexNavigationProps, {}> {
  /**
   * Event handler for selecting a tab in the navigation
   */
  private _handleIndexSelect = (item?: PivotItem, ev?: React.MouseEvent<HTMLElement>): void => {
    this.props.onIndexSelect(item.props.linkText);
  }

  public shouldComponentUpdate(nextProps: IIndexNavigationProps, nextState: {}, nextContext: any): boolean {
    // Component should update only if the selected tab has changed.
    // This check helps to avoid unnecessary renders
    return this.props.selectedIndex !== nextProps.selectedIndex;
  }

  public render(): React.ReactElement<IIndexNavigationProps> {


    return (
      <div className={styles.topMenu}>
        <Search
        searchQuery={this.props.searchQuery}
        onSearch={this.props.onSearch}
        onClear={this.props.onSearchClear} />
        <AppFeatured 
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
      </div>
    );
  }
}
