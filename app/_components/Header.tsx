// Linkをインポート
import Link from 'next/link'
import Image from 'next/image'
import styles from 'app/_styles/Header.module.scss'

// 変数
import hamImage from 'app/_images/ham.png';
import hamImageBlue from 'app/_images/ham-blue.png';
import logoWhite from 'app/_images/logo-white.svg';
import companyName from 'app/_images/company-name.png';

export const Header = () => {

	return (
        <>
            <header className={styles.header}>
                <div className={styles.header__inner}>
                    <div className={`${styles.header__menu} ${styles.navIcon}`}>
                        <Image 
                            src={hamImage}
                            width={0}
                            height={0}
                            alt=""
                        />
                        <Image
                            src={hamImageBlue}
                            width={0}
                            height={0}
                            alt=""
                        />
                    </div>
                </div>
            </header>

            <div className={`${styles.hamMenu} ${styles.close}`}>
                <ul>
                    <li><a href="/contact">お問い合わせ</a></li>
                    <li><a href="/web-site">サイト制作事業</a></li>
                    <li><a href="/seo">SEOコンサルテーション事業</a></li>
                    <li><a href="#">メディア事業</a></li>
                    <li><a href="#">ライティング事業</a></li>
                    <li><a href="/company">会社概要</a></li>
                    <li><a href="/seo-news">最新SEO情報</a></li>
                    <li><a href="#">コラム</a></li> 
                    <li><a href="/policy">個人情報保護方針</a></li>
                    <li><a href="/antisocial">反社会的勢力に対する方針</a></li>
                </ul>
            </div>

            <div className={styles.fixedContact} >
                <a href="/contact" >CONTACT</a>
            </div>


            <h1 className={styles.fixedLogo}>
                <a href="/" className={styles.fixedLogo__inner}>
                    <Image
                        src={logoWhite}
                        width={0}
                        height={0}
                        alt="東京ウェブ株式会社"
                    />
                    <span className={styles.companyName}>
                        &copy;
                        <Image
                            src={companyName}
                            width={0}
                            height={0}
                            alt="東京ウェブ株式会社"
                        />
                    </span>
                </a>
            </h1>



        </>
	)
}

export default Header;