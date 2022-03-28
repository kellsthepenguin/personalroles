const Button = ({ innerText, onClick }: { innerText: string, onClick: () => any }) => {
  return (
    <button className='bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded' onClick={onClick}>
      {innerText}
    </button>
  )
}

export default Button
