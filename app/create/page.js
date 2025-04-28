// 'use client'

// import {useState} from 'react'
// import {useRouter} from 'next/navigation'
// import axios from 'axios'

// export default function CreateProfile(){
//     const [username, setUsername] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [role, setRole] = useState('user')
//     const [avatar, setAvatar] = useState('')  

//     const handleSubmissions = async (e) => {
//         e.preventDefault()
//         await axios.post('/api/users',{username, email, password, role, avatar})
//         alert('Profile created! Welcome to Fan Trove!')
//         setUsername('')
//         setEmail('')
//         setPassword('')
//         setRole('user')
//         setAvatar('')
//     }
    
//     return (
//         <div className="max-w-5xl mx-auto py-10">
//             <h1 className="text-3xl text-[#26547C] mb-6">Create Your Profile Here!</h1>
//             <form onSubmit={handleSubmissions} className="space-y-4" >
//                 <input className="w-full border px-3 py-2 rounded" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
//                 <input type="email" className="w-full border px-3 py-2 rounded" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
//                 <input type="password" className="w-full border px-3 py-2 rounded" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/> 
//                 <select className="w-full border px-3 py-2 rounded" value={role} onChange={(e) => setRole(e.target.value)} required>
//                     <option value="user">User</option>
//                     <option value="admin">Admin</option>
//                 </select>
//                 <input className="w-full border px-3 py-2 rounded" placeholder="Avatar URL" value={avatar} onChange={(e) => setAvatar(e.target.value)} required/>
//                 <button type="submit" className="bg-[#26547C] text-white px-4 py-2 rounded">Create Profile</button>
//             </form>
//             </div>
//     )
// }


'use client'

import {useState} from 'react'
import axios from 'axios'

export default function CreateProfile(){
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('user')
    const [avatar, setAvatar] = useState('')  

    const handleSubmissions = async (e) => {
        e.preventDefault()
        await axios.post('/api/users',{username, email, password, role, avatar})
        alert('Profile created! Welcome to Fan Trove!')
        setUsername('')
        setEmail('')
        setPassword('')
        setRole('user')
        setAvatar('')
    }
    
    return (
        <div className="max-w-5xl mx-auto py-10">
            <h1 className="text-3xl text-[#26547C] mb-6">Create Your Profile Here!</h1>
            <form onSubmit={handleSubmissions} className="space-y-4" >
                <input
                    className="w-full border px-3 py-2 rounded text-[#26547C] placeholder-[#8D99AE]"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="email"
                    className="w-full border px-3 py-2 rounded text-[#26547C] placeholder-[#8D99AE]"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    className="w-full border px-3 py-2 rounded text-[#26547C] placeholder-[#8D99AE]"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                /> 
                <select
                    className="w-full border px-3 py-2 rounded text-[#26547C]"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
                <input
                    className="w-full border px-3 py-2 rounded text-[#26547C] placeholder-[#8D99AE]"
                    placeholder="Avatar URL"
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="bg-[#26547C] text-white px-4 py-2 rounded hover:bg-[#FF6B6B]"
                >
                    Create Profile
                </button>
            </form>
        </div>
    )
}
