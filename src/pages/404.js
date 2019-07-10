import notfindStyles from './404.css'
import Link from 'umi/link'

export default () => {
  return (
    <div>
      <Link to="/">
        <div className={notfindStyles.picture}/>
      </Link>
    </div>
  )
}
