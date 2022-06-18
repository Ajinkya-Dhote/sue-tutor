import { Autocomplete, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setAcademicPreeredSubjects } from "../../store/features/customerSlice";

export default function PreferedSubject() {
  const { t } = useTranslation();
  const top100Films = [
    { label: 'English', year: 1994 },
    { label: 'Maths', year: 1972 },
    { label: 'Physics', year: 1974 },
    { label: 'Chemistry', year: 2008 },
    { label: 'History', year: 1957 },
  ];

  const dispatch = useDispatch();

  const info = useSelector(state => state.customer.info);

  const [preferedSubs, setPreferedSubs] = useState(info.academic.preferedSubjects)

  // const [inputValue, setInputValue] = useState('');


  return (
    <Paper elevation={0} variant="outlined" sx={{ mt: 1, p: 1, '& .MuiTextField-root': { m: 2, } }}>
      <Typography>{t('prefered-subjects')}</Typography>

      <Autocomplete
        multiple
        id="combo-box-demo"
        defaultValue={[...preferedSubs]}
        options={top100Films}
        getOptionLabel={(option) => option.label}
        isOptionEqualToValue={(option, value) => option.label === value.label}
        value={preferedSubs}
        onChange={(event, newValue) => {
          setPreferedSubs(newValue);
        }}
        sx={{ width: '90%' }}
        renderInput={(params) => <TextField {...params} label={t('select-prefered-subjects')} variant="standard" placeholder={'  '+t('select-prefered-subjects')}  />}
      />

    </Paper>
  )
}