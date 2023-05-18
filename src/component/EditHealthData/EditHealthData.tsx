import { useContext, useEffect, useState } from "react";
import { stateType } from "../../store/store-types";
import HealthDataContext from "../../context/health-data-context";
import { Link, NavLink, useParams } from "react-router-dom";
import { initalState } from "../../store/reducer-store";
import styless from './EditHealthData.module.scss';
import ShowHealthData from "../ShowHealthData/ShowHealthData";
import { useNavigate } from "react-router-dom";
const EditHealthData = () => {

    const parms: any = useParams();
    console.table(parms)
    const {users, dispatchFun} = useContext(HealthDataContext);
   
    const [ userData, setUserData ] = useState<any>(initalState[0]);
    const navigate = useNavigate();

    
    useEffect(() => {
        if(parms.userId){
            users.forEach(user=> {
                if(user.id == parseInt(parms.userId)){
                 setUserData(user)
                }
             })
        }
        console.log('userData',userData)
    },[parms])
  


    const onNameChange = (e:any) => {
        console.log('e.name', e.target.value)
        var newUserData = {...userData, name: e.target.value};
        setUserData(newUserData)
        const action = {
            type: 'UPDATE_USER_DATA',
            userData:userData
        }
        dispatchFun(action)
    }


     


    const onchangeinputdata = (inputvalue:any , key:any) => {
        // console.log('e.name', e.target.value);
        var newBP = {...userData[key], value: inputvalue};
        var newUserData = {...userData, [key]: newBP};
        setUserData(newUserData)

         console.log("userr data "   ,     userData)
    //     let keyarr = Object.keys(userData)

    //  console.log( "array of all key key ",keyarr)


        const action = {
            type: 'UPDATE_USER_DATA',
            userData:userData
        }
        dispatchFun(action)
       
    }

    const onChangeHR = (e:any) => {
        // console.log('e.name', e.target.value);
        var newBP = {...userData.HR, value: e.target.value};
        var newUserData = {...userData, HR: newBP};
        setUserData(newUserData)

        const action = {
            type: 'UPDATE_USER_DATA',
            userData:userData
        }
        dispatchFun(action)
       
    }

    const onChangeSBP = (e:any) => {
        // console.log('e.name', e.target.value);
        var newBP = {...userData.SBP, value: e.target.value};
        var newUserData = {...userData, SBP: newBP};
        setUserData(newUserData)

        const action = {
            type: 'UPDATE_USER_DATA',
            userData:userData
        }
        dispatchFun(action)
       
    }

    const onChangeDBP = (e:any) => {
        // console.log('e.name', e.target.value);
        var newBP = {...userData.DBP, value: e.target.value};
        var newUserData = {...userData, DBP: newBP};
        setUserData(newUserData)

        const action = {
            type: 'UPDATE_USER_DATA',
            userData:userData
        }
        dispatchFun(action)
       
    }

    const onChangePR = (e:any) => {
        // console.log('e.name', e.target.value);
        var newBP = {...userData.PR, value: e.target.value};
        var newUserData = {...userData, PR: newBP};
        setUserData(newUserData)

        const action = {
            type: 'UPDATE_USER_DATA',
            userData:userData
        }
        dispatchFun(action)
       
    }

    
    const onChangeSR = (e:any) => {
        // console.log('e.name', e.target.value);
        var newBP = {...userData.SR, value: e.target.value};
        var newUserData = {...userData, SR: newBP};
        setUserData(newUserData)

        const action = {
            type: 'UPDATE_USER_DATA',
            userData:userData
        }
        dispatchFun(action)
       
    }

     

    const submitdata = () => {
        
        const action = {
            type: 'UPDATE_USER_DATA',
            userData:userData
        }
        dispatchFun(action);
        
        <NavLink to='/main'> </NavLink>

    }

    return (
        <div>



<form className={styless['user-form']}>
   

<p>ID :- {userData.id}</p>

<div className={styless['form-control']}>
    <label htmlFor="name">User Name</label>
<input type="text" 
value={userData.name} 
onChange={onNameChange} 
placeholder="name" />

</div>

<div className={styless['form-control']}>
    <label htmlFor="bp">{userData.BP.name}</label>
<input 
    type="number" 
    value={userData.BP.value}
    onChange={(e)=>onchangeinputdata(e.target.value ,"BP")}
    id="bp"
    placeholder={userData.BP.name} />
    
</div>

<div className={styless['form-control']}>
    <label htmlFor="HR">{userData.HR.name}</label>
<input 
    type="number" 
    value={userData.HR.value}
    onChange={(e)=>onchangeinputdata(e.target.value ,"HR")}
    id="HR"
    placeholder={userData.HR.name} />
    
</div>


<div className={styless['form-control']}>
    <label htmlFor="SBP">{userData.SBP.name}</label>
<input 
    type="number" 
    value={userData.SBP.value}
    onChange={(e)=>onchangeinputdata(e.target.value ,"SBP")}
    id="SBP"
    placeholder={userData.SBP.name} />
    
</div>


<div className={styless['form-control']}>
    <label htmlFor="DBP">{userData.DBP.name}</label>
<input 
    type="number" 
    value={userData.DBP.value}
    onChange={(e)=>onchangeinputdata(e.target.value ,"DBP")}
    id="DBP"
    placeholder={userData.DBP.name} />
    
</div>


<div className={styless['form-control']}>
    <label htmlFor="PR">{userData.PR.name}</label>
<input 
    type="number" 
    value={userData.PR.value}
    onChange={(e)=>onchangeinputdata(e.target.value ,"PR")}
    id="PR"
    placeholder={userData.PR.name} />
    
</div>

<div className={styless['form-control']}>
    <label htmlFor="SR">{userData.SR.name}</label>
<input 
    type="number" 
    value={userData.SR.value}
    onChange={(e)=>onchangeinputdata(e.target.value ,"SR")}
    id="SR"
    placeholder={userData.SR.name} />
    
</div>
<br></br>
<br></br>


<button type="button"  onClick={()=>submitdata}>Submit Helth Data</button>

</form>


        </div>
    )
};

export default EditHealthData;