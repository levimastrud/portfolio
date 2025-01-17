import '../About/About.scss'
import levi from '../assets/levi.png'
import linkedInIcon from '../assets/linkedIn.svg'
import mailIcon from '../assets/mailIcon.svg'
import twitterIcon from '../assets/twitterIcon.svg'
import gitHubIcon from '../assets/github-icon.svg'
import htmlIcon from '../assets/LanguageIcons/html-icon-01.svg'
import cssIcon from '../assets/LanguageIcons/css-icon-01.svg'
import jsIcon from '../assets/LanguageIcons/js-icon-01.svg'
import pythonIcon from '../assets/LanguageIcons/python-icon-01.svg'
import csharpIcon from '../assets/LanguageIcons/c-sharp-icon-01.svg'


function About() {
    return (
        <div className="about-wrapper">
            <div className='image-wrapper'>
                <img alt='levi' className='self-portrait' src={levi} />
                <div className='about-details'>
                    <h3>Levi<br />Mastrud</h3>
                    <h6>Fargo, North Dakota</h6>
                    <div className="social-link-wrapper about">
                        <a className='social-link' target='_blank' href='https://www.linkedin.com/in/levimastrud/'>
                            <img alt='linkedIn icon' src={linkedInIcon} />
                        </a>
                        <a className='social-link' href="mailto:levimastrud@gmail.com">
                            <img alt='email icon' src={mailIcon} />
                        </a>
                        <a className='social-link' target='_blank' href='https://github.com/levimastrud'>
                            <img alt='github icon' src={gitHubIcon} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="about-text-wrapper">
                <p><span>Hello there!</span> I'm Levi, a passionate software developer with a deep appreciation for <strong>design</strong>. I believe in the powerful combination of creativity and technology, and I'm excited about the endless possibilities that software brings to the table.</p>
                <div className='languages-block'>
                    <h4 className='block-header'>Languages</h4>
                    <div className='language-icons'>
                        <img alt='html icon' src={htmlIcon} />
                        <img alt='css icon' src={cssIcon} />
                        <img alt='javascript icon' src={jsIcon} />
                        <img alt='python icon' src={pythonIcon} />
                        <img alt='c sharp icon' src={csharpIcon} />
                    </div>
                </div>
                <p>I thrive on the thrill of <strong>learning</strong> and <strong>experimenting</strong> with new technologies. Whether it's diving into cutting-edge frameworks or exploring innovative solutions, I love embracing <strong>challenges</strong> and taking risks to push the boundaries of what's possible.</p>
                <div className='languages-block'>
                    <h4 className='block-header'>Years of Experience</h4>
                    <h4 className='experience-years'>3+</h4>
                </div>
                <p>Join me as I navigate the ever-evolving world of software development, embracing new technologies and pushing the boundaries of innovation. Let's build something extraordinary <strong>together!</strong></p>
            </div>
        </div>
    )
}

export default About;