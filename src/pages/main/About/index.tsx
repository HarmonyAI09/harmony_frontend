import clsx from 'clsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiGridAlt, BiCloudUpload, BiQrScan } from 'react-icons/bi';
import {
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaRocket,
  FaScrewdriverWrench,
} from 'react-icons/fa6';
import { GiCheckMark } from 'react-icons/gi';
import { GrMagic } from 'react-icons/gr';
import { motion } from 'framer-motion';

import PricePlans from '@/components/pages/about/PricePlans';

import Video1 from '@/assets/videos/video1.mp4';
import Video2 from '@/assets/videos/video2.mp4';
import Video3 from '@/assets/videos/video3.mp4';
import Video4 from '@/assets/videos/video4.mp4';
import PlanIcon from '@/assets/svgs/planning.svg';
import OutcomeIcon from '@/assets/svgs/outcome.svg';
import MoneyIcon from '@/assets/svgs/money.svg';

import Slide1 from '@/assets/images/slides/1.png';
import Slide2 from '@/assets/images/slides/2.png';
import Slide3 from '@/assets/images/slides/3.png';
import Slide4 from '@/assets/images/slides/4.png';
import Slide5 from '@/assets/images/slides/5.png';
import Slide6 from '@/assets/images/slides/6.png';
import Slide7 from '@/assets/images/slides/7.png';
import classes from './index.module.scss';
import ImageSlide from '@/components/common/ImageSlide';

const introductions = [
  {
    title: 'Upload photos and map facial  landmarks',
    subtitles: [
      'Upload photos of your choosing and adjust them with the cropping tool if needed.',
      'AI will map your landmarks. However, during the beta you will have to manually adjust the points for precision. This is a 3-5 minute process depending on how experienced the user is. As we improve our model, manual mapping will become unnecessary.',
    ],
    video: Video1,
  },
  {
    title: 'View your facial analysis report',
    subtitles: [
      'View images of each facial assessment, what they mean, and any improvement advice if applicable.',
      'Make adjustments to your landmarks and instantly update your report.',
    ],
    video: Video2,
  },
  {
    title: 'Save user profiles',
    subtitles: [
      'Quickly switch between up to 30 saved profiles and view old reports.',
    ],
    video: Video3,
  },
  {
    title: 'Download an excel file of your report',
    subtitles: [
      "If you need an excel file of your results for whatever reason, we've got you covered. Download your report from your user profile and import it to google sheets or excel.",
    ],
    video: Video4,
  },
];
const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7];

function About() {
  return (
    <div className={classes.root}>
      <div className={classes.blackback}>
        <div className={classes.container}>
          <div className={classes.introduction}>
            <p className={classes.title}>Facial analysis reimagined</p>
            <div className={classes.videos}>
              {introductions.map((item: any, index: number) => (
                <div key={index} className={classes.video}>
                  <div className={classes.description}>
                    <p>{item.title}</p>
                    <ul>
                      {item.subtitles.map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <video src={item.video} controls></video>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.harness}>
          <div className={classes.detail}>
            <p className={classes.title}>
              Computer vision & Machine learning technology harnessed
            </p>
            <p className={classes.subtitle}>
              View hyper-attractive variations of your face. Gain insight for
              improvement or simply have fun and share your photos with your
              friends.
            </p>
            <div className={classes.idealize}>
              <span>Idealize coming soon.</span>
              <div>
                <p>
                  <span></span>Ultra realistic AI photos.
                </p>
                <p>
                  <span></span>Idealize retains your photo’s original
                  background, with no uncanny changes in setting.
                </p>
                <p>
                  <span></span>Retain your key distinguishing features (i.e.,
                  ethnicity, hair type, hair style, and hair color).
                </p>
              </div>
            </div>
          </div>
          <div className={classes.animation}>
            <ImageSlide images={slides} />
          </div>
        </div>
      </div>
      <div className={classes.blackback}>
        <div className={classes.container}>
          <div className={classes.streamline}>
            <div className={classes.assessments}>
              <p>How do I improve my face?</p>
            </div>
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
          <div className={classes.compare}></div>
        </div>
        <div className={classes.facials}>
          <p className={classes.title}>
            <span className={classes.emphasize}>Novel</span> facial assessments
          </p>
          <div className={classes.assessments}>
            <motion.div className={classes.assess} whileHover={{ scale: 1.05 }}>
              <span>
                <FaRocket />
              </span>
              <p>10x+ more facial assessments than competitors</p>
            </motion.div>
            <motion.div className={classes.assess} whileHover={{ scale: 1.05 }}>
              <span>
                <FaScrewdriverWrench />
              </span>
              <p>Robust ML algorithms catering to your specific face</p>
            </motion.div>
            <motion.div className={classes.assess} whileHover={{ scale: 1.05 }}>
              <span>
                <BiGridAlt />
              </span>
              <p>
                80 combined facial landmarks across the front and side profile
              </p>
            </motion.div>
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
                  'Facial dimorphism',
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
              <span>
                <FaPlay />
              </span>
              <p>Arriving soon in 2025</p>
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
            <motion.div whileHover={{ scale: 1.05 }}>
              <span>
                <BiCloudUpload />
              </span>
              <p>Upload your photo</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <span>
                <GrMagic className={classes.landmark} />
              </span>
              <p>Map landmarks</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <span>
                <BiQrScan />
              </span>
              <p>Analyze your face</p>
            </motion.div>
          </div>
        </div>
        <div className={classes.whyharmony}>
          <p>Why use Harmony?</p>
          <div className={classes.sections}>
            <motion.div
              className={classes.section}
              whileHover={{ scale: 1.02 }}
            >
              <p>Initial clinical consultation</p>
              <ul>
                <li>
                  Travel (often significant distances depending on the location
                  of the specialist).
                </li>
                <li>Lengthy consultation (1-3hrs).</li>
                <li>Non-exhaustive facial analysis.</li>
                <li>$100-500 consultation fee.</li>
                <li>Potential booking fees.</li>
                <li>Time consuming forms.</li>
              </ul>
            </motion.div>
            <motion.div
              className={classes.section}
              whileHover={{ scale: 1.02 }}
            >
              <p>Other similar services</p>
              <ul>
                <li>Manually written reports.</li>
                <li>2+ week turnaround.</li>
                <li>$150-350 cost.</li>
                <li>Analyze only one set of photos per report.</li>
              </ul>
            </motion.div>
            <motion.div
              className={clsx(classes.section, classes.harmony)}
              whileHover={{ scale: 1.02 }}
            >
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
            </motion.div>
            <motion.div
              className={classes.section}
              whileHover={{ scale: 1.02 }}
            >
              <p>Disclaimer</p>
              <p className={classes.text}>
                Harmony is meant to assist you in addressing your surgical and
                aesthetic concerns. A discussion of your medical history,
                operation costs, expectations, risks, and physical examinations
                must be done in person with a licensed practitioner.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className={classes.blackback}>
        <div className={classes.container}>
          <div className={classes.pricing}>
            <p className={classes.title}>Pricing</p>
            <p className={classes.subtitle}></p>
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
