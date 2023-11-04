# SharePoint Framework (SPFx) Web Part with Office UI Fabric React Panel

## Summary

This project is a SharePoint Framework web part that demonstrates how to create a button that opens an Office UI Fabric React panel when clicked. The panel is used to display additional content or functionality in a user-friendly manner.

![Alt text](image.png)

## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.17.4-green.svg)

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](http://aka.ms/o365devprogram)

## Features

- Button that opens a panel.
- Utilizes Office UI Fabric React components.
- Provides a user-friendly way to display additional content or functionality within SharePoint.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [SharePoint Framework development environment set up](https://learn.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-development-environment)
- Familiarity with Office UI Fabric React (optional)


## Usage

To use this web part in your SharePoint environment, follow these steps:

1. Clone the repository to your local development environment:
   git clone https://github.com/yourusername/your-spfx-project.git

2. Navigate to the project directory:
   cd your-spfx-project

3. Install project dependencies:
   npm install

4. Build and package the web part:
   gulp build
   gulp bundle --ship
   gulp package-solution --ship

5. Deploy the package to your SharePoint environment:

6. Add the web part to your SharePoint page and experience the button and panel functionality.

## Getting Started

To get started with development or customization, follow these steps:

Open the project in your preferred code editor.

Locate the Button component, which handles the button click event.

Customize the openPanel function to define the behavior of your panel.

Modify the Office UI Fabric React panel and its content as needed.

Save your changes and test the web part locally.

Follow the deployment steps mentioned in the Usage section when you are ready to deploy your changes to SharePoint.

## Solution

| Solution    | Author(s)    |
| ----------- | ------------ |
| src | Jyoti Sharma |

## Version history

| Version | Date             | Comments        |
| ------- | ---------------- | --------------- |
| 1.0     | January 29, 2021 | Initial release |

## Disclaimer

**THIS CODE IS PROVIDED _AS IS_ WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---
Share your web part with others through Microsoft 365 Patterns and Practices program to get visibility and exposure. More details on the community, open-source projects and other activities from http://aka.ms/m365pnp.

## References

- [Getting started with SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)
- [Building for Microsoft teams](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/build-for-teams-overview)
- [Use Microsoft Graph in your solution](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/using-microsoft-graph-apis)
- [Publish SharePoint Framework applications to the Marketplace](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/publish-to-marketplace-overview)
- [Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp) - Guidance, tooling, samples and open-source controls for your Microsoft 365 development
