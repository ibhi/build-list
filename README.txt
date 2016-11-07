Installation and Build Instructions

This app is built with Angular 2 and angular-cli.

1. Install angular-cli as a global

npm install -g angular-cli

For more information on installing angular-cli and prequisites refer https://github.com/angular/angular-cli

2. cd in to the app source code folder and do 'npm install'

npm install

3. Once all the npm modules are installed, to start the development server run 'ng serve' in command line

ng serve

4. To create a production build, run 'ng build'

ng build

The build artifacts will be stored in the dist/ directory.

5. To run the unit test cases 'ng test'

ng test

6. To lint the code with tslint run 'ng lint'

ng lint

----------------------------------------------------------------------------------------------------------

Key Highlights of the App

* Complete app is built with Angular 2 (2.0.0) final release
* 42 Unit test cases written
* Zero linting errors and warnings
* Application has been broken down to smaller resuable components (Total 10 components including app component)
* Use of dumb and smart components
* D3js Charts have been created as resuable Angular components for the pie chart and progress bar
* D3js V4 (latest version) is used for the charts 
* D3js Pie chart is added with custom tooltip
* Tried to leverage typings system provided by typescript where ever possible
* Data for the app has been fetched from mock json file (mock-data.json) through http
* Custom accordion and accordion group components created (Design inspired from angular 2 ui web framework) 
* Though the app is not 100% responsive, still fluidity has been provided to the app
* Unit tests created with Jasmine and angular testing utilities
* Custom pipe created to convert epoch seconds timestap to Date
* Best practices and style guides have been followed through out the app
* CSS written in SASS (scss)

-----------------------------------------------------------------------------------------------------------------

External Dependencies for the app (Apart from Angular dependencies)

* Bootstrap 3 - For common styling and grid
* Font-awesome for icon fonts
* d3js - For pie charts and progress bar
* ng2-modal - For angular modal dialog

--------------------------------------------------------------------------------------------------------------------

Application Design

The app contain the below components

app.component - This is the main app component which will be bootstrapped by Angular. This is where the data is fecthed from the mock json 
file from the local server using angular service (data.service). Then the fetched data is fed as input to other components in the app through
property bindings. This makes this component smart component and all other components in the app to be dum components. As all other components in
the app accepts input and renders accordingly.

accordion and accordion-group - These two components are created to provide the accordion functionality to the app. It can be configured to work as 
accordion or collapse. Content projection has been used to template out the content provided by the user of this component

build-card - This card is created to show the build and debug  state of the firewall and build jobs

metrics-card - This card has been created to show the Test, Maintainability, Security and Workmanship data. The arrows in the cards have been created
with css shapes and they will change the direction (up or down) with proper color to show, wheather the data is above or below the goal. Most of the colors
in the card like border color and arrow colors are contectual and will update dynamically based on the data

navbar - Just a static bootstrap navbar created as its own component

pie-chart - D3js based pie chart created as a reusable component, which accepts data from the user along with option for size and margin 
and render the chart along with tool tips. This chart is used in both unit-test card and functional test card

progress-bar - Another d3js based simple progress bar which will accept data as input along with option for size and margin. This is used in the accordion
header to show progress for various tasks like metrics, build, uni test etc

result-card - A simple component which accepts data from the user of the component and dynamically renders the content based on the context of the provided
data with different contectual colors based on the job status

unit-test-card - This is the card which contains the pie chart component. This also accepts the data from the user and its also contextual and dynamic based
on the provided data. The same card is used for the functional test result as well as they are having the same ui

data.service - This is the service where the mocked network call has been made and the data has been fetched and given to the app component

epoch-date - This is custom pipe written to convert the epoch date (which will be retrived from the network) format to javascript Date object 

css - SASS is used as the css preprocessor. SASS variables have been used for the colors etc. All the common css have been written in styles.scss file

Almost all the components have been designed to get the data from the user of the component and provided interfaces for the data format. Also some of
the components has additional options input, to configure the component.

-----------------------------------------------------------------------------------------------------------------------------------------------------------