

const HomeButtons = ({name,onClick}) => {
  return (
    <button className="btn btn-active btn-accent text-xl" onClick={onClick}>{name}</button>
  )
}

export default HomeButtons