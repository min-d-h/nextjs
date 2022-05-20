import { useRadioGroup } from '@mui/material';
import { useRouter } from 'next/router'
import Index from './index'

// 아래 복사본
import {useState, useEffect} from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import {CardActions, CardContent} from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';

import { 
    Container, 
    CardMedia, 
    Grid, 
    Button, 
    Box, 
    Card, 
    Radio, 
    Tab, 
    Breadcrumbs,
    FormControl,
    TextField,
    Typography, } from '@mui/material';
import Link from 'next/link';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red, teal, blue, grey } from '@mui/material/colors';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


// table관련 부분
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from '@mui/material';

//icon
import {CheckCircle, CheckCircleOutlineSharp} from '@mui/icons-material';
import { SvgIcon } from '@mui/material';

const join = () => {
    const [selectedValue1, setSelectedValue1] = React.useState('a');
    const [selectedValue2, setSelectedValue2] = React.useState('c');
    const handleChange1 = (event) => {
        setSelectedValue1(event.target.value);
    };
    const handleChange2 = (event) => {
        setSelectedValue2(event.target.value);
    };
    
    const [value, setValue] = React.useState(new Date(), '1');

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
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // table 영역
    const columns = [
        { id: 'com_num', label: '번호', minWidth: 30 },
        { id: 'com_state', label: '현재', minWidth: 30 },
        { id: 'com_name', label: '회사명', minWidth: 150 },
        { id: 'com_date', label: '등록일자', minWidth: 70 },
        { id: 'com_regi', label: '사업자/법인등록번호', minWidth: 50 },
        { id: 'com_email', label: '회사이메일', minWidth: 50 },
    ];
    function createData(com_num, com_state, com_name, com_date, com_regi, com_email) {
        return { com_num, com_state, com_name, com_date, com_regi, com_email };
    }
    const rows = [
        createData('1', <CheckCircle />, 'sm엔터테인먼트', '20220505', '12312-12-12345', 'sm@sme.co.kr'),
        createData('1', <CheckCircle />, 'sm엔터테인먼트', '20220505', '12312-12-12345', 'sm@sme.co.kr'),
        createData('1', <CheckCircle />, 'sm엔터테인먼트', '20220505', '12312-12-12345', 'sm@sme.co.kr'),
        createData('1', <CheckCircle />, 'sm엔터테인먼트', '20220505', '12312-12-12345', 'sm@sme.co.kr'),
        createData('1', <CheckCircle />, 'sm엔터테인먼트', '20220505', '12312-12-12345', 'sm@sme.co.kr'),
        createData('1', <CheckCircle />, 'sm엔터테인먼트', '20220505', '12312-12-12345', 'sm@sme.co.kr'),
        createData('1', <CheckCircle />, 'sm엔터테인먼트', '20220505', '12312-12-12345', 'sm@sme.co.kr'),
        createData('1', <CheckCircle />, 'sm엔터테인먼트', '20220505', '12312-12-12345', 'sm@sme.co.kr'),
        createData('1', <CheckCircle />, 'sm엔터테인먼트', '20220505', '12312-12-12345', 'sm@sme.co.kr'),
        createData('1', <CheckCircle />, 'sm엔터테인먼트', '20220505', '12312-12-12345', 'sm@sme.co.kr'),
        createData('1', <CheckCircle />, 'sm엔터테인먼트', '20220505', '12312-12-12345', 'sm@sme.co.kr'),
        createData('1', <CheckCircle />, 'sm엔터테인먼트', '20220505', '12312-12-12345', 'sm@sme.co.kr'),
    ];

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const router = useRouter();
    const {post} = router.query

    return (
        <>
            <Index>
            <ThemeProvider theme={theme}> {/* color theme 사용을 위한 태그 * 주로 최상단에 위치함 */}
                {/* 상단 네브 바 위치 */}
                <Card sx={{ maxWidth: '100%', height: '15%', mb: 3}} >
                    <CardContent>
                    <Typography sx={{ fontSize: 20 }} variant="h2" gutterBottom >개인 정보</Typography>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="inherit" href="/">MUI</Link>
                            <Link
                                underline="hover"
                                color="inherit"
                                href="/material-ui/getting-started/installation/"
                            >Core </Link>
                            <Typography color="text.primary">Breadcrumbs</Typography>
                        </Breadcrumbs>
                    </CardContent>
                </Card>

                <Grid container spacing={2}>
                    <TabContext value={value}>
                        <Grid item xs={12} md={3}>
                            <Card sx={{ maxWidth: 275 }}>
                                {/* form 시작 */}
                                <FormControl>
                                    <CardContent>
                                        {/* 상단메뉴 */}
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
                                        <Typography component="div" sx={{mb: 5}}>
                                            <CardMedia component="img" alt="song gang ho" height="200" image="../static/images/song1.png" />
                                        </Typography>
                                        <Typography component="div" gutterBottom>
                                            <Box component="form" autoComplete="off" >
                                                <TextField fullWidth id="standard-basic" standard="Standard" color="teal" label="고객명" size="small" sx={{ mb: 2}}/>
                                                <TextField fullWidth id="standard-basic" standard="Standard" color="teal" label="닉네임(가명)" size="small" sx={{ mb: 2 }}/>
                                                <TextField fullWidth id="standard-basic" standard="Standard" color="teal" label="아이디" size="small" sx={{ mb: 2 }}/>
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                    <DatePicker
                                                        views={['year', 'month', 'day']}
                                                        label="Invert the order of views"
                                                        value={value}
                                                        onChange={(newValue) => {
                                                            setValue(newValue);
                                                        }}
                                                        renderInput={(params) => <TextField {...params} helperText={null} />}
                                                    />
                                                </LocalizationProvider>
                                                <TextField fullWidth id="standard-basic" standard="Standard" color="teal" label="미성년자 여부" size="small" sx={{ mt: 2, mb: 2 }}/>
                                                <TextField fullWidth id="standard-basic" standard="Standard" color="teal" label="직업" size="small" sx={{ mb: 2 }} disabled/>
                                            </Box>
                                        </Typography>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" align="right" >
                                            <Button variant="contained" size="small" color="teal" htmlType="submit" >저장</Button>
                                        </Typography>
                                    </CardContent>
                                </FormControl>
                                {/* <CardActions></CardActions> */}
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Card sx={{ width: '100%', mb: 3}}>                                
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="상세정보" value="1"/>
                                    <Tab label="소속 회사 정보" value="2" />
                                    <Tab label="계약정보" value="3" />
                                    <Tab label="입출금 내역" value="4" />
                                    <Tab label="연관 문서" value="5" />
                                </TabList>
                            </Card>
                            {/* 상세정보 */}
                            <Card sx={{ width: '100%' }}>
                                {/* 상세 정보 */}
                                <TabPanel value="1">
                                    <CardContent>
                                    <Box component="form" noValidate onSubmit={handleSubmit} >
                                        <Grid spacing={2}>
                                            <Grid container spacing={1}>
                                                <Grid item md={3}>
                                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom align="left">
                                                        사이트 가입 여부 :
                                                        <Radio checked={selectedValue1 === 'a'} onChange={handleChange1} value="a" name="radio-buttons" inputProps={{ 'aria-label': 'A' }} />
                                                        <Radio checked={selectedValue1 === 'b'} onChange={handleChange1} value="b" name="radio-buttons" inputProps={{ 'aria-label': 'B' }} />
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={9}>
                                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom align="right" >
                                                        <Button variant="outlined">저장ㅇㅇㅇㅇㅇ</Button>
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={1} alignItems="end">
                                                <Grid item md={6}>
                                                    <Typography color="teal" component="div">
                                                        <Box component="form" sx={{ '& > :not(style)': { width: '100%' }, }} noValidate autoComplete="off" >
                                                            <TextField id="standard-basic" label="사이트 로그인 아이디" variant="standard" />
                                                        </Box>
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={6}>
                                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom >
                                                        <Button variant="outlined">비밀번호 변경 링크 보내기</Button>
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Typography color="teal" component="div" sx={{mt:4}}>
                                                <Box component="form" sx={{ '& > :not(style)': { width: '50%' } }} noValidate autoComplete="off" >
                                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                        <DatePicker
                                                            views={['year', 'month', 'day']}
                                                            label="Invert the order of views"
                                                            value={value}
                                                            onChange={(newValue) => {
                                                                setValue(newValue);
                                                            }}
                                                            renderInput={(params) => <TextField {...params} helperText={null} />}
                                                        />
                                                    </LocalizationProvider>
                                                </Box>
                                            </Typography>
                                            <Grid container spacing={1} sx={{mt:2}}>
                                                <Grid item md={6}>
                                                    <Box component="form" sx={{ '& > :not(style)': { width: '100%' }}} noValidate autoComplete="off" >
                                                        <TextField id="standard-basic" label="휴대전화번호" variant="standard" />
                                                    </Box>
                                                </Grid>
                                                <Grid item md={6}>
                                                    <Box component="form" sx={{ '& > :not(style)': { width: '100%' }}} noValidate autoComplete="off" >
                                                        <TextField id="standard-basic" label="사이트 가입 일자" variant="standard" />
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={1} sx={{mt:2}}>
                                                <Grid item md={6}>
                                                    <Box component="form" sx={{ '& > :not(style)': { width: '100%' }, mb:3 }} noValidate autoComplete="off" >
                                                        <TextField id="standard-basic" label="이메일 주소" variant="standard" />
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={1}>
                                                <Grid item md={12}>
                                                    <TextareaAutosize
                                                        maxRows={5}
                                                        aria-label="maximum height"
                                                        placeholder="비고 내용을 적어주세요"
                                                        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                            ut labore et dolore magna aliqua."
                                                        style={{ width: "100%", height: 120 }}
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={1} sx={{mt:2}}>
                                                <Grid item md={3}>
                                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom align="left">
                                                        사이트 가입 여부 :
                                                        <Radio checked={selectedValue2 === 'c'} onChange={handleChange2} value="c" name="radio-buttons" inputProps={{ 'aria-label': 'A' }} />
                                                        <Radio checked={selectedValue2 === 'd'} onChange={handleChange2} value="d" name="radio-buttons" inputProps={{ 'aria-label': 'B' }} />
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={1} sx={{mt:1}}>
                                                <Grid item md={6}>
                                                    <Box component="form" sx={{ '& > :not(style)': { width: '100%' }, }} noValidate autoComplete="off" >
                                                        <TextField id="standard-basic" label="정보 자동 삭제 예정 일자" variant="standard" disabled/>
                                                    </Box>
                                                </Grid>
                                                <Grid item md={6}>
                                                    <Box component="form" sx={{ '& > :not(style)': { width: '100%' }, }} noValidate autoComplete="off" >
                                                        <TextField id="standard-basic" label="사진 레퍼런스 키" variant="standard" disabled/>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    </CardContent>
                                    {/* <CardActions></CardActions> */}
                                </TabPanel>

                                {/* 소속 회사 정보 */}
                                <TabPanel value="2">
                                    <CardContent>
                                        <Grid container spacing={1}>
                                            <Grid item md={12} sx={{mb:2}}>
                                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom align="right" >
                                                    <Button variant="outlined">저장ㅇㅇㅇㅇㅇ</Button>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                                            <TableContainer sx={{ maxHeight: 440 }}>
                                                <Table stickyHeader aria-label="sticky table">
                                                <TableHead>
                                                    <TableRow>
                                                    {columns.map((column) => (
                                                        <TableCell
                                                        key={column.id}
                                                        align={column.align}
                                                        style={{ minWidth: column.minWidth }}
                                                        >
                                                        {column.label}
                                                        </TableCell>
                                                    ))}
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {rows
                                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                    .map((row) => {
                                                        return (
                                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                            {columns.map((column) => {
                                                            const value = row[column.id];
                                                            return (
                                                                <TableCell key={column.id} align={column.align}>
                                                                {column.format && typeof value === 'number'
                                                                    ? column.format(value)
                                                                    : value}
                                                                </TableCell>
                                                            );
                                                            })}
                                                        </TableRow>
                                                        );
                                                    })}
                                                </TableBody>
                                                </Table>
                                            </TableContainer>
                                            <TablePagination
                                                rowsPerPageOptions={[10, 25, 100]}
                                                component="div"
                                                count={rows.length}
                                                rowsPerPage={rowsPerPage}
                                                page={page}
                                                onPageChange={handleChangePage}
                                                onRowsPerPageChange={handleChangeRowsPerPage}
                                            />
                                        </Paper>
                                    </CardContent>
                                    {/* <CardActions></CardActions> */}
                                </TabPanel>

                                {/* 계약정보 */}
                                <TabPanel value="3">
                                    <CardContent>
                                    <Box component="form" noValidate onSubmit={handleSubmit} >
                                        <Grid spacing={2}>
                                            <Grid container spacing={1}>
                                                <Grid item md={3}>
                                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom align="left">
                                                        사이트 가입 여부 :
                                                        <Radio checked={selectedValue1 === 'a'} onChange={handleChange1} value="a" name="radio-buttons" inputProps={{ 'aria-label': 'A' }} />
                                                        <Radio checked={selectedValue1 === 'b'} onChange={handleChange1} value="b" name="radio-buttons" inputProps={{ 'aria-label': 'B' }} />
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={9}>
                                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom align="right" >
                                                        <Button variant="outlined">계약 정보입니다</Button>
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={1} alignItems="end">
                                                <Grid item md={6}>
                                                    <Typography color="teal" component="div">
                                                        <Box component="form" sx={{ '& > :not(style)': { width: '100%' }, }} noValidate autoComplete="off" >
                                                            <TextField id="standard-basic" label="사이트 로그인 아이디" variant="standard" />
                                                        </Box>
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={6}>
                                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom >
                                                        <Button variant="outlined">비밀번호 변경 링크 보내기</Button>
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Typography color="teal" component="div" sx={{mt:4}}>
                                                <Box component="form" sx={{ '& > :not(style)': { width: '50%' } }} noValidate autoComplete="off" >
                                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                        <DatePicker
                                                            views={['year', 'month', 'day']}
                                                            label="Invert the order of views"
                                                            value={value}
                                                            onChange={(newValue) => {
                                                                setValue(newValue);
                                                            }}
                                                            renderInput={(params) => <TextField {...params} helperText={null} />}
                                                        />
                                                    </LocalizationProvider>
                                                </Box>
                                            </Typography>
                                            <Grid container spacing={1} sx={{mt:2}}>
                                                <Grid item md={6}>
                                                    <Box component="form" sx={{ '& > :not(style)': { width: '100%' }}} noValidate autoComplete="off" >
                                                        <TextField id="standard-basic" label="휴대전화번호" variant="standard" />
                                                    </Box>
                                                </Grid>
                                                <Grid item md={6}>
                                                    <Box component="form" sx={{ '& > :not(style)': { width: '100%' }}} noValidate autoComplete="off" >
                                                        <TextField id="standard-basic" label="사이트 가입 일자" variant="standard" />
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={1} sx={{mt:2}}>
                                                <Grid item md={6}>
                                                    <Box component="form" sx={{ '& > :not(style)': { width: '100%' }, mb:3 }} noValidate autoComplete="off" >
                                                        <TextField id="standard-basic" label="이메일 주소" variant="standard" />
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={1}>
                                                <Grid item md={12}>
                                                    <TextareaAutosize
                                                        maxRows={5}
                                                        aria-label="maximum height"
                                                        placeholder="비고 내용을 적어주세요"
                                                        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                            ut labore et dolore magna aliqua."
                                                        style={{ width: "100%", height: 120 }}
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={1} sx={{mt:2}}>
                                                <Grid item md={3}>
                                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom align="left">
                                                        사이트 가입 여부 :
                                                        <Radio checked={selectedValue2 === 'c'} onChange={handleChange2} value="c" name="radio-buttons" inputProps={{ 'aria-label': 'A' }} />
                                                        <Radio checked={selectedValue2 === 'd'} onChange={handleChange2} value="d" name="radio-buttons" inputProps={{ 'aria-label': 'B' }} />
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={1} sx={{mt:1}}>
                                                <Grid item md={6}>
                                                    <Box component="form" sx={{ '& > :not(style)': { width: '100%' }, }} noValidate autoComplete="off" >
                                                        <TextField id="standard-basic" label="정보 자동 삭제 예정 일자" variant="standard" disabled/>
                                                    </Box>
                                                </Grid>
                                                <Grid item md={6}>
                                                    <Box component="form" sx={{ '& > :not(style)': { width: '100%' }, }} noValidate autoComplete="off" >
                                                        <TextField id="standard-basic" label="사진 레퍼런스 키" variant="standard" disabled/>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    </CardContent>
                                    {/* <CardActions></CardActions> */}
                                </TabPanel>

                                {/* 입출금 내역 */}
                                <TabPanel value="4">
                                    <CardContent>
                                    <Box component="form" noValidate onSubmit={handleSubmit} >
                                        <Grid spacing={2}>
                                            <Grid container spacing={1}>
                                                <Grid item md={3}>
                                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom align="left">
                                                        사이트 가입 여부 :
                                                        <Radio checked={selectedValue1 === 'a'} onChange={handleChange1} value="a" name="radio-buttons" inputProps={{ 'aria-label': 'A' }} />
                                                        <Radio checked={selectedValue1 === 'b'} onChange={handleChange1} value="b" name="radio-buttons" inputProps={{ 'aria-label': 'B' }} />
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={9}>
                                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom align="right" >
                                                        <Button variant="outlined">입출금 부분입니다.</Button>
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={1} alignItems="end">
                                                <Grid item md={6}>
                                                    <Typography color="teal" component="div">
                                                        <Box component="form" sx={{ '& > :not(style)': { width: '100%' }, }} noValidate autoComplete="off" >
                                                            <TextField id="standard-basic" label="사이트 로그인 아이디" variant="standard" />
                                                        </Box>
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={6}>
                                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom >
                                                        <Button variant="outlined">비밀번호 변경 링크 보내기</Button>
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Typography color="teal" component="div" sx={{mt:4}}>
                                                <Box component="form" sx={{ '& > :not(style)': { width: '50%' } }} noValidate autoComplete="off" >
                                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                        <DatePicker
                                                            views={['year', 'month', 'day']}
                                                            label="Invert the order of views"
                                                            value={value}
                                                            onChange={(newValue) => {
                                                                setValue(newValue);
                                                            }}
                                                            renderInput={(params) => <TextField {...params} helperText={null} />}
                                                        />
                                                    </LocalizationProvider>
                                                </Box>
                                            </Typography>
                                            <Grid container spacing={1} sx={{mt:2}}>
                                                <Grid item md={6}>
                                                    <Box component="form" sx={{ '& > :not(style)': { width: '100%' }}} noValidate autoComplete="off" >
                                                        <TextField id="standard-basic" label="휴대전화번호" variant="standard" />
                                                    </Box>
                                                </Grid>
                                                <Grid item md={6}>
                                                    <Box component="form" sx={{ '& > :not(style)': { width: '100%' }}} noValidate autoComplete="off" >
                                                        <TextField id="standard-basic" label="사이트 가입 일자" variant="standard" />
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={1} sx={{mt:2}}>
                                                <Grid item md={6}>
                                                    <Box component="form" sx={{ '& > :not(style)': { width: '100%' }, mb:3 }} noValidate autoComplete="off" >
                                                        <TextField id="standard-basic" label="이메일 주소" variant="standard" />
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={1}>
                                                <Grid item md={12}>
                                                    <TextareaAutosize
                                                        maxRows={5}
                                                        aria-label="maximum height"
                                                        placeholder="비고 내용을 적어주세요"
                                                        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                            ut labore et dolore magna aliqua."
                                                        style={{ width: "100%", height: 120 }}
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={1} sx={{mt:2}}>
                                                <Grid item md={3}>
                                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom align="left">
                                                        사이트 가입 여부 :
                                                        <Radio checked={selectedValue2 === 'c'} onChange={handleChange2} value="c" name="radio-buttons" inputProps={{ 'aria-label': 'A' }} />
                                                        <Radio checked={selectedValue2 === 'd'} onChange={handleChange2} value="d" name="radio-buttons" inputProps={{ 'aria-label': 'B' }} />
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={1} sx={{mt:1}}>
                                                <Grid item md={6}>
                                                    <Box component="form" sx={{ '& > :not(style)': { width: '100%' }, }} noValidate autoComplete="off" >
                                                        <TextField id="standard-basic" label="정보 자동 삭제 예정 일자" variant="standard" disabled/>
                                                    </Box>
                                                </Grid>
                                                <Grid item md={6}>
                                                    <Box component="form" sx={{ '& > :not(style)': { width: '100%' }, }} noValidate autoComplete="off" >
                                                        <TextField id="standard-basic" label="사진 레퍼런스 키" variant="standard" disabled/>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    </CardContent>
                                    {/* <CardActions></CardActions> */}
                                </TabPanel>
                            </Card>
                        </Grid>
                    </TabContext>
                </Grid>
            </ThemeProvider>
            </Index>
        </>
    );
}

export default join;