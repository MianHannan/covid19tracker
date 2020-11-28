import React from 'react'
import { FormControl, InputLabel, Select } from '@material-ui/core'
import { GlobalData } from '../App'


export const Header = () => {

    const gData = React.useContext(GlobalData);


    return (
        <div className='container header'>
            <div className='row'>
                <div className='col-md-9 left-align'>
                    <img src='/logo.png' alt='COVID19 TRACKER' />
                </div>
                <div className='col-md-2'>
                    <FormControl>
                        <InputLabel htmlFor="age-native-simple" style={{ color: '#000' }}>Country</InputLabel>
                        <Select native onChange={e => gData.setCountry(e.target.value)}>
                            <option value={gData.country}>Global</option>
                            {gData.data.Countries.map((item, index) =>
                                <option key={index} value={index}>{item.Country}</option>
                            )}

                        </Select>
                    </FormControl>
                </div>
            </div>
        </div>
    )
}
