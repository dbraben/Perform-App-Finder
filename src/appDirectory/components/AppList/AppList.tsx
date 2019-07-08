import * as React from 'react';
import { IAppListProps } from '.';
import styles from './AppList.module.scss';
import { IAppListState } from './IAppListState';

export class AppList extends React.Component<IAppListProps, IAppListState> {
  public wrapperRef;
  constructor(props: IAppListProps) {
    super(props);

    this.state = {
      showCallOut: false,
      calloutElement: null,
      appitem: null,
      show: true
    };
    //this._onPersonaClicked = this._onPersonaClicked.bind(this);
    this._onCalloutDismiss = this._onCalloutDismiss.bind(this);
    // this.wrapperRef= React.createRef();
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  public componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  public componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  public setWrapperRef(node) {
    this.wrapperRef = node;
  }

  /**
   * Alert if clicked on outside of element
   */
  public handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target) && this.props.app.length > 0) {
      this.setState({
        show: false
      });
    }
  }

  public render(): React.ReactElement<IAppListProps> {
    return (
      <div  ref={this.setWrapperRef} id='drop' className={(this.state.show === true ? styles.media : styles.media_hide)}>
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
              <div className={styles.list_groups}>
                <div className={styles.list_items}>
                  <a href={p.link} title={p.title}>
                    <div className={styles.mediabody}>
                      <img src={p.appIconUrl} className={styles.producticon} alt={p.title} title={p.title} />
                    </div>
                    <div className={styles.mediabody}>
                      <h3 className={styles.app}>{p.title}, {p.manufacturer}</h3>
                        {p.strapline}
                    </div>
                  </a>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }

  private _onCalloutDismiss = (event) => {
    this.setState({
      showCallOut: false,
    });
  }
}
