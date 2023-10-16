import React, { useState } from "react";
import classnames from "classnames/bind";
import styles from "./Porfolio.module.scss";
import images from "../../assets/img";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";

const cx = classnames.bind(styles);

const Porfolio = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, value) => {
        setValue(value);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <main className={cx("portfolio-page")}>
            <div className="wrapper">
                <div className="title-page">PORTFOLIO</div>
                <div className="sub-title-page">MY WORKS</div>

                <div className="info-box">
                    <Tabs value={value} onChange={handleChange}>
                        <Tab label="ALL" />
                        <Tab label="APP" />
                        <Tab label="WEB" />
                    </Tabs>
                    <SwipeableViews
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <div className={cx("flex", "flex-justify")}>
                            <a href="https://thy96.github.io/trasua-app/" className={cx("box")} target="_blank">
                                <figure>
                                    <img src={images.portfolio_1} />
                                </figure>
                                <h4>
                                    Thế Giới Trà Sữa<br />{" "}
                                    <i>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 640 512"
                                        >
                                            <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
                                        </svg>
                                    </i>
                                </h4>
                            </a>

                        </div>
                        <div className={cx("flex", "flex-justify")}>

                        </div>
                        <div className={cx("flex", "flex-justify")}>
                            <a href="https://thy96.github.io/trasua-app/" className={cx("box")} target="_blank">
                                <figure>
                                    <img src={images.portfolio_1} />
                                </figure>
                                <h4>
                                    Thế Giới Trà Sữa<br />{" "}
                                    <i>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 640 512"
                                        >
                                            <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
                                        </svg>
                                    </i>
                                </h4>
                            </a>
                        </div>
                    </SwipeableViews>
                </div>
            </div>
        </main>
    );
};

export default Porfolio;
