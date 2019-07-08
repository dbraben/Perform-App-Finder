import * as React from 'react';
import styles from './AppFeatured.module.scss';
import { IAppFeaturedProps } from './IAppFeaturedProps';

export class AppFeatured extends React.Component<IAppFeaturedProps, {}> {

  public render(): React.ReactElement<IAppFeaturedProps> {
    return (
      <div className={this.props.showIcons === '0' ? styles.hide : styles.featured}  >
        {this.props.showTitles === '1' ? <h3 className={styles.feat}>{this.props.featuredTitleText || null ? this.props.featuredTitleText : 'Featured Apps'}</h3> : ''}
        <div className={styles.media}>
          <div  className={(this.props.showIcons === '6' || this.props.showIcons === '5' || this.props.showIcons === '4' || this.props.showIcons === '3' || this.props.showIcons === '2' || this.props.showIcons === '1') ? styles.item : styles.hide}>
            <a href={this.props.featuredAppOneUrl} title={this.props.featuredAppOneTitle}>
              <img src={this.props.featuredAppOneImage} className={styles.featuredIcons} alt={this.props.featuredAppOneTitle} title={this.props.featuredAppOneTitle} />
            </a>
          </div>
          <div  className={(this.props.showIcons === '6' || this.props.showIcons === '5' || this.props.showIcons === '4' || this.props.showIcons === '3' || this.props.showIcons === '2') ? styles.item : styles.hide}>
            <a href={this.props.featuredAppTwoUrl} title={this.props.featuredAppTwoTitle}>
              <img src={this.props.featuredAppTwoImage} className={styles.featuredIcons} alt={this.props.featuredAppTwoTitle} title={this.props.featuredAppTwoTitle} />
            </a>
          </div>
          <div  className={(this.props.showIcons === '6' || this.props.showIcons === '5' || this.props.showIcons === '4' || this.props.showIcons === '3') ? styles.item : styles.hide}>
            <a href={this.props.featuredAppThreeUrl} title={this.props.featuredAppThreeTitle}>
              <img src={this.props.featuredAppThreeImage} className={styles.featuredIcons} alt={this.props.featuredAppThreeTitle} title={this.props.featuredAppThreeTitle} />
            </a>
          </div>
          <div  className={(this.props.showIcons === '6' || this.props.showIcons === '5' || this.props.showIcons === '4') ? styles.item : styles.hide}>
            <a href={this.props.featuredAppFourUrl} title={this.props.featuredAppFourTitle}>
              <img src={this.props.featuredAppFourImage} className={styles.featuredIcons} alt={this.props.featuredAppFourTitle} title={this.props.featuredAppFourTitle} />
            </a>
          </div>
          <div  className={(this.props.showIcons === '6' || this.props.showIcons === '5') ? styles.item : styles.hide}>
            <a href={this.props.featuredAppFiveUrl} title={this.props.featuredAppFiveTitle}>
              <img src={this.props.featuredAppFiveImage} className={styles.featuredIcons} alt={this.props.featuredAppFiveTitle} title={this.props.featuredAppFiveTitle} />
              </a>
          </div>
          <div  className={(this.props.showIcons === '6') ? styles.item : styles.hide}>
            <a href={this.props.featuredAppSixUrl} title={this.props.featuredAppSixTitle}>
              <img src={this.props.featuredAppSixImage} className={styles.featuredIcons} alt={this.props.featuredAppSixTitle} title={this.props.featuredAppSixTitle} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}