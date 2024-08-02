// Linkをインポート
import Link from 'next/link'
import Image from 'next/image'

import styles from 'app/_styles/Footer.module.scss'



export const Footer = () => {
	return (
        <>
            <div className={styles.topMenu}>
                <div className={`${styles.topMenu__inner} ${styles.jsArea}`}>
                    <nav className={`${styles.topMenu__nav} ${styles.jsWrap}`}>
                        <a href="/contact"    className={`${styles.topMenu__item} ${styles.jsItem}`}>お問い合わせ</a>
                        <a href="/company"    className={`${styles.topMenu__item} ${styles.jsItem}`}>会社概要</a>
                        <a href="/seo-news"   className={`${styles.topMenu__item} ${styles.jsItem}`}>最新SEO情報</a>
                        <a                    className={`${styles.topMenu__item} ${styles.jsItem}`}>コラム</a>
                        <a href="/policy"     className={`${styles.topMenu__item} ${styles.jsItem}`}>個人情報保護方針</a>
                        <a href="/antisocial" className={`${styles.topMenu__item} ${styles.jsItem}`}>反社会的勢力への<br />対応方針</a>
                    </nav>
                </div>
            </div>
            
            <div className="bg-line">
                <div className="bg-line-y" />
                <div className="bg-line-x" />
            </div>
            <div id="js-mouse">CLICK<br /><span /></div>
		</>
	)
}

export default Footer;

