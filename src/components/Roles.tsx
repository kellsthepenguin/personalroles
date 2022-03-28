import IRole from '../interfaces/IRole'
import Role from './Role'

const Roles = ({ roles }: { roles: IRole[] }) => {
  return (
    <div className='flex gap-2 flex-wrap max-w-7xl'>
      {roles.map((role) => <Role role={role} />)}
    </div>
  )
}

export default Roles
