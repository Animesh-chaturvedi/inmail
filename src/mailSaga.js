import {call, put, takeEvery} from 'redux-saga/effects';
import { getMailsSuccess, getMailsFailure } from './mailState';


function* workGetMailsFetch(){
    try{
        const mails = yield call(() => fetch('https://run.mocky.io/v3/15a3a1c3-1cda-4409-b1b1-2f39f5f25123'));
        const formattedMails = yield mails.json();
        const mailGroups= formattedMails.reduce((acc, crr) => {
            if(acc[crr.tag]){
                acc[`${crr.tag}`] = acc[crr.tag]+1;
            }else{
                acc[crr.tag] = 1;
            }
            return acc;
        },{})
        const mailObj = {
            mails:formattedMails,
            mailGroups:mailGroups
        }
        yield put(getMailsSuccess(mailObj))
    }
    catch(e){
        yield put(getMailsFailure())
    }
}

function* mailSaga(){
    yield takeEvery('mails/getMailsFetch', workGetMailsFetch)
}

export default mailSaga;