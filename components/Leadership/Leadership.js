import uniqid from 'uniqid'
import { leadership } from '../../portfolio'
import LeadershipContainer from '../LeadershipContainer/LeadershipContainer'
import './Leadership.css'

const Leadership = () => {
  if (!leadership.length) return null

  return (
    <section id='leadership' className='section leadership'>
      <h2 className='section__title'>Leadership & Community</h2>

      <div className='leadership__grid'>
        {leadership.map((leaderships) => (
          <LeadershipContainer key={uniqid()} leaderships={leaderships} />
        ))}
      </div>
    </section>
  )
}

export default Leadership