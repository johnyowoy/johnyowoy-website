import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'IT 隨手筆記',
    Svg: require('@site/static/img/pixiv_artworks_125494485.svg').default,
    description: (
      <>
        紀錄我的IT實戰經驗，回顧過去的點點滴滴。
      </>
    ),
  },
  {
    title: '生活隨手紀錄',
    Svg: require('@site/static/img/pixiv_artworks_125465431.svg').default,
    description: (
      <>
        紀錄我生活遇到的經歷。
      </>
    ),
  },
  {
    title: '關於我自己',
    Svg: require('@site/static/img/pixiv_artworks_112490396.svg').default,
    description: (
      <>
        ...
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
