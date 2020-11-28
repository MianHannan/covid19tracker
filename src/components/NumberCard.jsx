import React from 'react'
import { Paper, Typography } from '@material-ui/core'

//icons
import AirlineSeatIndividualSuiteIcon from '@material-ui/icons/AirlineSeatIndividualSuite';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import CloseIcon from '@material-ui/icons/Close';

export const NumberCard = (props) => {

    return (
        <div>
            <Paper elevation={3} className='ncPaper' >
                <div className='row'>
                    <div className="col-4">
                        <Paper
                            className='iconPaper'
                            elevation={3}
                        >
                            {props.name === "infected" && <AirlineSeatIndividualSuiteIcon className='icon' style={{ fontSize: '80px', backgroundColor: '#ff9201', padding: '5px', height: '90px', width: '90px' }} />}
                            {props.name === "recovered" && <EmojiPeopleIcon className='icon' style={{ fontSize: '90px', backgroundColor: '#4fae54', padding: '5px', height: '90px', width: '90px' }} />}
                            {props.name === "dead" && <CloseIcon className='icon' style={{ fontSize: '90px', backgroundColor: '#ee473f', padding: '5px', height: '90px', width: '90px' }} />}
                        </Paper>
                    </div>
                    <div className="col-8">
                        <Typography variant='button'>{props.name}</Typography>
                        <Typography variant='h4'>{props.today}</Typography>
                    </div>
                </div>
                <hr style={{ margin: '0 10px' }} />
                <Typography variant='button' display='inline' style={{ fontSize: '20px' }}>Total : </Typography>
                <Typography variant='h6' display='inline'>{props.total}</Typography>
            </Paper>
        </div>
    )
}
