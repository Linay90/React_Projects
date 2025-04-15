const getPredictedAge=async(name:string)=>{
    const res=await fetch(`https://api.agify.io/?name=${name}`);
    return res.json()
}
interface params{
    params:{name:string};
}
export default async function Page({params}:any){
    const ageData=getPredictedAge(params.name)
    const[age]=await Promise.all([ageData])

    return(
        <div>
            <div>Personal info</div>
            <div>Age:{age?.age}</div>
        </div>
    )
}