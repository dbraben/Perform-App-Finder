import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneChoiceGroup,
  IPropertyPaneChoiceGroupOption
} from '@microsoft/sp-webpart-base';

import * as strings from 'AppDirectoryWebPartStrings';
import { AppDirectory, IAppDirectoryProps } from './components/AppDirectory';

export interface IAppDirectoryWebPartProps {
  title: string;
  PanelTitle?: string;
  PanelContent?: any;
  featuredAppOneTitle?: string;
  featuredAppOneImage?: string;
  featuredAppOneUrl?: string;
  featuredAppTwoTitle?: string;
  featuredAppTwoImage?: string;
  featuredAppTwoUrl?: string;
  featuredAppThreeTitle?: string;
  featuredAppThreeImage?: string;
  featuredAppThreeUrl?: string;
  featuredAppFourTitle?: string;
  featuredAppFourImage?: string;
  featuredAppFourUrl?: string;
  featuredAppFiveTitle?: string;
  featuredAppFiveImage?: string;
  featuredAppFiveUrl?: string;
  featuredAppSixTitle?: string;
  featuredAppSixImage?: string;
  featuredAppSixUrl?: string;
  showIcons?: string;
}



export default class AppDirectoryWebPart extends BaseClientSideWebPart<IAppDirectoryWebPartProps> {
  public render(): void {
    const element: React.ReactElement<IAppDirectoryProps> = React.createElement(
      AppDirectory,
      {
        webUrl: this.context.pageContext.web.absoluteUrl,
        spHttpClient: this.context.spHttpClient,
        title: this.properties.title,
        displayMode: this.displayMode,
        locale: this.getLocaleId(),
        onTitleUpdate: (newTitle: string) => {
          // after updating the web part title in the component
          // persist it in web part properties
          this.properties.title = newTitle;
        },
        PanelTitle: this.properties.PanelTitle,
        PanelContent: this.properties.PanelContent,
        featuredAppOneTitle: this.properties.featuredAppOneTitle,
        featuredAppOneImage: this.properties.featuredAppOneImage,
        featuredAppOneUrl: this.properties.featuredAppOneUrl,
        featuredAppTwoTitle: this.properties.featuredAppTwoTitle,
        featuredAppTwoImage: this.properties.featuredAppTwoImage,
        featuredAppTwoUrl: this.properties.featuredAppTwoUrl,
        featuredAppThreeTitle: this.properties.featuredAppThreeTitle,
        featuredAppThreeImage: this.properties.featuredAppThreeImage,
        featuredAppThreeUrl: this.properties.featuredAppThreeUrl,
        featuredAppFourTitle: this.properties.featuredAppFourTitle,
        featuredAppFourImage: this.properties.featuredAppFourImage,
        featuredAppFourUrl: this.properties.featuredAppFourUrl,
        featuredAppFiveTitle: this.properties.featuredAppFiveTitle,
        featuredAppFiveImage: this.properties.featuredAppFiveImage,
        featuredAppFiveUrl: this.properties.featuredAppFiveUrl,
        featuredAppSixTitle: this.properties.featuredAppSixTitle,
        featuredAppSixImage: this.properties.featuredAppSixImage,
        featuredAppSixUrl: this.properties.featuredAppSixUrl,
        showIcons: this.properties.showIcons,
      }
    );

    console.log(this.properties.PanelContent);
    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
  protected getLocaleId() : string {
    return this.context.pageContext.cultureInfo.currentUICultureName;
  }
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [  
        {
          header: {
            description: 'Information Panel'
          },
          groups: [
            {
              groupName: 'Information',
              groupFields: [
                PropertyPaneTextField('PanelTitle', {
                  label: 'Info Panel Title'
                }),
                PropertyPaneTextField('PanelContent', {
                  label: 'Info Panel Content (HTML)',
                  multiline: true,
                  rows: 15
                }),
              ]
            }
          ]
        },  
        {
          header: {
            description: 'Featured Apps'
          },
          groups: [
            {
              groupName: 'App 1 Details',
              groupFields: [
                PropertyPaneTextField('featuredAppOneTitle', {
                  label: 'Enter Title (alt tag)'
                }),
                PropertyPaneTextField('featuredAppOneImage', {
                  label: 'Enter URL of image icon (70px X 70px)'
                }),
                PropertyPaneTextField('featuredAppOneUrl', {
                  label: 'Enter URL of link'
                }),
              ]
            }
          ]
        },  
        {
          header: {
            description: 'Featured Apps'
          },
          groups: [
            {
              groupName: 'App 2 Details',
              groupFields: [
                PropertyPaneTextField('featuredAppTwoTitle', {
                  label: 'Enter Title (alt tag)'
                }),
                PropertyPaneTextField('featuredAppTwoImage', {
                  label: 'Enter URL of image icon (70px X 70px)'
                }),
                PropertyPaneTextField('featuredAppTwoUrl', {
                  label: 'Enter URL of link'
                }),
              ]
            }
          ]
        },  
        {
          header: {
            description: 'Featured Apps'
          },
          groups: [
            {
              groupName: 'App 3 Details',
              groupFields: [
                PropertyPaneTextField('featuredAppThreeTitle', {
                  label: 'Enter Title (alt tag)'
                }),
                PropertyPaneTextField('featuredAppThreeImage', {
                  label: 'Enter URL of image icon (70px X 70px)'
                }),
                PropertyPaneTextField('featuredAppThreeUrl', {
                  label: 'Enter URL of link'
                }),
              ]
            }
          ]
        },  
        {
          header: {
            description: 'Featured Apps'
          },
          groups: [
            {
              groupName: 'App 4 Details',
              groupFields: [
                PropertyPaneTextField('featuredAppFourTitle', {
                  label: 'Enter Title (alt tag)'
                }),
                PropertyPaneTextField('featuredAppFourImage', {
                  label: 'Enter URL of image icon (70px X 70px)'
                }),
                PropertyPaneTextField('featuredAppFourUrl', {
                  label: 'Enter URL of link'
                }),
              ]
            }
          ]
        },  
        {
          header: {
            description: 'Featured Apps'
          },
          groups: [
            {
              groupName: 'App 5 Details',
              groupFields: [
                PropertyPaneTextField('featuredAppFiveTitle', {
                  label: 'Enter Title (alt tag)'
                }),
                PropertyPaneTextField('featuredAppFiveImage', {
                  label: 'Enter URL of image icon (70px X 70px)'
                }),
                PropertyPaneTextField('featuredAppFiveUrl', {
                  label: 'Enter URL of link'
                }),
              ]
            }
          ]
        },  
        {
          header: {
            description: 'Featured Apps'
          },
          groups: [
            {
              groupName: 'App 6 Details',
              groupFields: [
                PropertyPaneTextField('featuredAppSixTitle', {
                  label: 'Enter Title (alt tag)'
                }),
                PropertyPaneTextField('featuredAppSixImage', {
                  label: 'Enter URL of image icon (70px X 70px)'
                }),
                PropertyPaneTextField('featuredAppSixUrl', {
                  label: 'Enter URL of link'
                }),
              ]
            }
          ]
        },
        {
          header: {
            description: 'Show Icons'
          },
          groups: [
            {
              groupName: 'Icon display',
              groupFields: [
                PropertyPaneChoiceGroup('showIcons', { 
                  label: "Number of icons", 
                  options: [ 
                    { key: '0', text: '0' }, 
                    { key: '1', text: '1' }, 
                    { key: '2', text: '2' }, 
                    { key: '3', text: '3' }, 
                    { key: '4', text: '4' },
                    { key: '5', text: '5' }, 
                    { key: '6', text: '6' },
                  ],
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}