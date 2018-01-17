/**
 * Created on 2018/1/17
 * @author Stone Lee<loverinfolee@gmail.com>
 */
import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import { ViewTitle } from 'admin-on-rest/lib/mui';

export default () => (
    <Card>
        <ViewTitle title="Not Found" />
        <CardText>
            <h1>404: Page not found</h1>
        </CardText>
    </Card>
);
