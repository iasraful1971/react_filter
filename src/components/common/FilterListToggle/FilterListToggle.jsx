import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
const FilterListToggle = ({options , value , selectToggle }) => {
    const useStayles = makeStyles({
        root:{
            width: '100%',
            justifyContent:'space-between'
        },
        toggle: {
            fontSize: '.8rem',
            border:'1px solid rgba(0 , 0 ,0 0.12)',
            borderRadius:'10px',
        },
        '&.MuiToggleButtonGroup-groupHorizontal:not(:first-child)':{
            borderRadius:'10px',
            border:'1px solid rgba(0 , 0 ,0 ,0.12)',

        },
        '&.Mui-selected':{
            borderRadius:'10px',
            backgroundColor:'#000000',
            color:'#fff'
        },
        '&.MuiToggleButton-root':{
            '&:hover':{
                background:'#0c0c0c',
                color:'#fff'
            }
        }
    });
    const classes = useStayles();
    return (
        <ToggleButtonGroup
        value={value}
        onChange={selectToggle}
        className={classes.root}
        exclusive
        >
            {
                options.map(({label, id, value}) => <ToggleButton className={classes.toggle} key={id} value={value}>{label}</ToggleButton> )
            }
            
        </ToggleButtonGroup>
    );
};

export default FilterListToggle;