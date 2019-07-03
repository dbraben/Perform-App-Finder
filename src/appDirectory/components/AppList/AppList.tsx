import * as React from 'react';
import { IAppListProps } from '.';
import {
  Persona,
  PersonaSize
} from 'office-ui-fabric-react/lib/Persona';
import * as strings from 'AppDirectoryWebPartStrings';
import styles from './AppList.module.scss';
import { Callout, DirectionalHint } from 'office-ui-fabric-react/lib/Callout';
import { IAppListState } from './IAppListState';
import { AppCallout } from '../AppCallout';

export class AppList extends React.Component<IAppListProps, IAppListState> {
  constructor(props: IAppListProps) {
    super(props);

    this.state = {
      showCallOut: false,
      calloutElement: null,
      appitem: null
    };

   // this._onPersonaClicked = this._onPersonaClicked.bind(this);
    this._onCalloutDismiss = this._onCalloutDismiss.bind(this);
  }

  public render(): React.ReactElement<IAppListProps> {
    return (
      <div>
        {this.props.app.length === 0 &&
          (this.props.selectedIndex !== 'Search' ||
            (this.props.selectedIndex === 'Search' &&
              this.props.hasSearchQuery)) &&
              // Show the 'No app found' message if no app have been retrieved
              // and the user either selected a letter in the navigation or issued
              // a search query (but not when navigated to the Search tab without
              // providing a query yet)
          <div className='ms-textAlignCenter'></div>}
        {this.props.app.length > 0 &&
          // for each retrieved appitem, create a appitema card with the retrieved
          // information
          this.props.app.map((p,i) => {
            return (

              <div className={styles.media}>
               <a href={p.link} title={p.title}>
                <div className={styles.mediabody}>
                  <img src={p.appIconUrl} className={styles.producticon} />
                </div>
                <div className={styles.mediabody}>
                  <h3 className={styles.app}>{p.title}, {p.manufacturer}</h3>
                    {p.strapline}
                </div>
               </a>
              </div>
            );
          })
        }
      </div>
    );
  }

  private _onPersonasClicked = (index, appitem) => event => {
    this.setState({
      showCallOut: !this.state.showCallOut,
      calloutElement: index,
      appitem: appitem
    });
  }

  private _onCalloutDismiss = (event) => {
    this.setState({
      showCallOut: false,
    });
  }
}
