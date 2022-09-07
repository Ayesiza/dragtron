// eslint-disable-next-line no-unused-expressions
import {TiTick, TiTimes} from 'react-icons/ti'
const Data = [
    {
        title: "ALL ACCESS MEMBERSHIP",
        rate: "$ 299",
        tick: true,

        content: (
            <ul>
                <li > <TiTick/>  <b>Promote yourself </b> & reach thousands of user globally </li>
                <li> <TiTick/>Accept <b>Payments</b></li>
                <li><TiTick/> Both <b>In Person</b> & <b> Virtual trainings</b></li>
                <li><TiTick/>Access to <b>manger customers health profile</b></li>
                <li><TiTick/><b> Verified</b> Profile</li>
                <li><TiTick/>Access to <b>weekly newsletters</b></li>
            </ul>
        )
    },
    {
        title: "IN PERSON TRAINING MEMBERSHIP",
        rate: "$ 199",
        tick: true,
        content: (
            <ul>
                <li ><TiTick/><b>Promote yourself </b> & reach thousands of user globally </li>
                <li><TiTick/> Accept <b>Payments</b></li>
                <li><TiTick/> Both <b>In Person</b> & <b> Virtual trainings</b></li>
                <li><TiTick/>Access to <b>manger customers health profile</b></li>
                <li><TiTimes/><strike> <b> Verified</b> Profile  </strike> </li>
                <li> <TiTimes/><strike> Access to <b>weekly newsletters</b> </strike></li>
            </ul>
        )
    },
    {
        title: "VIRTUAL TRAINING",
        rate: "$ 99",
        tick: true,
        content: (
            <ul>
                <li><TiTick/><b>Promote yourself </b> & reach thousands of user globally </li>
                <li><TiTick/> Accept <b>Payments</b></li>
                <li><TiTick/> Both <b>In Person</b> & <b> Virtual trainings</b></li>
                <li><TiTick/>Access to <b>manger customers health profile</b></li>
                <li> <TiTimes/><strike> <b> Verified</b> Profile</strike></li>
                <li><TiTimes/> <strike>Access to <b>weekly newsletters</b> </strike></li>
            </ul>
        )
    }
];
export default Data;