import * as React from 'react';
// import styles from './Panel.module.scss';
import { IPanelProps } from './IPanelProps';
import { Panel } from 'office-ui-fabric-react';



export interface PanelProps {
}

export interface PanelState {
  showpanel: boolean;
}

export default class PanelOnButtonClick extends React.Component<PanelProps, PanelState> {

  constructor(props: PanelProps | Readonly<PanelProps>) {
    super(props);
    this.state = {
      showpanel: false,
    };
  }


  public handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const targetElement = event.target as HTMLButtonElement;
    if (targetElement.id === "asiamyappsopenpanel") {
      this.openPanel();
    }
  }
  private openPanel(): void {
    this.setState({
      showpanel: true,
    });
  }

  private closePanel(): void {
    this.setState({
      showpanel: false
    });
  }

  public render(): React.ReactElement<IPanelProps> {
    // const {
    //   description,
    //   isDarkTheme,
    //   environmentMessage,
    //   hasTeamsContext,
    //   userDisplayName
    // } = this.props;

    return (
      <div>
        <button id="asiamyappsopenpanel" onClick={this.handleClick}>ClickMe!</button>
        {this.state.showpanel &&
          <Panel isOpen={this.state.showpanel}
            onDismiss={() => this.closePanel()}
            closeButtonAriaLabel="Close"
            headerText="Panel Title"
            isLightDismiss>
              <p>Your content</p>
          </Panel>
        }

      </div>
      // <section className={`${styles.panel} ${hasTeamsContext ? styles.teams : ''}`}>
      //   <div className={styles.welcome}>
      //     <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
      //     <h2>Well done, {escape(userDisplayName)}!</h2>
      //     <div>{environmentMessage}</div>
      //     <div>Web part property value: <strong>{escape(description)}</strong></div>
      //   </div>
      //   <div>
      //     <h3>Welcome to SharePoint Framework!</h3>
      //     <p>
      //       The SharePoint Framework (SPFx) is a extensibility model for Microsoft Viva, Microsoft Teams and SharePoint. It&#39;s the easiest way to extend Microsoft 365 with automatic Single Sign On, automatic hosting and industry standard tooling.
      //     </p>
      //     <h4>Learn more about SPFx development:</h4>
      //     <ul className={styles.links}>
      //       <li><a href="https://aka.ms/spfx" target="_blank" rel="noreferrer">SharePoint Framework Overview</a></li>
      //       <li><a href="https://aka.ms/spfx-yeoman-graph" target="_blank" rel="noreferrer">Use Microsoft Graph in your solution</a></li>
      //       <li><a href="https://aka.ms/spfx-yeoman-teams" target="_blank" rel="noreferrer">Build for Microsoft Teams using SharePoint Framework</a></li>
      //       <li><a href="https://aka.ms/spfx-yeoman-viva" target="_blank" rel="noreferrer">Build for Microsoft Viva Connections using SharePoint Framework</a></li>
      //       <li><a href="https://aka.ms/spfx-yeoman-store" target="_blank" rel="noreferrer">Publish SharePoint Framework applications to the marketplace</a></li>
      //       <li><a href="https://aka.ms/spfx-yeoman-api" target="_blank" rel="noreferrer">SharePoint Framework API reference</a></li>
      //       <li><a href="https://aka.ms/m365pnp" target="_blank" rel="noreferrer">Microsoft 365 Developer Community</a></li>
      //     </ul>
      //   </div>
      // </section>

    );
  }
}
