export default function Friend({ friend }) {
    const { name, email,phone } = friend;
    const friendStyle={
        border:'1px solid blue',
        marginBottom:'20px',
    }
    return (
        <div style={friendStyle}>
            <h4 style={{color:'red'}}>Name : {name}</h4>
            <h5 style={{color:'cyan'}}>Email : {email}</h5>
            <h6 style={{color:'yellow'}}>Phone : {phone}</h6>
        </div>
    )
}