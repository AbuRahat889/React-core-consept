
export default function  UserName({names}){
    const {name, email} = names;
    return(
        <div className="box">
            <h3>Name : {name} </h3>
            <p>Email :{email} </p>
        </div>
    )
}