import { useRef, useState } from 'react'

import Button from './components/Button'
import Roles from './components/Roles'
import IRole from './interfaces/IRole'

import { Remarkable } from 'remarkable'

const circles = ['🔴', '🟠', '🟡', '🟢', '🔵', '🟣', '🟤', '⚫', '⚪']

const App = () => {
  const [roles, setRoles] = useState<IRole[]>([])
  const [color, setColor] = useState<string>('⚪')
  const roleNameInput = useRef<HTMLInputElement>(null)

  const md = new Remarkable({
    
  })

  const handleAddRole = () => setRoles([...roles, { roleName: roleNameInput.current?.value!, roleEmoji: color }])
  const getRawMarkup = (raw: string) => {
    return { __html: md.render(raw) }
  }

  return (
    <div className='flex h-screen bg-[#23272a]'>
      <div className='m-auto text-white'>
        <p className='font-bold text-7xl'>Personal Roles Generator</p>
        <p>Roles</p>
        <Roles roles={roles} /> <br />
        { circles.map((circle) => <Button onClick={() => setColor(circle)} innerText={circle} />) } <span className='block mb-2.5' />
        {color} &nbsp;
        <input className='text-black' placeholder='Role Name' ref={roleNameInput} /> <br />
        <Button onClick={handleAddRole} innerText='Add Role'/> <span className='block mb-2.5' />
        Result: <br />
        <textarea className='text-black'
          rows={5}
          cols={50}
          value={`**PERSONAL ROLES**\n${roles.map((role) => `\`${role.roleEmoji} ${role.roleName} \``).join(' ')}`}
        /> <br />

        Preview: <br />
        <div
          className='text-black bg-white max-w-7xl'
          dangerouslySetInnerHTML={getRawMarkup(`**PERSONAL ROLES**\n\n${roles.map((role) => `\`${role.roleEmoji} ${role.roleName} \``).join(' ')}`)!} 
        />
      </div>
    </div>
  )
}

export default App
