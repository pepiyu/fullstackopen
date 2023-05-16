const Total = ({parts}) => {
    
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
    
    <b>Number of exercises {total}</b>
  )}

  export default Total