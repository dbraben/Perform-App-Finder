import * as React from 'react';
import styles from './AppFeatured.module.scss';
import { IAppFeaturedProps } from './IAppFeaturedProps';

export class AppFeatured extends React.Component<IAppFeaturedProps, {}> {

  public render(): React.ReactElement<IAppFeaturedProps> {
    return (
      <div className={this.props.showIcons === '0' ? styles.hide : styles.featured}  >
        <h3 className={styles.feat}>Featured Apps</h3>
        <div className={styles.media}>
          <div  className={(this.props.showIcons === '6' || this.props.showIcons === '5' || this.props.showIcons === '4' || this.props.showIcons === '3' || this.props.showIcons === '2' || this.props.showIcons === '1') ? styles.item : styles.hide}>
            <a href={this.props.featuredAppOneUrl}>
              <img src={this.props.featuredAppOneImage} className={styles.featuredIcons} alt={this.props.featuredAppOneTitle} />
            </a>
          </div>
          <div  className={(this.props.showIcons === '6' || this.props.showIcons === '5' || this.props.showIcons === '4' || this.props.showIcons === '3' || this.props.showIcons === '2') ? styles.item : styles.hide}>
            <a href={this.props.featuredAppTwoUrl}>
              <img src={this.props.featuredAppTwoImage} className={styles.featuredIcons} alt={this.props.featuredAppTwoTitle} />
            </a>
          </div>
          <div  className={(this.props.showIcons === '6' || this.props.showIcons === '5' || this.props.showIcons === '4' || this.props.showIcons === '3') ? styles.item : styles.hide}>
            <a href={this.props.featuredAppThreeUrl}>
              <img src={this.props.featuredAppThreeImage} className={styles.featuredIcons} alt={this.props.featuredAppThreeTitle} />
            </a>
          </div>
          <div  className={(this.props.showIcons === '6' || this.props.showIcons === '5' || this.props.showIcons === '4') ? styles.item : styles.hide}>
            <a href={this.props.featuredAppFourUrl}>
              <img src={this.props.featuredAppFourImage} className={styles.featuredIcons} alt={this.props.featuredAppFourTitle} />
            </a>
          </div>
          <div  className={(this.props.showIcons === '6' || this.props.showIcons === '5') ? styles.item : styles.hide}>
            <a href={this.props.featuredAppFiveUrl}>
              <img src={this.props.featuredAppFiveImage} className={styles.featuredIcons} alt={this.props.featuredAppFiveTitle} />
              </a>
          </div>
          <div  className={(this.props.showIcons === '6') ? styles.item : styles.hide}>
            <a href={this.props.featuredAppSixUrl}>
              <img src={this.props.featuredAppSixImage} className={styles.featuredIcons} alt={this.props.featuredAppSixTitle} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}