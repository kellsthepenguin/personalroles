import { useRef, useState } from 'react'
import Roles from './components/Roles'
import IRole from './interfaces/IRole'

const circles = ['🔴', '🟠', '🟡', '🟢', '🔵', '🟣', '🟤', '⚫', '⚪']

const App = () => {
  const [roles, setRoles] = useState<IRole[]>([])
  const [color, setColor] = useState<string>('⚪')

  const roleNameInput = useRef<HTMLInputElement>(null)

  return (
    <div className='flex h-screen bg-[#23272a]'>
      <div className='m-auto text-white'>
        <p className='font-bold text-7xl'>Personal Roles Generator</p>
        <p>Roles</p>
        <Roles roles={roles} /> <br />
        {
          circles.map((circle) => <button
            className='bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded'
            onClick={() => setColor(circle)}>{circle}</button>
          )
        } <br />
        {color} &nbsp;
        <input className='text-black' placeholder='Role Name' ref={roleNameInput} /> <br />
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded'
          onClick={() => setRoles([...roles, { roleName: roleNameInput.current?.value!, roleEmoji: color }])}>
          Add Role
        </button> <br /> <br />
        Result: <br />
        <textarea className='text-black'
          rows={5}
          cols={50}
          value={`**PERSONAL ROLES**\n${roles.map((role) => `\`${role.roleEmoji} ${role.roleName}\``).join(' ')}`}
        />
      </div>
    </div>
  )
}

export default App
