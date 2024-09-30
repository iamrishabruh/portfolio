import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import InstagramIcon from '@material-ui/icons/Instagram'
import './LeadershipContainer.css'

const LeadershipContainer = ({ leaderships }) => (
  <div className='leadership'>
    <h3>{leaderships.name}</h3>

    <p className='leadership__description'>{leaderships.description}</p>
    {leaderships.stack && (
      <ul className='leadership__stack'>
        {leaderships.stack.map((item) => (
          <li key={uniqid()} className='leadership__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}
    
    {leaderships.instaDemo && (
      <a
        href={leaderships.instaDemo}
        aria-label='insta demo'
        className='link link--icon'
      >
        <InstagramIcon />
      </a>
    )}
    
    {leaderships.sourceCode && (
      <a
        href={leaderships.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {leaderships.livePreview && (
      <a
        href={leaderships.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}

  </div>
)

export default LeadershipContainer