interface User{
  id:number,
  name:string,
  email:string
}

interface UserList{
  users:User[];
}

const usersData: User[] = [
  {
    id: 1,
    name: 'Alice',
    email: 'alice@example.com',
  },
  {
    id: 2,
    name: 'Bob',
    email: 'bob@example.com',
  },
];


const App=()=>{
  return(<div>
 <div>Hello</div>
  </div>)
}


export default App;
