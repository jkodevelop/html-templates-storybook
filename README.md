# HTML templates - Storybook UI [2021]
This project is used for html/css template testing and developement. No framework just html js and css (+jquery if needed). 
Storybook UI is added for documentation. 

The purpose of this project is to have a blank simple html/js/css project to test designs or css rules. Webpack is setup process using file-loader, css-loader, general js bundling and Babel enabled.

### reference starting point - to use storybook with NO frameworks
-- no need to run this but this is reference of the start of the project. Storybook setup with no framework, template: html
`npx -p @storybook/cli sb init -t html`

### prerequisite:
1. node 12+
2. make sure to run `npm install` to install the package

## usage: Development
to start the template preview
`npm start`
go to http://localhost:9001/

for storybook documentation
`npm run storybook` 
go to http://localhost:6006/


### sources:
- https://dlim716.medium.com/storybook-setup-html-js-a2398f20f1b2
- https://medium.com/strands-tech-corner/storybook-configuration-in-react-project-ec59869f3e7d