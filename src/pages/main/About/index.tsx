import { Link } from 'react-router-dom';
import { BiGridAlt, BiCloudUpload, BiQrScan } from 'react-icons/bi';
import { FaPlay, FaRocket, FaScrewdriverWrench } from 'react-icons/fa6';
import { GiCheckMark } from 'react-icons/gi';
import { GrMagic } from 'react-icons/gr';

import PricePlans from '@/components/pages/about/PricePlans';

import DemoVideo from '@/assets/videos/demo.mp4';
import PlanIcon from '@/assets/svgs/planning.svg';
import OutcomeIcon from '@/assets/svgs/outcome.svg';
import MoneyIcon from '@/assets/svgs/money.svg';
import classes from './index.module.scss';

function About() {
  return (
    <div className={classes.root}>
      <div className={classes.blackback}>
        <div className={classes.container}>
          <div className={classes.analysis}>
            <div className={classes.text}>
              <p className={classes.title}>Facial analysis reimagined</p>
              <span className={classes.emphasize}>Satisfy your curiosity</span>
            </div>
            <div className={classes.video}>
              <video src={DemoVideo} controls></video>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.harness}>
          <p>Computer vision & Machine learning technology harnessed</p>
          <div className={classes.animation}>
            <div>
              <span>
                <FaPlay />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.blackback}>
        <div className={classes.container}>
          <div className={classes.streamline}>
            <div className={classes.assessments}></div>
            <div className={classes.instructions}>
              <p className={classes.primaryheader}>
                Streamline your{' '}
                <span className={classes.emphasize}>self-improvement</span>{' '}
                journey
              </p>
              <p className={classes.primarybody}>
                Harmony stands at the forefront of facial attractiveness
                technology, pioneering the accurate quantification and
                systematic analysis of facial beauty. By harnessing
                state-of-the-art empirical data sourced from Orthodontic,
                Maxillofacial, and cosmetic surgery literature, Harmony offers
                unparalleled insights into facial aesthetics
              </p>
              <div className={classes.secondarypanel}>
                <div>
                  <p className={classes.header}>
                    <span className={classes.emphasize}>
                      Unleash Your potential
                    </span>
                  </p>
                  <p className={classes.body}>
                    Harmony's analysis tool evaluates your facial features and
                    provides actionable insights for enhancement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.cost}>
          <div className={classes.text}>
            <p className={classes.title}>
              High cost information made{' '}
              <span className={classes.emphasize}>accessible</span>
            </p>
            <p className={classes.subtitle}>
              Unlock valuable insights without the hefty price tag. Harmony
              offers access to the kind of information typically reserved for
              costly consultations with surgeons.
            </p>
          </div>
        </div>
        <div className={classes.facials}>
          <p className={classes.title}>
            <span className={classes.emphasize}>Novel</span> facial assessments
          </p>
          <div className={classes.assessments}>
            <div className={classes.assess}>
              <span>
                <FaRocket />
              </span>
              <p>10x+ more facial assessments than competitors</p>
            </div>
            <div className={classes.assess}>
              <span>
                <FaScrewdriverWrench />
              </span>
              <p>Robust ML algorithms catering to your specific face</p>
            </div>
            <div className={classes.assess}>
              <span>
                <BiGridAlt />
              </span>
              <p>
                80 combined facial landmarks across the front and side profile
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.blackback}>
        <div className={classes.container}>
          <div className={classes.betatest}>
            <div className={classes.text}>
              <p className={classes.title}>
                Beta testing <span className={classes.emphasize}>NOW</span>
              </p>
              <ul className={classes.primarylist}>
                <li>
                  Continual updates to ensure accuracy of landmark mapping and
                  up-to-date clinical research.
                </li>
              </ul>
              <span className={classes.emphasize}>
                Full app launch will include the following features and
                analyses:
              </span>
              <ul className={classes.secondarylist}>
                {[
                  'Idealize',
                  'Facial Hotmap',
                  'Facial dimrphism',
                  'Facial angularity',
                  'Health, skin, and hair',
                  'Facial coloring',
                ].map((item: string, index: number) => (
                  <li key={index}>
                    <GiCheckMark />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={classes.picture}>
              <div className={classes.arriving}>
                <span className={classes.playIcon}>
                  <FaPlay />
                </span>
                <p>Arriving in 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.visit}>
          <div className={classes.blog}>
            <p className={classes.title}>Discover Your Facial Attractiveness</p>
            <Link to="/harmony">Try Harmony</Link>
          </div>
          <div className={classes.steps}>
            <div>
              <span>
                <BiCloudUpload />
              </span>
              <p>Upload your photo</p>
            </div>
            <div>
              <span>
                <GrMagic className={classes.landmark} />
              </span>
              <p>Map landmarks</p>
            </div>
            <div>
              <span>
                <BiQrScan />
              </span>
              <p>Analyze your face</p>
            </div>
          </div>
        </div>
        <div className={classes.whyharmony}>
          <p>Why use Harmony?</p>
          <div className={classes.sections}>
            <div className={classes.section}>
              <p>Initial clinical consultation</p>
              <ul>
                <li>
                  Travel (often significant distances depending on the location
                  of the specialist)
                </li>
                <li>Lengthy consultation (1-3hrs).</li>
                <li>Non-exhaustive facial analysis.</li>
                <li>$100-500 consultation fee.</li>
                <li>Potential booking fees.</li>
                <li>Time consuming forms.</li>
              </ul>
            </div>
            <div className={classes.section}>
              <p>Other similar services</p>
              <ul>
                <li>Manually written reports.</li>
                <li>2+ week turnaround.</li>
                <li>$150-350 cost.</li>
                <li>Analyze only one set of photos per report.</li>
              </ul>
            </div>
            <div className={classes.section}>
              <p>Harmony</p>
              <ul>
                <li>
                  Report generation within seconds (instant turnaround times).
                </li>
                <li>$300+ of value in ONE report.</li>
                <li>Create an unlimited amount of reports.</li>
                <li>Analyze an unlimited amount of your photos.</li>
                <li>Constant innovation and added features.</li>
              </ul>
            </div>
            <div className={classes.section}>
              <p>Disclaimer</p>
              <p className={classes.text}>
                Harmony is meant to assist you in addressing your surgical and
                aesthetic concerns. A discussion of your medical history,
                operation costs, expectations, risks, and physical examinations
                must be done in person with a licensed practitioner.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.blackback}>
        <div className={classes.container}>
          <div className={classes.pricing}>
            <p className={classes.title}>Pricing</p>
            <p className={classes.subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            </p>
            <PricePlans />
          </div>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.b2b}>
          <div className={classes.content}>
            <div className={classes.integration}>
              <p className={classes.title}>
                <span className={classes.emphasize}>
                  Tailored Integration Solutions
                </span>{' '}
                for Businesses
              </p>
              <p className={classes.text}>
                We offer flexible API solutions to enhance your digital
                offerings, with scalable pricing to match.
              </p>
            </div>
            <div className={classes.target}>
              <p className={classes.title}>Who's it for?</p>
              <ul>
                <li>Beauty apps (web & mobile)</li>
                <li>Plastic surgery clinics</li>
                <li>Aesthetic clinics</li>
                <li>And more</li>
              </ul>
            </div>
          </div>
          <div className={classes.sender}>
            <p className={classes.describe}>
              Let's discuss how we can support your business's growth and
              innovation.
            </p>
            <a className={classes.email}>sales@harmonyapp.ai</a>
          </div>
        </div>
      </div>
      <div className={classes.blackback}>
        <div className={classes.container}>
          <div className={classes.surgeons}>
            <p className={classes.title}>For Surgeons</p>
            <p className={classes.content}>
              Harmony intends to offer its services and third party licensing to
              plastic surgeons around the world. We are developing features and
              acquiring approval from the right entities to make that happen.
            </p>
            <ul>
              <li>
                <img src={PlanIcon} alt="Plan icon" />
                <p>Better planning</p>
              </li>
              <li>
                <img src={OutcomeIcon} alt="Outcome icon" />
                <p>Better outcomes</p>
              </li>
              <li>
                <img src={MoneyIcon} alt="Money icon" />
                <p>Better earnings</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
