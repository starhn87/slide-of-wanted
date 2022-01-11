import React from "react";

const Header: React.FC = () => (
  <div role="presentation" className="NavBar_className__y2qGg">
    <div className="MainBar_MainBar__40DX7" role="presentation">
      <nav className="MainBar_MainBar_nav__kwHBF">
        <div className="MainBar_MainBar_nav_top__wXy52">
          <div className="MainBar_MainBar_nav_top_logo__Y_Q5D">
            <button
              type="button"
              aria-label="jobCategoryMenuButton"
              data-attribute-id="gnb"
              data-gnb-kind="jobCategoryMenu"
              className="MainBar_hamberger__yQfei"
            >
              <img
                src="https://static.wanted.co.kr/images/icon-menu.png"
                alt="hamberger menu"
                className="menuImage"
              />
            </button>
            <a
              href="/"
              className="MainBar_MainBar_logo__bGymr"
              aria-label="homeLink"
              data-attribute-id="gnb"
              data-gnb-kind="home"
            >
              <i className="icon-logo_new" />
            </a>
          </div>
          <button
            id="gnbSignupBtn"
            className="xsSignUpButton"
            type="button"
            data-attribute-id="gnb"
            data-gnb-kind="signupLogin"
          >
            회원가입하기
          </button>
        </div>
        <ul className="Menu_className__gGcYQ">
          <li
            className="xsHomeButton xsOnly selectedNav"
            data-attribute-id="gnb"
            data-gnb-kind="home"
          >
            <a href="/" className="" aria-label="">
              홈
            </a>
          </li>
          <li className="" data-attribute-id="gnb" data-gnb-kind="jobs">
            <a href="/jobsfeed" className="" aria-label="">
              채용
            </a>
          </li>
          <li className="" data-attribute-id="gnb" data-gnb-kind="event">
            <a href="/events" className="" aria-label="">
              이벤트
            </a>
          </li>
          <li
            className="smMoreVisible"
            data-attribute-id="gnb"
            data-gnb-kind="salary"
          >
            <a href="/salary" className="" aria-label="">
              직군별 연봉
            </a>
          </li>
          <li
            className="smMoreVisible"
            data-attribute-id="gnb"
            data-gnb-kind="resume"
          >
            <a href="/cv" className="" aria-label="">
              이력서
            </a>
          </li>
          <li
            className="smMoreVisible"
            data-attribute-id="gnb"
            data-gnb-kind="community"
          >
            <a href="/community" className="" aria-label="">
              커뮤니티
              <em>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="11"
                  viewBox="0 0 18 11"
                >
                  <g
                    fill="none"
                    fillRule="evenodd"
                    fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                    fontSize="9"
                    fontWeight="500"
                  >
                    <g fill="#36F">
                      <g>
                        <g>
                          <g>
                            <g>
                              <g>
                                <g>
                                  <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                                    <tspan x="0" y="8">
                                      New
                                    </tspan>
                                  </text>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </em>
            </a>
          </li>
          <li
            className="smMoreVisible"
            data-attribute-id="gnb"
            data-gnb-kind="freelancer"
          >
            <a
              href="https://www.wanted.co.kr/gigs/experts"
              className=""
              aria-label=""
              target="_blank"
              rel="noopener noreferrer"
            >
              프리랜서
            </a>
          </li>
          <li
            className="smMoreVisible"
            data-attribute-id="gnb"
            data-gnb-kind="aiScore"
          >
            <a href="/aiscore/resume" className="" aria-label="">
              AI 합격예측
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="11"
                  viewBox="0 0 18 11"
                >
                  <g
                    fill="none"
                    fillRule="evenodd"
                    fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                    fontSize="9"
                    fontWeight="500"
                  >
                    <g fill="#36F">
                      <g>
                        <g>
                          <g>
                            <g>
                              <g>
                                <g>
                                  <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                                    <tspan x="0" y="8">
                                      Beta
                                    </tspan>
                                  </text>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            </a>
          </li>
        </ul>
        <aside className="Aside_className___e5Bi">
          <ul>
            <li>
              <button
                className="searchButton"
                type="button"
                data-attribute-id="gnb"
                data-gnb-kind="search"
              >
                <svg
                  xmlns="https://www.w3.org/2000/svg"
                  xmlnsXlink="https://www.w3.org/1999/xlink"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <defs>
                    <path
                      id="qt2dnsql4a"
                      d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"
                    />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <use
                      fill="#333"
                      fillRule="nonzero"
                      stroke="#333"
                      strokeWidth=".3"
                      xlinkHref="#qt2dnsql4a"
                    />
                  </g>
                </svg>
              </button>
            </li>
            <li>
              <button
                className="signUpButton"
                type="button"
                data-attribute-id="gnb"
                data-gnb-kind="signupLogin"
              >
                회원가입/로그인
              </button>
            </li>
            <li
              className="mdMoreVisible leftDivision"
              data-attribute-id="gnb"
              data-gnb-kind="forEmployers"
            >
              <a className="dashboardButton" href="/dashboard">
                기업 서비스
              </a>
            </li>
            <li className="Aside_visibleMenu__Dki9n">
              <button
                className="menuButton"
                type="button"
                data-attribute-id="gnb"
                data-gnb-kind="photo"
              >
                <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <path
                      d="M9 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 9 7.5zm5.05 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 14.05 7.5zM4 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 4 7.5z"
                      id="a"
                    />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <mask id="b" fill="#fff">
                      <use xlinkHref="#a" />
                    </mask>
                    <use fill="#333" xlinkHref="#a" />
                    <g mask="url(#b)" fill="#333">
                      <path d="M0 0h18v18H0z" />
                    </g>
                  </g>
                </svg>
              </button>
            </li>
          </ul>
          <div className="Aside_visibleMenu__Dki9n" />
        </aside>
      </nav>
    </div>
  </div>
);

export default Header;
