import { Link } from 'react-router-dom';
import { BiGridAlt, BiCloudUpload, BiQrScan } from 'react-icons/bi';
import { FaPlay, FaRocket, FaScrewdriverWrench } from 'react-icons/fa6';
import { GiCheckMark } from 'react-icons/gi';
import { GrCheckmark, GrMagic } from 'react-icons/gr';

import { FREE_FEATURES, PRO_FEATURES } from '@/constants/price';
import Button from '@/components/forms/Button';

import DemoVideo from '@/assets/videos/demo.mp4';
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
      </div>
      <div className={classes.blackback}>
        <div className={classes.container}>
          <div className={classes.pricing}>
            <p className={classes.title}>Pricing</p>
            <p className={classes.subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            </p>
            <div className={classes.plans}>
              <div className={classes.free}>
                <p className={classes.name}>Free</p>
                <div className={classes.divider} />
                <p className={classes.price}>
                  $0<span>/month</span>
                </p>
                <ul>
                  {FREE_FEATURES.map((feature: string, index: number) => (
                    <li key={index}>
                      <GrCheckmark />
                      <p>{feature}</p>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outlined"
                  color="secondary"
                  className={classes.freeBtn}
                >
                  Get started for free
                </Button>
              </div>
              <div className={classes.premium}>
                <p className={classes.name}>Pro</p>
                <div className={classes.divider} />
                <p className={classes.price}>
                  $15
                  <span>/month</span>
                </p>
                <ul>
                  {PRO_FEATURES.map((feature: string, index: number) => (
                    <li key={index}>
                      <GrCheckmark />
                      <p>{feature}</p>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="contained"
                  color="success"
                  className={classes.proBtn}
                >
                  Upgrade plan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.b2b}>
          <p className={classes.title}>
            Tailored Integration Solutions for{' '}
            <span className={classes.emphasize}>Businesses</span>
          </p>
          <p className={classes.content}>
            We offer flexible API solutions to enhance your digital offerings,
            with scalable pricing to match. Let's discuss how we can support
            your business's growth and innovation.
          </p>
          <p className={classes.sender}>sales@harmonyapp.ai</p>
        </div>
      </div>
    </div>
  );
}

export default About;
