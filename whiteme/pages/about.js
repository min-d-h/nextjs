import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container, CardMedia } from '@mui/material';
import { Grid, Button } from '@mui/material';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red, teal, blue, grey } from '@mui/material/colors';

import TextField from '@mui/material/TextField';

const About = () => {

    const [value, setValue] = React.useState(new Date());

    const theme = createTheme({
        palette: {
            red: {
            // Purple and green play nicely together.
                main: red[200],
            },
            teal: {
            // This is green.A700 as hex.
                main: teal[200],
            },
            blue: {
                main: blue[500],
            },
            grey: {
                main: "white"
            }
        },
        });

        return (
            <Container>
                <ThemeProvider theme={theme}> {/* color theme 사용을 위한 태그 * 주로 최상단에 위치함 */}
                    {/* 상단 네브 바 위치 */}
                    <Card sx={{ maxWidth: '100%', height: '15%', mb: 3}} >
                        <CardContent>
                            <Typography variant="body2">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                    </Card>

                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3}>
                            <Card sx={{ maxWidth: 275 }}>
                                <CardContent>
                                    {/* 왼쪽 정렬 방법 확인 */}
                                    <Grid container spacing={1} alignItems = "center">
                                        <Grid item md={6}>
                                            <Typography sx={{ fontSize: 14 }} gutterBottom >
                                                개인 정보
                                            </Typography>
                                        </Grid>
                                        <Grid item md={6}>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom align="right" >
                                                <Button variant="contained" size="small" color="teal" >저장</Button>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    {/* 이미지 들어가는 곳 */}
                                    <CardMedia component="img" alt="song gang ho" height="200" image="../static/images/song1.png" />
                                    <Typography component="div" gutterBottom>
                                        <Box component="form" autoComplete="off" >
                                            <TextField fullWidth id="standard-basic" standard="Standard" color="teal" label="고객명" size="small" sx={{ mb: 2}}/>
                                            <TextField fullWidth id="standard-basic" standard="Standard" color="teal" label="닉네임(가명)" size="small" sx={{ mb: 2 }}/>
                                            <TextField fullWidth id="standard-basic" standard="Standard" color="teal" label="아이디" size="small" sx={{ mb: 2 }}/>
                                            {/* 달력 */}
                                            <TextField fullWidth id="standard-basic" standard="Standard" color="teal" label="미성년자 여부" size="small" sx={{ mb: 2 }}/>
                                            <TextField fullWidth id="standard-basic" standard="Standard" color="teal" label="직업" size="small" sx={{ mb: 2 }} disabled/>
                                        </Box>
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" align="right" >
                                        <Button variant="contained" size="small" color="teal" >저장</Button>
                                    </Typography>
                                </CardContent>
                                {/* <CardActions></CardActions> */}
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Card sx={{ width: '100%' }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Word of the Day
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                    <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off" >
                                        <TextField id="standard-basic" label="Standard" variant="standard" />
                                    </Box>
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        adjective
                                    </Typography>
                                    <Typography variant="body2">
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            views={['day', 'month', 'year']}
                                            label="Invert the order of views"
                                            value={value}
                                            onChange={(newValue) => {
                                                setValue(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} helperText={null} />}
                                            />
                                        </LocalizationProvider>
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </Container>
        );
    }
    export default About;