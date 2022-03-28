import IRole from '../interfaces/IRole'

const Role = ({ role }: { role: IRole }) => {
  return (
    <div className='bg-black p-2 w-fit'>
      {role.roleEmoji} {role.roleName}
    </div>
  )
}

export default Role
