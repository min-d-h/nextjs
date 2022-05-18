import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Grid, Button } from '@mui/material';


const About = () => {
    const bull = (
        <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
            •
        </Box>
        );
        return (
            <Container>
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
                                            <Button variant="contained" color="primary" size="small"> 저장 </Button>
                                        </Typography>
                                    </Grid>
                                </Grid>
                                {/* 이미지 들어가는 곳 */}
                                <CardMedia component="img" alt="song gang ho" height="140" image="/static/images/song1.png" />
                                <Typography variant="h5" component="div">
                                    be{bull}nev{bull}o{bull}lent
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    adjective
                                </Typography>
                                <Typography variant="body2">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Card sx={{ width: '100%' }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Word of the Day
                                </Typography>
                                <Typography variant="h5" component="div">
                                    be{bull}nev{bull}o{bull}lent
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    adjective
                                </Typography>
                                <Typography variant="body2">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        );
    }
export default About;