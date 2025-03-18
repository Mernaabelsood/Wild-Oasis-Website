import Counter from "@/app/_components/Counter";

// export default async function Page(){

//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
// const data = await res.json();
// console.log(data);

// //this is the first time we're able to fetch data using react component without using useEffect or react query this is the power of server component
// //to add some activity we'll use client component
// //so we'll use both client and server components and create a dynamic page with client and server components
//     return(
//         <div>  
//         <h1>cabins</h1>
        
//         <ul> {data.map(user => <li key={user.id}> {user.name}</li>)}
        
//         </ul>
//         <Counter/>
//         </div>

//     )
// }

export default function Page(){



    return(
        <div>  
        <h1>cabins</h1>
        
   
        </div>

    )
}


