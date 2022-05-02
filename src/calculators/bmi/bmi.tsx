import React, { useState} from "react";
import {BmiResult} from "../../components/bmi/BmiResult";
import {
    Box,
    InputAdornment,
    Paper, styled,
    Table, TableBody, TableCell, tableCellClasses,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography
} from "@mui/material";



const rows: {bmi: string, description: string}[] = [
    {bmi: "16 и менее",	description: "Выраженный дефицит массы тела"},
    {bmi: "16-18,5",	description: "Недостаточная (дефицит) масса тела"},
    {bmi: "18,5-25",	description: "Норма"},
    {bmi: "25-30",	description: "Избыточная масса тела (предожирение)"},
    {bmi: "30-35",	description: "Ожирение первой степени"},
    {bmi: "35-40",	description: "Ожирение второй степени"},
    {bmi: "40 и более",	description: "Ожирение третьей степени (морбидное)"},
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.warning.main,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,

    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
export const Bmi: React.FC = () => {
    const [result, setResult] = useState<string>(BmiResult.result);
    return <>
        <div className={"bmi-header"}>
            <Typography variant="h4" align={"center"}>
                Индекс массы тела
            </Typography>
            <Typography variant={"subtitle1"} textAlign={"center"} width={"50%"} whiteSpace={"pre-line"} margin={"auto"} padding={"4%"}>
                Индекс массы тела является показателем отношения веса и роста человека. Данный параметр помогает определить отклонения от нормальной массы тела в ту или иную сторону. Лишний вес опасен для человеческого здоровья, поскольку часто приводят к сердечным заболеваниям. Онлайн калькулятор индекса массы тела позволяет быстро и точно узнать, насколько ваш показатель веса соответствует норме. Чтобы рассчитать индекс массы тела необходимо выбрать в представленном сервисе свой рост и вес.
            </Typography>
        </div >
        <div className={"bmi-calc"}>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '20ch' },
                }}
                noValidate
                autoComplete="off"
            >
            <div className={"bmi-item"}>
                <TextField label="Вес" InputProps={{
                    endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                }}  color="secondary" focused type={"number"} onChange={e => {
                    changingValues(parseFloat(e.target.value), 'weight')
                    setResult(BmiResult.result);
                }}/>
                <TextField label="Рост" InputProps={{
                    endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                }} color="secondary" focused type={"number"} onChange={e => {
                    changingValues(parseFloat(e.target.value), 'height');
                    setResult(BmiResult.result);
                }}/>
            </div>
            <div className={"bmi-result"}>
                <TextField label={"Результат"} value={result} color="success" focused type={"number"} InputProps={{
                    readOnly: true,
                }}/>
            </div>
            </Box>
            <TableContainer component={Paper} >
                <Table  >
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell align="right">Индекс массы тела</StyledTableCell>
                            <StyledTableCell align="left">Описание</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.bmi}>
                                <StyledTableCell  align="right" component="th" scope="row">
                                    {row.bmi}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.description}</StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    </>
}

function changingValues(value: number, parameter: string): void {
    if (value > 0 && parameter === 'height'){
        BmiResult.height = value;
    } else if (value > 0 && parameter === 'weight'){
        BmiResult.weight = value;
    }
    BmiResult.Calculate();
}