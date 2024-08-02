// Next コンポーネント
import type { Metadata } from "next";
import Image from "next/image";

import styles from 'app/_styles/Front.module.scss'

// メタ設定
export const metadata: Metadata = {
	title       : 'TOP',
	description : 'ディスクリプション',
};

// 画像
import linkIcon from 'app/_images/link-blue.svg';
import ourMission from 'app/_images/our-mission.png';

export default function Front() {
	return (
		<>
            <div className={styles.mainWrapper}>
            
                <div className={styles.fixedBg}>
                    <video autoPlay muted playsInline loop src="/video/main-visual_light2.mp4" ></video>
                </div>

                <main>
                    <div className="main-visual">
                        <div className="main-visual__inner">
                            <div className="main-visual__text ">
                                <span className="blue" data-text="私たちは">
                                私たちは
                                </span>
                                <br />
                                <span className="white">東京</span>
                                <span className="blue">にある</span>
                                <br />
                                <span className="white">ウェブ</span>
                                <span className="blue">事業支援の</span>
                                <br />
                                <span className="white">株式会社</span>
                                <span className="blue">です</span>
                            </div>
                        </div>
                    </div>
                    <div className="topService">
                        <div className="topService__inner">
                            <div className="topServiceItem item01 js-fade-up">
                                <div className="topServiceItem__title">
                                    <a href="/web-site" className="topServiceItem__subTitle">
                                        サイト制作＆運用について
                                    </a>
                                    <div className="topServiceItem__mainTitle">
                                        <div className="eachTextAnime">サイト制作＆運用</div>
                                    </div>
                                </div>

                                <div className="topServiceItem__text rellax" data-rellax-percentage="0.5" data-rellax-speed="3.5">
                                    <p>
                                        私たちはSEOを確固たるバリューとし、検索キーワードを何千と意識したサイト構造と建て付け、コンテンツ設計、コーディングをしています。検索エンジンが推奨するコーディングや構成、構造化データ、表示速度等、多岐に渡って検証しながらサイト制作し、制作後も常に監視・チェックすることで、SEOに長けたサイト制作と運用を実現しています。
                                    </p>
                                    <p>
                                        仕様要件時にSEO設計方針、コンテンツ設計方針、コーディング設計方針を打ち出し、ご納得いただきながら制作していきますので、費用と運用の透明性にも自信があります。
                                    </p>
                                </div>
                                <div className="topServiceItem__circle c1 js-fade-zoom"></div>
                            </div>

                            <div className="topServiceItem item02 js-fade-up">
                                <div className="topServiceItem__title ">
                                    <a href="/seo" className="topServiceItem__subTitle">
                                        コンサルテーションについて
                                    </a>
                                    <div className="topServiceItem__mainTitle">
                                        <span>SEO</span>
                                        <div className="eachTextAnime">コンサルテーション</div>
                                    </div>
                                </div>
                                <div
                                className="topServiceItem__text rellax"
                                data-rellax-percentage=".8"
                                data-rellax-speed="3.5"
                                >
                                    <p>
                                        SEO歴15年以上のメンバーたちによる10年以上の会社実績があり、取引業界は多岐に渡ります。超大手人材会社をはじめ、超大手不動産会社、百貨店EC等のいわゆるDB系SEOならではのノウハウの他、B2B系(物流、製造、SaaS…)等のノウハウ、クリニック、買取系、金融系等、数多くのノウハウがあり、そのいずれにおいても検索キーワード順位だけでなく、流入数やコンバージョン数まで効果と検証を繰り返しています。
                                    </p>
                                    <p>
                                        私たちのSEOは、検索体験を良くするために検索者を捉えたマーケティング設計と、検索エンジンからの評価を受けやすくするためのユーザビリティ設計の両軸でコンサルテーションを行っており、“早く結果を出す”だけでなく“長く結果を出す”ことに重きを置いています。
                                    </p>
                                </div>
                                <div className="topServiceItem__circle c2 js-fade-zoom" />
                            </div>
                            <div className="topServiceItem item03 js-fade-up">
                                <div className="topServiceItem__title ">
                                <a className="topServiceItem__subTitle">
                                    サービス「士業ドットコム」について
                                </a>
                                <div className="topServiceItem__mainTitle">
                                    <span
                                    className="rellax"
                                    data-rellax-percentage=".8"
                                    data-rellax-speed="3.5"
                                    >
                                    CMS設計
                                    </span>
                                    <div className="eachTextAnime">ワードプレス設計</div>
                                </div>
                                </div>
                                <div
                                className="topServiceItem__text rellax"
                                data-rellax-percentage=".8"
                                data-rellax-speed="3.5"
                                >
                                <span className="sp-cms">CMS設計</span>
                                <p>
                                    私たちは業界に特化して、簡易サイトや顧客情報のDB繋ぎ込み構築を廉価で提供できるようCMSの開発とサービス提供を行っています。
                                    <br />
                                    特に“個”が重要視される士業(弁護士、税理士、公認会計士、社労士、行政書士等)ビジネスにおいては、サイト制作にかける費用と時間を短縮すべく、専用サービスを開発・ご提供しています。
                                </p>
                                <p>
                                    ワードプレスを駆使しつつ、管理画面さえも余計な情報をそぎ落とすことで、誰しも使いやすく運用しやすいプラットホームを実現しています。
                                </p>
                                </div>
                                <div className="topServiceItem__circle c3 js-fade-zoom" />
                            </div>
                            <div className="topSerciveColumns js-fade-in">
                                <div
                                className="topServiceItemSmall item01 "
                                data-rellax-percentage="0.5"
                                data-rellax-speed={4}
                                >
                                <div className="topServiceItemSmall__title">
                                    <a className="topServiceItemSmall__subTitle">
                                    メディア事業について
                                    </a>
                                    <span className="topServiceItemSmall__mainTitle">メディア事業</span>
                                </div>
                                <div className="topServiceItemSmall__text">
                                    <p>
                                    海外向けSEOメディアや
                                    <br />
                                    農業関連向け求人サイト等、様々なメディアを運用しており、その目的はビジネスだけでなく自分たちのメディアでSEOのPDCAを回すことにもあります。そして、自分たちで仮説・検証したノウハウを基にSEOコンサルテーションに役立てる仕組み作りを実現しています。
                                    </p>
                                </div>
                                <div className="topServiceItemSmall__circle c4" />
                                </div>
                                <div
                                className="topServiceItemSmall item02 "
                                data-rellax-percentage="0.5"
                                data-rellax-speed={4}
                                >
                                <div className="topServiceItemSmall__title">
                                    <a className="topServiceItemSmall__subTitle">
                                    ライティングについて
                                    </a>
                                    <span className="topServiceItemSmall__mainTitle">ライティング</span>
                                </div>
                                <div className="topServiceItemSmall__text">
                                    <p>
                                    コラム記事のライティング中心に方針案作成や代行業を行っています。昨今では生成AIを活かしてライター個人の抜け漏れを防ぎ、主旨を完遂したり最低限要素の補完をしたりしています。とはいえ、最終的には検索者に新しい気付きや理解、行動を促す要素をコアコンピタンスとしたお取引を優先しています。
                                    </p>
                                </div>
                                <div className="topServiceItemSmall__circle c5" />
                                </div>
                                <div
                                className="topServiceItemSmall item03 "
                                data-rellax-percentage="0.5"
                                data-rellax-speed={4}
                                >
                                <div className="topServiceItemSmall__title">
                                    <span className="topServiceItemSmall__mainTitle">その他</span>
                                </div>
                                <div className="topServiceItemSmall__text">
                                    <p>
                                    私たちは取引先企業様に合わせて、マーケティング戦略代行や業務委託、営業代行や共同メディア戦略等、様々なビジネススキームや協業体制を敷いております。特にベンチャー企業様とのお取組みや新規事業に際して連携を強化しており、企業のエリアや所在地に関わらず、様々なご相談に応じています。
                                    </p>
                                </div>
                                <div className="topServiceItemSmall__circle c6" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="topBgTokyoWeb">
                        <div className="slick">
                        <span>TOKYO WEB</span>
                        <span>TOKYO WEB</span>
                        <span>TOKYO WEB</span>
                        <span>TOKYO WEB</span>
                        </div>
                    </div>
                    <div className="topNews">
                        <div className="topNews__inner ">
                        <div className="topNews__heading js-fade-up">お知らせ</div>
                        <ul className="topNews__list">
                            <li className="js-fade-right">
                                <time>2024.05.04</time>
                                <a
                                    href="https://twitter.com/NanafushigiCH/status/1786606748578787470"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    <span>
                                    株式会社Webnesdayおよび株式会社マジフシギと業務提携を締結いたしました
                                    </span>
                                    <Image src={linkIcon} className="link-icon" alt="icon" width={0} height={0} />
                                </a>
                            </li>
                            <li className="js-fade-left">
                                <time>2024.04.01</time>
                                <a className="no-link">
                                    <span>社名が「東京ウェブ株式会社」に変わりました</span>
                                    <Image src={linkIcon} className="link-icon" alt="icon" width={0} height={0} />
                                </a>
                            </li>
                            <li className="js-fade-right">
                                <time>2024.03.28</time>
                                <a href="/seo-login/">
                                    <span>お取引企業様専用SEO情報配信サービスをリリースしました</span>
                                    <Image src={linkIcon} className="link-icon" alt="icon" width={0} height={0} />
                                </a>
                            </li>
                            <li className="js-fade-left">
                                <time>2024.03.15</time>
                                <a href="/web-site/">
                                    <span>サイト制作事業ページを公開しました</span>
                                    <Image src={linkIcon} className="link-icon" alt="icon" width={0} height={0} />
                                </a>
                            </li>
                            <li className="js-fade-right">
                                <time>2024.03.11</time>
                                <a href="/seo/">
                                    <span>SEOコンサルテーション事業ページを公開しました</span>
                                    <Image src={linkIcon} className="link-icon" alt="icon" width={0} height={0} />
                                </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="topMessage">
                        <div className="topMessage__bg"></div>
                        <div className="topMessage__inner ">
                        <div className="topMessage__heading ">
                            <div>私たちの思い</div>
                        </div>
                        <div className="topMessage__headingSub ">
                            <Image src={ourMission} className="link-icon" alt="our mission" width={0} height={0} />
                        </div>
                        <div className="topMessage__text ">
                            <div className="each-anime-p">
                            <p>
                                目指すのはインターネットにおけるマッチングとエコシステムの最適化です。
                            </p>
                            <p>
                                非常に優れたサービスにも関わらず、宣伝する体力が無かったり
                                <br />
                                ウェブに手間をかけられなかったりするだけで
                                <br />
                                本当に合致したニーズに届かない、というのでは誰も得しません。
                            </p>
                            <p>
                                リテラシーの高い私たちだからこそできること。
                                <br />
                                それは、優れた企業サービスを適切にウェブ支援し、
                                <br />
                                適切な潜在顧客とのマッチングに尽力することだと思っています。
                            </p>
                            <p>
                                そして私たちが支援する企業サイトで合計1億コンバージョンになれば…
                                <br />
                                延べで日本全国民のエコシステムの最適化に繋がっているわけです。
                            </p>
                            <p>
                                こんな社会貢献意識を満たす活動は他になく、だからこそ
                                <br />
                                私たちはそれに向けて邁進の日々を送っています。
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </main>
            </div>
		</>
	);
}
