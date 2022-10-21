import styles from "./scripts.module.scss";

import ScriptPreview from "../../components/script-preview/preview.component";
import Tabs from "../../components/tabs/tabs.component";
import Panel from "../../components/tabs/panel.component";
import Background from "../../components/background/background.component";
import FeaturedTag from "../../components/featuredtag/featuredtag.component";
import GetScriptModal from "../../components/script-modal/Get-Script-Modal/mc.component";
import WatchVideoModal from "../../components/script-modal/Youtube-Modal/mc.component";
import ReportScriptModal from "../../components/script-modal/Report-Script-Modal/mc.component";
import GameLinkModal from "../../components/script-modal/Game-Link Modal/mc.component";

const Scripts = ({ script, allscripts }) => {
  function viewsComparison(a, b) {
    const views1 = a.views;
    const views2 = b.views;
    return views1 - views2;
  }
  allscripts.sort(viewsComparison);
  let shortscripts = allscripts.slice(0, 6);

  return (
    <div className={styles["scripts-main"]}>
      <Background />
      <div className={styles["scripts-left"]}>
        <div className={styles["scripts-left-content"]}>
          <div className={styles["script-top-div"]}>
            <a href=" " className={styles["scripts-like"]}>
              {/* <img src="/Script/im.svg" alt="loading" /> */}
              <svg
                className={styles["heart__like"]}
                id="mysvg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1 9.48C1 5.97111 3.65774 2 7.88889 2C9.71593 2 11.0661 2.7105 12 3.51082C12.9339 2.7105 14.2841 2 16.1111 2C20.3423 2 23 5.97111 23 9.48C23 11.3254 22.2854 13.0297 21.293 14.5091C20.2998 15.9897 18.9924 17.2999 17.7111 18.3798C16.4261 19.4629 15.1397 20.3372 14.1636 20.9411C13.6749 21.2435 13.2596 21.4807 12.9558 21.6447C12.8047 21.7263 12.6762 21.7924 12.5771 21.8404C12.5289 21.8637 12.4787 21.8871 12.4319 21.9068C12.4098 21.9161 12.3759 21.9299 12.3368 21.9431C12.3177 21.9496 12.2854 21.9601 12.2456 21.9699C12.2202 21.9762 12.1237 22 12 22C11.8763 22 11.7805 21.9763 11.7551 21.9701C11.7153 21.9602 11.6823 21.9496 11.6632 21.9431C11.6241 21.9299 11.5902 21.9161 11.5681 21.9068C11.5213 21.8871 11.4711 21.8637 11.4229 21.8404C11.3238 21.7924 11.1953 21.7263 11.0442 21.6447C10.7404 21.4807 10.3251 21.2435 9.83637 20.9411C8.86027 20.3372 7.57395 19.4629 6.28889 18.3798C5.00758 17.2999 3.70022 15.9897 2.70703 14.5091C1.71464 13.0297 1 11.3254 1 9.48Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Like</span>
            </a>
            <div className={styles["scripts-img"]}>
              <img src="/Script/Image/Main-image.jpg" alt="loading" />
            </div>
          </div>
          <div className={styles["top-content-div"]}>
            <div className={styles["view_title_div"]}>
              <div className={styles["top_div_part"]}>
                <div className={styles["user-views"]}>
                  <img src="/script/icons/eye.svg" alt="loading" />{" "}
                  <span>{script.views} views</span>
                </div>
                <div className={styles["user-views"]}>
                  <img src="/script/icons/calendar.svg" alt="loading" />{" "}
                  <span>{script.date}</span>
                </div>
              </div>
              <h2>{script.title}</h2>
            </div>
            <div className={styles["scripts-left-buttons"]}>
              <GetScriptModal
                className={
                  styles["styled-button"] + " " + styles["button__style"]
                }
              >
                <span className={styles["button__style__span"]}>
                  Get Script
                </span>
                <img
                  src="/script/icons/arrow-square-right.svg"
                  alt="Get Script Button"
                />
              </GetScriptModal>
              <GameLinkModal
                className={styles["game-link"] + " " + styles["button__style"]}
              >
                <span className={styles["button__style__span"]}>Join Game</span>
                <img
                  src="/Script/Icons/game-link-icon.svg"
                  alt="Game Link Button"
                />
              </GameLinkModal>
              <WatchVideoModal
                className={
                  styles["watch-video"] + " " + styles["button__style"]
                }
              >
                <span className={styles["button__style__span"]}>
                  Watch Video
                </span>
                <img src="/Script/Icons/youtube.svg" alt="Youtube Button" />
              </WatchVideoModal>
              <ReportScriptModal
                className={
                  styles["report-script"] + " " + styles["button__style"]
                }
              >
                <span className={styles["button__style__span"]}>
                  Report Script
                </span>
                <img
                  src="/Script/Icons/report-script-flag.svg"
                  alt="Report Script Button"
                />
              </ReportScriptModal>
            </div>
            <div className={styles["authorbox"]}>
              <div className={styles["leftauthor"]}>
                <p className={styles["madeby"]}>Made by</p>
                <div className={styles["authorboxc1"]}>
                  <img
                    src="/script/avatars/avatar2.png"
                    alt="author1_image"
                    className={styles["authorimage1"]}
                  />
                  <div className={styles["authorboxc2"]}>
                    <h4 className={styles["contentauthor1"]}>
                      {script.madeby}
                    </h4>
                    <p className={styles["lighttext"]}>Script Developer</p>
                  </div>
                </div>
              </div>
              <div className={styles["rightauthor"]}>
                <p className={styles["uploadby"]}>Uploaded by</p>
                <div
                  className={
                    styles["authorboxc1"] + " " + styles["authorboxc12"]
                  }
                >
                  <img
                    src="/script/avatars/avatar.png"
                    alt="author2_image"
                    className={styles["authorimage2"]}
                  />
                  <div
                    className={
                      styles["authorboxc2"] + " " + styles["authorboxc3"]
                    }
                  >
                    <h4 className={styles["contentauthor1"]}>
                      {script.user_id}
                    </h4>
                    <p className={styles["lighttext"]}>25+ Scripts Uploaded</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Tabs>
            <Panel title="Description">
              <p className={styles["panel1"]}>{script.description}</p>
            </Panel>
            <Panel title="Features">
              <div className={styles["featured-tags"]}>
                <p className={styles["ft-header"]}>Featured Tags</p>
                <div className={styles["ft-icon-wrapper"]}>
                  <FeaturedTag />
                  <FeaturedTag />
                  <FeaturedTag />
                  <FeaturedTag />
                  <FeaturedTag />
                  <FeaturedTag />
                </div>
              </div>
              <hr
                style={{
                  margin: "2rem 0",
                  border: "1px solid rgb(65 198 70 / 20%)",
                }}
              />
              <div className={styles["featured-tags"]}>
                <p className={styles["ft-header"]}>Tags</p>
                <div className={styles["ft-icon-wrapper"]}>
                  <FeaturedTag />
                  <FeaturedTag />
                  <FeaturedTag />
                  <FeaturedTag />
                  <FeaturedTag />
                  <FeaturedTag />
                </div>
              </div>
            </Panel>
            <Panel title="Comments">
              <div className={styles["post-comment"]}>
                <img
                  alt="loading"
                  src="/script/avatars/avatar.png"
                  className={styles["white-border"]}
                />
                <div>
                  <p>Post a comment</p>
                  <img
                    alt="loading"
                    src="/Script/Icons/comment-button.svg"
                    className={styles["arrow-img"]}
                  />
                </div>
              </div>
              <div className={styles["sp-comments"]}>
                <SpComment />
                <SpComment />
                <SpComment />
                <SpComment />
              </div>
              <div className={styles["sp-buttons"]}>
                <button className={styles["previous-button"]}>
                  <img
                    src="/script/icons/arrow-square-right.svg"
                    alt="arrow-icon"
                  />
                  <span>Previous</span>
                </button>
                <button className={styles["styled-button"]}>
                  <span>Next</span>
                  <img
                    src="/script/icons/arrow-square-right.svg"
                    alt="arrow-icon"
                  />
                </button>
              </div>
            </Panel>
          </Tabs>
        </div>
      </div>
      <div className={styles["scripts-right"]}>
        <h2>Most Popular Scripts</h2>
        <div className={styles["script-cards"]}>
          {shortscripts.map((script, key) => {
            return <ScriptPreview script={script} key={key} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Scripts;

const SpComment = () => {
  return (
    <>
      <hr
        style={{
          margin: "5px 0",
          border: "1px solid rgb(65 198 70 / 20%)",
          width: "100%",
        }}
      />
      <div className={styles["sp-comment"]}>
        <img
          alt="loading"
          src="/script/avatars/avatar.png"
          className={styles["white-border"]}
        />
        <div className={styles["sp-comment__wrapper"]}>
          <p className={styles["sp-c-content"]}>
            Where to grow your business as a photographer: site or social media?
          </p>
          <div className={styles["sp-comment__wrapper__2"]}>
            <p className={styles["sp-c-name"]}>EstherHoward</p>
            <div
              id="verified-user"
              className={styles["sp-c-tag"] + " " + styles["verified-user"]}
            >
              <img src="/Script/verified.svg" alt="" />
              Verified
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
