const Button = ({text, color = 'black', children}) => {
  return <button style={{ color: color }}>
    {text} - {color.toUpperCase()}
    {children}
    {/* jsx에 호출한 객체에 children 속성이 없을 경우 undefined로 대체된다. */}
  </button>
}
export default Button;