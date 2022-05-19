import * as React from 'react';
import { useRouter } from 'next/router'

import { TabPanel } from '@mui/lab';
import { Box, Button, CardContent, Grid, Radio, TextareaAutosize, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import About from '../pages/about'


const con_info = () => {

    // const [selectedValue1, setSelectedValue1] = React.useState('a');
    // const [selectedValue2, setSelectedValue2] = React.useState('c');
    // const handleChange1 = (event) => {
    //     setSelectedValue1(event.target.value);
    // };
    // const handleChange2 = (event) => {
    //     setSelectedValue2(event.target.value);
    // };
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // };

    // const [value, setValue] = React.useState(new Date() );

    return (
        <>
            <About>
                가나다라다라다라다
            </About>
        </>
    );
}

export default con_info;