/**
 * 제작 : HanSeungHyeon
 * 날짜 : 1/9/24
 * 내용 :
 */

import React from 'react';
import { withStyles, Typography } from '@material-ui/core';
import moment from 'moment';
import _ from 'lodash';


const TreeCheck = (props) => {
    const { classes, name } = props;
    const lodash = _.get({}, 'x', true);
    console.log('lodash: ', lodash);
    const x = _.cloneDeep({ hello: 'world!' });
    const time = new moment();
    return (
        <div className={classes.root}>
            <Typography variant="display1" >Hello, {name}!</Typography>
            <Typography>This component depends upon the material-ui, moment, and lodash libraries.</Typography>
            <Typography>These libraries are loaded dynamically, which means that they are kept out of the initial client bundle️, which reduces the bundle size significantly.</Typography>
            <Typography>Current date (calculated by moment.js): {time.toString()}</Typography>
        </div>
    );
};

const style = theme => ({
    root: {
        padding: theme.spacing.unit * 10,
        height:150,
        backgroundColor: 'yellow',
    },
});

export default withStyles(style)(TreeCheck);