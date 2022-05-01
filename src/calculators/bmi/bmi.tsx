import React, {useEffect, useState} from "react";
import {BmiResult} from "../../components/bmi/BmiResult";
import {Box, InputAdornment, TextField, Typography} from "@mui/material";

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