import * as React from 'react';
import { IAppCalloutProps, IAppCalloutState } from '.';
import styles from './AppCallout.module.scss';
import * as strings from 'AppDirectoryWebPartStrings';

export class AppCallout extends React.Component<IAppCalloutProps, IAppCalloutState> {
  constructor(props: IAppCalloutProps) {
    super(props);

    this.state = {
    };
  }

  public render(): React.ReactElement<IAppCalloutProps> {
    return (
      <div className={styles.calloutCard}>
        <h1 className={"ms-font-xl"}>
        </h1>
      </div>
    );
  }

  private _onCopyClicked = (elementName: string) => event => {
    let copyText = document.getElementById(elementName);
    var range = document.createRange();
    range.selectNode(copyText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    event.target.className = "ms-Icon ms-Icon--StatusCircleCheckmark";
  }
}
