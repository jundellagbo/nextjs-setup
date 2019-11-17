import Link from 'next/link'
import _JSXStyle from "styled-jsx/style";
import NextLink from '@components/customs/next-link'

import excludeArray from '@helpers/excludeArray'

const Portal = props => {

    const navs = [
        { href: `/`, text: `Request Repair`, type: `button`, icon: `fa fa-wrench`, iconAlignment: `left` },
        { href: `/about`, text: `Notifications` },
        { href: `/about`, text: `Tenant`, icon: `fa fa-user`, iconAlignment: `right` },
    ]

    const getMainNav = props.excludeMainNavs ? excludeArray([...navs], props.excludeMainNavs, `href`) : navs

    const navside = [
        { href: `/`, text: `Dashboard` },
        { href: `/bookings`, text: `Bookings` },
        { href: `/favorites`, text: `Favorites` }
    ]

    const getNavSide = props.excludeNavSide ? excludeArray([...navside], props.excludeNavSide, `href`) : navs

    return (
        <div className={'main-layout-component'}>
            <div className={'top-header-'}>
                <header className={`header-wrapper-`}>
                    <div className={`main-header- top-navigation-fixed d-flex justify-content-between align-items-center pl-5 pr-5`}>
                        <div></div>
                        <ul className={`main-header-nav- list-unstyled d-flex align-items-center`}>
                            {getMainNav && getMainNav.map((row, index) => (
                                <li key={`navigation-top-key-${index}`}>
                                    <NextLink href={row.href} activeClassName={'active'}>
                                        <a className={`link ${row.type == 'button' && 'btn f-btn f-btn-secondary f-btn-small f-border-radius-60'}`}>
                                            {(row.icon && row.iconAlignment == `left`) && (<i className={`${row.icon} mr-2`} />)}
                                                {row.text}
                                            {(row.icon && row.iconAlignment == `right`) && (<i className={`${row.icon} ml-2`} />)}
                                        </a>
                                    </NextLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {props.bottomHeader && (<div className={'bottom-header pl-5 pr-5 d-flex align-items-center'}>{props.bottomHeader}</div>)}

                </header>
            </div>
            <div className={'content-wrapper-child- d-flex justify-content-between'} style={{ marginTop: `${(70 + (props.bottomHeader ? 70 : 0))}px` }}>
                <div className={`navigation-left position-fixed`} style={{ top: `${(70 + (props.bottomHeader ? 70 : 0))}px`, bottom: 0 }}>
                    <ul className={`navigation-left-nav list-unstyled`}>
                        {getNavSide && getNavSide.map((row, index) => (
                            <li key={`navigation-top-key-${index}`}>
                                <NextLink href={row.href} activeClassName={'active'}>
                                    <a className={'d-block pl-5 pr-5 pt-4 pb-4 text-uppercase text-decoration-none f-text-14'}>{row.text}</a>
                                </NextLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={'main-content- pt-4 pb-4 pl-5 pr-5'}>
                    {props.children}
                </div>
            </div>

            <style jsx>{`
            .main-layout-component {
                .top-header- {
                    .header-wrapper- {
                        position: fixed;
                        left: 0;
                        right: 0;
                        top: 0;
                        z-index: 99;
                        background: #ffffff;
                        .main-header- {
                            height: 70px;
                            border-bottom: 1px solid #EFF2F1;
                            .main-header-nav- {
                                margin: 0;
                                li {
                                    a.link {
                                        margin-left: 30px;
                                        color: #574c55;
                                        &:hover {
                                            color: #e76d49;
                                        }
                                    }
                                    a.link:not(.btn) {
                                        font-size: 14px;
                                        font-weight: 500;
                                        text-decoration: none;
                                    }
                                    a.active {
                                        color: #e76d49;
                                    }
                                }
                            }
                        }

                        .bottom-header {
                            height: 70px;
                            border-bottom: 1px solid #EFF2F1;
                        }
                    }
                }
                
                .content-wrapper-child- {
                    .navigation-left {
                        width: 300px;
                        background: #ffffff;
                        .navigation-left-nav {
                            li {
                                a {
                                    background: #F9F9F9;
                                    color: #212529;
                                    &:hover {
                                        color: #ffffff;
                                        background: #E76D49;
                                    }
                                }
                                a.active {
                                    color: #ffffff;
                                    background: #E76D49;
                                }
                            }
                        }
                    }
                    .main-content- {
                        width: calc(100% - 300px);
                        margin-left: 300px;
                    }
                }
                
            }
            `}</style>
        </div>
    )
}

export default Portal