import React from "react";
import classnames from "classnames/bind";
import styles from "./Service.module.scss";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import images from "../../assets/img";

import { useTranslation } from 'react-i18next';

const cx = classnames.bind(styles);

const Service = () => {
    const { t } = useTranslation()
    return (
        <main className={cx("service-page")}>
            <div className="wrapper">
                <div className="title-page p-ani-fadeInUp p-delay_1s">{t('main.service_page.title_page')}</div>
                <div className="sub-title-page p-ani-fadeInUp p-delay_3s">{t('main.service_page.sub_title_page')}</div>

                <div className="info-box p-ani-fadeInUp p-delay_1s">
                    <div className={cx("flex", "flex-justify")}>
                        <Popup
                            trigger={
                                <div className={cx("box", "p-ani-fadeInScale", "p-delay_1s")}>
                                    <figure>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 576 512"
                                        >
                                            <path d="M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z" />
                                        </svg>
                                    </figure>
                                    <h3>{t('main.service_page.title_web_design')}</h3>
                                    <p>
                                        {t('main.service_page.web_design_description')} ...
                                    </p>
                                </div>
                            }
                            modal
                            nested
                        >
                            {(close) => (
                                <div className="modal">
                                    <button className="close" onClick={close}>
                                        &times;
                                    </button>
                                    <div className="header"> {t('main.service_page.title_web_design_popup')} </div>
                                    <div className="flex">
                                        <figure>
                                            <img alt="view-img" src={images.design} />
                                        </figure>
                                        <div className="content">
                                            {t('main.service_page.web_design_description_popup')}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Popup>

                        <Popup
                            trigger={
                                <div className={cx("box", "p-ani-fadeInScale", "p-delay_3s")}>
                                    <figure>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 640 512"
                                        >
                                            <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                                        </svg>
                                    </figure>
                                    <h3>{t('main.service_page.title_web_development')}</h3>
                                    <p>
                                        {t('main.service_page.web_development_description')}...
                                    </p>
                                </div>
                            }
                            modal
                            nested
                        >
                            {(close) => (
                                <div className="modal">
                                    <button className="close" onClick={close}>
                                        &times;
                                    </button>
                                    <div className="header">
                                        {t('main.service_page.title_web_development_popup')}
                                    </div>
                                    <div className="flex">
                                        <figure>
                                            <img alt="view-img" src={images.develop} />
                                        </figure>
                                        <div className="content">
                                            {t('main.service_page.web_development_description_popup')}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Popup>

                        <Popup
                            trigger={
                                <div className={cx("box", "p-ani-fadeInScale", "p-delay_6s")}>
                                    <figure>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 384 512"
                                        >
                                            <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z" />
                                        </svg>
                                    </figure>
                                    <h3>{t('main.service_page.title_mobile_development')}</h3>
                                    <p>{t('main.service_page.mobile_development_description')}...</p>
                                </div>
                            }
                            modal
                            nested
                        >
                            {(close) => (
                                <div className="modal">
                                    <button className="close" onClick={close}>
                                        &times;
                                    </button>
                                    <div className="header">
                                        {t('main.service_page.title_mobile_development_popup')}
                                    </div>
                                    <div className="flex">
                                        <figure>
                                            <img alt="view-img" src={images.mobile} />
                                        </figure>
                                        <div className="content">
                                            {t('main.service_page.mobile_development_description_popup')}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Popup>

                        <Popup
                            trigger={
                                <div className={cx("box", "p-ani-fadeInScale", "p-delay_9s")}>
                                    <figure>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                                        </svg>
                                    </figure>
                                    <h3>{t('main.service_page.title_seo_optimization')}</h3>
                                    <p>{t('main.service_page.seo_optimization_description')}...
                                    </p>
                                </div>
                            }
                            modal
                            nested
                        >
                            {(close) => (
                                <div className="modal">
                                    <button className="close" onClick={close}>
                                        &times;
                                    </button>
                                    <div className="header">
                                        {t('main.service_page.title_seo_optimization_popup')}
                                    </div>
                                    <div className="flex">
                                        <figure>
                                            <img alt="view-img" src={images.seo} />
                                        </figure>
                                        <div className="content">
                                            {t('main.service_page.seo_optimization_description_popup')}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Popup>

                        <Popup
                            trigger={
                                <div className={cx("box", "p-ani-fadeInScale", "p-delay_12s")}>
                                    <figure>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                        </svg>
                                    </figure>
                                    <h3>{t('main.service_page.title_social_media')}</h3>
                                    <p>{t('main.service_page.social_media_description')}...
                                    </p>
                                </div>
                            }
                            modal
                            nested
                        >
                            {(close) => (
                                <div className="modal">
                                    <button className="close" onClick={close}>
                                        &times;
                                    </button>
                                    <div className="header">{t('main.service_page.title_social_media_popup')}</div>
                                    <div className="flex">
                                        <figure>
                                            <img alt="view-img" src={images.social} />
                                        </figure>
                                        <div className="content">
                                            {t('main.service_page.social_media_description_popup')}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Popup>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Service;
