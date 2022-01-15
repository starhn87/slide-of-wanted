import React from "react";
import { useSlide } from "../hooks/useSlide";

const Slider: React.FC = () => {
  const { slide, moveLeft, moveRight } = useSlide();

  return (
    <main className="Main_Main__XvIqW">
      <div className="TopBanner_TopBanner__yxapE">
        <div className="slick-slider slick-initialized" dir="ltr">
          <div className="slick-list paddingSetting">
            <div
              id="slideList"
              className="slick-track slideList sliding"
              style={{ marginLeft: slide }}
            >
              <div
                data-index="-2"
                tabIndex={-1}
                className="slick-slide slick-cloned slideWidth"
                aria-hidden="true"
              >
                <div>
                  <div
                    data-attribute-id="home__mainBanner__click"
                    data-landing-uri="https://youtu.be/VLiACiB2lXw"
                    data-link-kind="CUSTOM_URL"
                    data-content-title="해, 커리어 EP 02 공개"
                    tabIndex={-1}
                    className="slideContent"
                  >
                    <div className="Image_Image__T6WBp">
                      <a
                        href="https://youtu.be/VLiACiB2lXw"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg"
                          alt="해, 커리어 EP 02 공개"
                          className="Image_Image__image__Y2rLN"
                        />
                      </a>
                    </div>
                    <div className="Information_Information__SwERN">
                      <h2>해, 커리어 EP 02 공개</h2>
                      <h3>최종 발표를 위한 마지막 관문 2라운드의 승자는?</h3>
                      <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                      <a
                        href="/VLiACiB2lXw"
                        className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                        aria-label=""
                      >
                        <span className="Button_Button__label__1Kk0v">
                          바로가기
                          <span className="Button_Button__endIcon__MpDfc">
                            <span className="SvgIcon_SvgIcon__root__8vwon">
                              <svg
                                className="SvgIcon_SvgIcon__root__svg__DKYBi"
                                viewBox="0 0 18 18"
                              >
                                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                              </svg>
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-index="-1"
                tabIndex={-1}
                className="slick-slide slick-cloned slideWidth"
                aria-hidden="true"
              >
                <div>
                  <div
                    data-attribute-id="home__mainBanner__click"
                    data-landing-uri="/events/21_07_s05_t01"
                    data-link-kind="EVENT_DETAIL"
                    data-content-title="아는 만큼 보인다!"
                    tabIndex={-1}
                    className="slideContent"
                  >
                    <div className="Image_Image__T6WBp">
                      <a
                        href="/events/21_07_s05_t01"
                        className=""
                        aria-label=""
                      >
                        <img
                          src="https://static.wanted.co.kr/images/banners/1454/e504b006.jpg"
                          alt="아는 만큼 보인다!"
                          className="Image_Image__image__Y2rLN"
                        />
                      </a>
                    </div>
                    <div className="Information_Information__SwERN">
                      <h2>아는 만큼 보인다!</h2>
                      <h3>노동법 &aop;채용&aop; 시리즈</h3>
                      <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                      <a
                        href="/events/21_07_s05_t01"
                        className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                        aria-label=""
                      >
                        <span className="Button_Button__label__1Kk0v">
                          바로가기
                          <span className="Button_Button__endIcon__MpDfc">
                            <span className="SvgIcon_SvgIcon__root__8vwon">
                              <svg
                                className="SvgIcon_SvgIcon__root__svg__DKYBi"
                                viewBox="0 0 18 18"
                              >
                                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                              </svg>
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-index="-11"
                tabIndex={-1}
                className="slick-slide slick-center slick-cloned slideWidth"
                aria-hidden="true"
              >
                <div>
                  <div
                    data-attribute-id="home__mainBanner__click"
                    data-landing-uri="/events/velog01"
                    data-link-kind="EVENT_DETAIL"
                    data-content-title="개발자 성장 비결 공개!"
                    tabIndex={-1}
                    className="slideContent"
                  >
                    <div className="Image_Image__T6WBp Image_Image__active___6EY5">
                      <a href="/events/velog01" className="" aria-label="">
                        <img
                          src="https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg"
                          alt="개발자 성장 비결 공개!"
                          className="Image_Image__image__Y2rLN"
                        />
                      </a>
                    </div>
                    <div className="Information_Information__SwERN Information_Information__active__5qVDq">
                      <h2>개발자 성장 비결 공개!</h2>
                      <h3>글 쓰는 개발자들의 이야기</h3>
                      <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                      <a
                        href="/events/velog01"
                        className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                        aria-label=""
                      >
                        <span className="Button_Button__label__1Kk0v">
                          바로가기
                          <span className="Button_Button__endIcon__MpDfc">
                            <span className="SvgIcon_SvgIcon__root__8vwon">
                              <svg
                                className="SvgIcon_SvgIcon__root__svg__DKYBi"
                                viewBox="0 0 18 18"
                              >
                                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                              </svg>
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-index="-10"
                tabIndex={-1}
                className="slick-slide slick-cloned slideWidth"
                aria-hidden="true"
              >
                <div>
                  <div
                    data-attribute-id="home__mainBanner__click"
                    data-landing-uri="/events/wantedcon18"
                    data-link-kind="EVENT_DETAIL"
                    data-content-title="믿을 것은 데이터 뿐!"
                    tabIndex={-1}
                    className="slideContent"
                  >
                    <div className="Image_Image__T6WBp">
                      <a href="/events/wantedcon18" className="" aria-label="">
                        <img
                          src="https://static.wanted.co.kr/images/banners/1451/725c6862.jpg"
                          alt="믿을 것은 데이터 뿐!"
                          className="Image_Image__image__Y2rLN"
                        />
                      </a>
                    </div>
                    <div className="Information_Information__SwERN">
                      <h2>믿을 것은 데이터 뿐!</h2>
                      <h3>요즘 데이터팀은 어떻게 일할까?</h3>
                      <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                      <a
                        href="/events/wantedcon18"
                        className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                        aria-label=""
                      >
                        <span className="Button_Button__label__1Kk0v">
                          바로가기
                          <span className="Button_Button__endIcon__MpDfc">
                            <span className="SvgIcon_SvgIcon__root__8vwon">
                              <svg
                                className="SvgIcon_SvgIcon__root__svg__DKYBi"
                                viewBox="0 0 18 18"
                              >
                                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                              </svg>
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-index="-9"
                tabIndex={-1}
                className="slick-slide slick-cloned slideWidth"
                aria-hidden="true"
              >
                <div>
                  <div
                    data-attribute-id="home__mainBanner__click"
                    data-landing-uri="/events/pre_onboarding_course_6"
                    data-link-kind="EVENT_DETAIL"
                    data-content-title="나도 개발자 되고 싶다"
                    tabIndex={-1}
                    className="slideContent"
                  >
                    <div className="Image_Image__T6WBp">
                      <a
                        href="/events/pre_onboarding_course_6"
                        className=""
                        aria-label=""
                      >
                        <img
                          src="https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg"
                          alt="나도 개발자 되고 싶다"
                          className="Image_Image__image__Y2rLN"
                        />
                      </a>
                    </div>
                    <div className="Information_Information__SwERN">
                      <h2>나도 개발자 되고 싶다</h2>
                      <h3>프론트엔드 무료 교육과정 참여하기</h3>
                      <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                      <a
                        href="/events/pre_onboarding_course_6"
                        className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                        aria-label=""
                      >
                        <span className="Button_Button__label__1Kk0v">
                          바로가기
                          <span className="Button_Button__endIcon__MpDfc">
                            <span className="SvgIcon_SvgIcon__root__8vwon">
                              <svg
                                className="SvgIcon_SvgIcon__root__svg__DKYBi"
                                viewBox="0 0 18 18"
                              >
                                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                              </svg>
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-index="-8"
                tabIndex={-1}
                className="slick-slide slick-cloned slideWidth"
                aria-hidden="true"
              >
                <div>
                  <div
                    data-attribute-id="home__mainBanner__click"
                    data-landing-uri="/events/git_github"
                    data-link-kind="EVENT_DETAIL"
                    data-content-title="Git? GitHub?"
                    tabIndex={-1}
                    className="slideContent"
                  >
                    <div className="Image_Image__T6WBp">
                      <a href="/events/git_github" className="" aria-label="">
                        <img
                          src="https://static.wanted.co.kr/images/banners/1452/be4ec643.jpg"
                          alt="Git? GitHub?"
                          className="Image_Image__image__Y2rLN"
                        />
                      </a>
                    </div>
                    <div className="Information_Information__SwERN">
                      <h2>Git? GitHub?</h2>
                      <h3>협업 필수 도구 마스터하기</h3>
                      <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                      <a
                        href="/events/git_github"
                        className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                        aria-label=""
                      >
                        <span className="Button_Button__label__1Kk0v">
                          바로가기
                          <span className="Button_Button__endIcon__MpDfc">
                            <span className="SvgIcon_SvgIcon__root__8vwon">
                              <svg
                                className="SvgIcon_SvgIcon__root__svg__DKYBi"
                                viewBox="0 0 18 18"
                              >
                                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                              </svg>
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-index="-7"
                tabIndex={-1}
                className="slick-slide slick-cloned slideWidth"
                aria-hidden="true"
              >
                <div>
                  <div
                    data-attribute-id="home__mainBanner__click"
                    data-landing-uri="/events/21_07_s06_b04"
                    data-link-kind="EVENT_DETAIL"
                    data-content-title="스타벅스 굿즈 좋아하세요?"
                    tabIndex={-1}
                    className="slideContent"
                  >
                    <div className="Image_Image__T6WBp">
                      <a
                        href="/events/21_07_s06_b04"
                        className=""
                        aria-label=""
                      >
                        <img
                          src="https://static.wanted.co.kr/images/banners/1438/015566ac.jpg"
                          alt="스타벅스 굿즈 좋아하세요?"
                          className="Image_Image__image__Y2rLN"
                        />
                      </a>
                    </div>
                    <div className="Information_Information__SwERN">
                      <h2>스타벅스 굿즈 좋아하세요?</h2>
                      <h3>사랑받는 디자인의 비밀</h3>
                      <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                      <a
                        href="/events/21_07_s06_b04"
                        className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                        aria-label=""
                      >
                        <span className="Button_Button__label__1Kk0v">
                          바로가기
                          <span className="Button_Button__endIcon__MpDfc">
                            <span className="SvgIcon_SvgIcon__root__8vwon">
                              <svg
                                className="SvgIcon_SvgIcon__root__svg__DKYBi"
                                viewBox="0 0 18 18"
                              >
                                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                              </svg>
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-index="-6"
                tabIndex={-1}
                className="slick-slide slick-cloned slideWidth"
                aria-hidden="true"
              >
                <div>
                  <div
                    data-attribute-id="home__mainBanner__click"
                    data-landing-uri="/events/livetalk36"
                    data-link-kind="EVENT_DETAIL"
                    data-content-title="마케터를 위한 데이터"
                    tabIndex={-1}
                    className="slideContent"
                  >
                    <div className="Image_Image__T6WBp">
                      <a href="/events/livetalk36" className="" aria-label="">
                        <img
                          src="https://static.wanted.co.kr/images/banners/1436/e2dd9445.jpg"
                          alt="마케터를 위한 데이터"
                          className="Image_Image__image__Y2rLN"
                        />
                      </a>
                    </div>
                    <div className="Information_Information__SwERN">
                      <h2>마케터를 위한 데이터</h2>
                      <h3>잘 나가는 마케터는 무엇이 다를까!?</h3>
                      <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                      <a
                        href="/events/livetalk36"
                        className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                        aria-label=""
                      >
                        <span className="Button_Button__label__1Kk0v">
                          바로가기
                          <span className="Button_Button__endIcon__MpDfc">
                            <span className="SvgIcon_SvgIcon__root__8vwon">
                              <svg
                                className="SvgIcon_SvgIcon__root__svg__DKYBi"
                                viewBox="0 0 18 18"
                              >
                                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                              </svg>
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-index="-5"
                tabIndex={-1}
                className="slick-slide slick-cloned slideWidth"
                aria-hidden="true"
              >
                <div>
                  <div
                    data-attribute-id="home__mainBanner__click"
                    data-landing-uri="/events/wantedcon22"
                    data-link-kind="EVENT_DETAIL"
                    data-content-title="유저 경험을 설계하라!"
                    tabIndex={-1}
                    className="slideContent"
                  >
                    <div className="Image_Image__T6WBp">
                      <a href="/events/wantedcon22" className="" aria-label="">
                        <img
                          src="https://static.wanted.co.kr/images/banners/1435/6cdcea85.jpg"
                          alt="유저 경험을 설계하라!"
                          className="Image_Image__image__Y2rLN"
                        />
                      </a>
                    </div>
                    <div className="Information_Information__SwERN">
                      <h2>유저 경험을 설계하라!</h2>
                      <h3>문제를 해결하는 프로덕트 디자인</h3>
                      <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                      <a
                        href="/events/wantedcon22"
                        className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                        aria-label=""
                      >
                        <span className="Button_Button__label__1Kk0v">
                          바로가기
                          <span className="Button_Button__endIcon__MpDfc">
                            <span className="SvgIcon_SvgIcon__root__8vwon">
                              <svg
                                className="SvgIcon_SvgIcon__root__svg__DKYBi"
                                viewBox="0 0 18 18"
                              >
                                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                              </svg>
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-index="-4"
                tabIndex={-1}
                className="slick-slide slick-cloned slideWidth"
                aria-hidden="true"
              >
                <div>
                  <div
                    data-attribute-id="home__mainBanner__click"
                    data-landing-uri="/events/careertalk07"
                    data-link-kind="EVENT_DETAIL"
                    data-content-title="리크루터 커리어 가이드"
                    tabIndex={-1}
                    className="slideContent"
                  >
                    <div className="Image_Image__T6WBp">
                      <a href="/events/careertalk07" className="" aria-label="">
                        <img
                          src="https://static.wanted.co.kr/images/banners/1453/7a978579.jpg"
                          alt="리크루터 커리어 가이드"
                          className="Image_Image__image__Y2rLN"
                        />
                      </a>
                    </div>
                    <div className="Information_Information__SwERN">
                      <h2>리크루터 커리어 가이드</h2>
                      <h3>싼마이 리크루터가 되지 않기 위해</h3>
                      <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                      <a
                        href="/events/careertalk07"
                        className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                        aria-label=""
                      >
                        <span className="Button_Button__label__1Kk0v">
                          바로가기
                          <span className="Button_Button__endIcon__MpDfc">
                            <span className="SvgIcon_SvgIcon__root__8vwon">
                              <svg
                                className="SvgIcon_SvgIcon__root__svg__DKYBi"
                                viewBox="0 0 18 18"
                              >
                                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                              </svg>
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-index="-3"
                tabIndex={-1}
                className="slick-slide slick-cloned slideWidth"
                aria-hidden="true"
              >
                <div>
                  <div
                    data-attribute-id="home__mainBanner__click"
                    data-landing-uri="/events/careertalk16"
                    data-link-kind="EVENT_DETAIL"
                    data-content-title="요즘 MD가 일하는 방법"
                    tabIndex={-1}
                    className="slideContent"
                  >
                    <div className="Image_Image__T6WBp">
                      <a href="/events/careertalk16" className="" aria-label="">
                        <img
                          src="https://static.wanted.co.kr/images/banners/1434/fdbbcb06.jpg"
                          alt="요즘 MD가 일하는 방법"
                          className="Image_Image__image__Y2rLN"
                        />
                      </a>
                    </div>
                    <div className="Information_Information__SwERN">
                      <h2>요즘 MD가 일하는 방법</h2>
                      <h3>실무자가 공개하는 MD 커리어의 모든 것!</h3>
                      <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                      <a
                        href="/events/careertalk16"
                        className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                        aria-label=""
                      >
                        <span className="Button_Button__label__1Kk0v">
                          바로가기
                          <span className="Button_Button__endIcon__MpDfc">
                            <span className="SvgIcon_SvgIcon__root__8vwon">
                              <svg
                                className="SvgIcon_SvgIcon__root__svg__DKYBi"
                                viewBox="0 0 18 18"
                              >
                                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                              </svg>
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-index="-2"
                tabIndex={-1}
                className="slick-slide slick-cloned slideWidth"
                aria-hidden="true"
              >
                <div>
                  <div
                    data-attribute-id="home__mainBanner__click"
                    data-landing-uri="https://youtu.be/VLiACiB2lXw"
                    data-link-kind="CUSTOM_URL"
                    data-content-title="해, 커리어 EP 02 공개"
                    tabIndex={-1}
                    className="slideContent"
                  >
                    <div className="Image_Image__T6WBp">
                      <a
                        href="https://youtu.be/VLiACiB2lXw"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg"
                          alt="해, 커리어 EP 02 공개"
                          className="Image_Image__image__Y2rLN"
                        />
                      </a>
                    </div>
                    <div className="Information_Information__SwERN">
                      <h2>해, 커리어 EP 02 공개</h2>
                      <h3>최종 발표를 위한 마지막 관문 2라운드의 승자는?</h3>
                      <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                      <a
                        href="/VLiACiB2lXw"
                        className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                        aria-label=""
                      >
                        <span className="Button_Button__label__1Kk0v">
                          바로가기
                          <span className="Button_Button__endIcon__MpDfc">
                            <span className="SvgIcon_SvgIcon__root__8vwon">
                              <svg
                                className="SvgIcon_SvgIcon__root__svg__DKYBi"
                                viewBox="0 0 18 18"
                              >
                                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                              </svg>
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-index="-1"
                tabIndex={-1}
                className="slick-slide slick-cloned slideWidth"
                aria-hidden="true"
              >
                <div>
                  <div
                    data-attribute-id="home__mainBanner__click"
                    data-landing-uri="/events/21_07_s05_t01"
                    data-link-kind="EVENT_DETAIL"
                    data-content-title="아는 만큼 보인다!"
                    tabIndex={-1}
                    className="slideContent"
                  >
                    <div className="Image_Image__T6WBp">
                      <a
                        href="/events/21_07_s05_t01"
                        className=""
                        aria-label=""
                      >
                        <img
                          src="https://static.wanted.co.kr/images/banners/1454/e504b006.jpg"
                          alt="아는 만큼 보인다!"
                          className="Image_Image__image__Y2rLN"
                        />
                      </a>
                    </div>
                    <div className="Information_Information__SwERN">
                      <h2>아는 만큼 보인다!</h2>
                      <h3>노동법 &aop;채용&aop; 시리즈</h3>
                      <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                      <a
                        href="/events/21_07_s05_t01"
                        className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                        aria-label=""
                      >
                        <span className="Button_Button__label__1Kk0v">
                          바로가기
                          <span className="Button_Button__endIcon__MpDfc">
                            <span className="SvgIcon_SvgIcon__root__8vwon">
                              <svg
                                className="SvgIcon_SvgIcon__root__svg__DKYBi"
                                viewBox="0 0 18 18"
                              >
                                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                              </svg>
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-index="-11"
                tabIndex={-1}
                className="slick-slide slick-cloned slideWidth"
                aria-hidden="true"
              >
                <div>
                  <div
                    data-attribute-id="home__mainBanner__click"
                    data-landing-uri="/events/velog01"
                    data-link-kind="EVENT_DETAIL"
                    data-content-title="개발자 성장 비결 공개!"
                    tabIndex={-1}
                    className="slideContent"
                  >
                    <div className="Image_Image__T6WBp">
                      <a href="/events/velog01" className="" aria-label="">
                        <img
                          src="https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg"
                          alt="개발자 성장 비결 공개!"
                          className="Image_Image__image__Y2rLN"
                        />
                      </a>
                    </div>
                    <div className="Information_Information__SwERN">
                      <h2>개발자 성장 비결 공개!</h2>
                      <h3>글 쓰는 개발자들의 이야기</h3>
                      <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                      <a
                        href="/events/velog01"
                        className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                        aria-label=""
                      >
                        <span className="Button_Button__label__1Kk0v">
                          바로가기
                          <span className="Button_Button__endIcon__MpDfc">
                            <span className="SvgIcon_SvgIcon__root__8vwon">
                              <svg
                                className="SvgIcon_SvgIcon__root__svg__DKYBi"
                                viewBox="0 0 18 18"
                              >
                                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                              </svg>
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-index="-10"
                tabIndex={-1}
                className="slick-slide slick-cloned slideWidth"
                aria-hidden="true"
              >
                <div>
                  <div
                    data-attribute-id="home__mainBanner__click"
                    data-landing-uri="/events/wantedcon18"
                    data-link-kind="EVENT_DETAIL"
                    data-content-title="믿을 것은 데이터 뿐!"
                    tabIndex={-1}
                    className="slideContent"
                  >
                    <div className="Image_Image__T6WBp">
                      <a href="/events/wantedcon18" className="" aria-label="">
                        <img
                          src="https://static.wanted.co.kr/images/banners/1451/725c6862.jpg"
                          alt="믿을 것은 데이터 뿐!"
                          className="Image_Image__image__Y2rLN"
                        />
                      </a>
                    </div>
                    <div className="Information_Information__SwERN">
                      <h2>믿을 것은 데이터 뿐!</h2>
                      <h3>요즘 데이터팀은 어떻게 일할까?</h3>
                      <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                      <a
                        href="/events/wantedcon18"
                        className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                        aria-label=""
                      >
                        <span className="Button_Button__label__1Kk0v">
                          바로가기
                          <span className="Button_Button__endIcon__MpDfc">
                            <span className="SvgIcon_SvgIcon__root__8vwon">
                              <svg
                                className="SvgIcon_SvgIcon__root__svg__DKYBi"
                                viewBox="0 0 18 18"
                              >
                                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                              </svg>
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          id="nextBtn"
          className="TopBanner_arrow__BN_7d TopBanner_nextArrow__6wqx0"
          aria-label="nextArrowButton"
          onClick={moveRight}
        >
          <span className="SvgIcon_SvgIcon__root__8vwon">
            <svg
              className="SvgIcon_SvgIcon__root__svg__DKYBi"
              viewBox="0 0 18 18"
            >
              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
            </svg>
          </span>
        </button>
        <button
          type="button"
          id="prevBtn"
          className="TopBanner_arrow__BN_7d TopBanner_prevArrow__B7nqk"
          aria-label="prevArrowButton"
          onClick={moveLeft}
        >
          <span className="SvgIcon_SvgIcon__root__8vwon">
            <svg
              className="SvgIcon_SvgIcon__root__svg__DKYBi"
              viewBox="0 0 18 18"
            >
              <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
            </svg>
          </span>
        </button>
      </div>
    </main>
  );
};

export default Slider;
