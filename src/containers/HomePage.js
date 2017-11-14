import React from 'react';
// import { Link } from 'react-router-dom';
import { Grid, Sticky, Card, Icon } from 'semantic-ui-react';

const description = (
    <div>
        <h2>Get Started</h2>
        <ul>
            <li>Comes with React-Redux pre-loaded -- Webpack too!</li>
            <li>Built for REST Endpoints</li>
            <li>Formatting with ESLint</li>
            <li>Semantic UI web component library</li>
            <li>Jest for Unit Testing</li>
            <li>SCSS like a boss</li>
            <li>Axios for HTTP client</li>
            <br />
            <li>Launch in Dev mode: npm run start -s</li>
            <li>Build for Production: npm run build</li>
            <li>Remove the demo and start coding: npm run remove-demo</li>
            <li>Semantic UI React Docs (https://react.semantic-ui.com/introduction)</li>
        </ul>
        <h2>Get Started</h2>
        <ul>
            <li>Comes with React-Redux pre-loaded -- Webpack too!</li>
            <li>Built for REST Endpoints</li>
            <li>Formatting with ESLint</li>
            <li>Semantic UI web component library</li>
            <li>Jest for Unit Testing</li>
            <li>SCSS like a boss</li>
            <li>Axios for HTTP client</li>
            <br />
            <li>Launch in Dev mode: npm run start -s</li>
            <li>Build for Production: npm run build</li>
            <li>Remove the demo and start coding: npm run remove-demo</li>
            <li>Semantic UI React Docs (https://react.semantic-ui.com/introduction)</li>
        </ul>
        <h2>Get Started</h2>
        <ul>
            <li>Comes with React-Redux pre-loaded -- Webpack too!</li>
            <li>Built for REST Endpoints</li>
            <li>Formatting with ESLint</li>
            <li>Semantic UI web component library</li>
            <li>Jest for Unit Testing</li>
            <li>SCSS like a boss</li>
            <li>Axios for HTTP client</li>
            <br />
            <li>Launch in Dev mode: npm run start -s</li>
            <li>Build for Production: npm run build</li>
            <li>Remove the demo and start coding: npm run remove-demo</li>
            <li>Semantic UI React Docs (https://react.semantic-ui.com/introduction)</li>
        </ul>
    </div>
);


const HomePage = () => {
    return (
        <Grid columns={1} className="home-page-content-card">
            <Grid.Column>
                <div>
                    <Sticky>
                        <div className="home-page-content">
                            <Card className="home-page-card">
                                <Card.Content header="Project Starter Kit (REST)" />
                                <Card.Content description={description} />
                                <Card.Content extra>
                                    <Icon name="code" />
                                    Boom Baby
                                </Card.Content>
                            </Card>
                        </div>
                    </Sticky>
                </div>
            </Grid.Column>
        </Grid>

    );
};

export default HomePage;
