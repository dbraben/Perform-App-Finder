import * as React from 'react';
import styles from './AppPanel.module.scss';
import { IAppPanelProps } from './IAppPanel';

export class AppPanel extends React.Component<IAppPanelProps, {searchQuery: string}> {
  public render(): React.ReactElement<IAppPanelProps> {
    return (
      <div>
        { this.props.searchQuery.length >= 3 ?
        <div className={styles.panel}>
            <div className={styles.mediabody} dangerouslySetInnerHTML={{ __html: this.props.content}} />
        </div>: ''}
      </div>
    );
  }
}