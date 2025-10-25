import addBrightBlueButton from "./blocks/buttons/brightblue-button.js"
import addCyanBlueButton from "./blocks/buttons/cyanblue-button.js"
import addDangerRedButton from "./blocks/buttons/dangerred-button.js"
import addArrowButton from "./blocks/buttons/iconarrow-button.js"
import addIconDeleteButton from "./blocks/buttons/icondelete-button.js"
import addIconGradientButton from "./blocks/buttons/icongradient-button.js"
import addIconOutlineButton from "./blocks/buttons/iconoutline-button.js"
import addIconTextButton from "./blocks/buttons/icontext-button.js"
import addOrangeButton from "./blocks/buttons/orange-button.js"
import addSuccessGreenButton from "./blocks/buttons/successgreen-button.js"
import addContainer from "./blocks/containers/container.js"
import addMaxxl from "./blocks/containers/max1xl.js"
import addMax2xl from "./blocks/containers/max2xl.js"
import addMax3xl from "./blocks/containers/max3xl.js"
import addMax4xl from "./blocks/containers/max4xl.js"
import addMax5xl from "./blocks/containers/max5xl.js"
import addMax6xl from "./blocks/containers/max6xl.js"
import addMax7xl from "./blocks/containers/max7xl.js"
import addCard1 from "./blocks/content/cards/card1.js"
import addCard10 from "./blocks/content/cards/card10.js"
import addCard11 from "./blocks/content/cards/card11.js"
import addButton2 from "./blocks/buttons/ripple-button-a2.js"
import addButton3 from "./blocks/buttons/outline-button-a3.js"
import addButton4 from "./blocks/buttons/rounded-button-blue-a4.js"
import addButton5 from "./blocks/buttons/outline-button-a2.js"
import addButton6 from "./blocks/buttons/rainbow-button-a1.js"
import addButton8 from "./blocks/buttons/loading-button-a1.js"
import addButton9 from "./blocks/buttons/animate-button-a1.js"
import addButton10 from "./blocks/buttons/animate-button-a2.js"
import addCard2 from "./blocks/content/cards/card2.js"
import addCard3 from "./blocks/content/cards/card3.js"
import addCard4 from "./blocks/content/cards/card4.js"
import addCard5 from "./blocks/content/cards/card5.js"
import addCard6 from "./blocks/content/cards/card6.js"
import addCard7 from "./blocks/content/cards/card7.js"
import addCard8 from "./blocks/content/cards/card8.js"
import addCard9 from "./blocks/content/cards/card9.js"
import addGrid1x5 from "./blocks/layouts/grid1x5.js"
import addGrid2x4 from "./blocks/layouts/grid2x4.js"
import addGrid3x3 from "./blocks/layouts/grid3x3.js"
import addGrid4x2 from "./blocks/layouts/grid4x2.js"
import addGrid5x1 from "./blocks/layouts/grid5x1.js"
import addGridSmall from "./blocks/layouts/gridsmall.js"
import addSpanningColumns from "./blocks/layouts/spanningcolumns.js"
import addSpanningRows from "./blocks/layouts/spanningrows.js"
import addClassicNavBar from "./blocks/nav/classicnavbar.js"
import addDropdown from "./blocks/nav/dropdown.js"
import addNavBarLogoCenter from "./blocks/nav/navbarlogocenter.js"
import addSidebar1 from "./blocks/nav/sidebar1.js"
import addSidebar2 from "./blocks/nav/sidebar2.js"
import addHeaderwithLogo from "./blocks/nav/header_with_logo.js"
import addFreshHeaderLogo from "./blocks/nav/fresh_header_with_inline_Logo.js"
import addBlog1 from "./blocks/content/blog/blog-a1.js"
import addBlog2 from "./blocks/content/blog/blog-a2.js"
import addBlog3 from "./blocks/content/blog/blog-a3.js"
import addBlog4 from "./blocks/content/blog/blog-a4.js"
import addBlog5 from "./blocks/content/blog/blog-a5.js"
import addBlog6 from "./blocks/content/blog/blog-a6.js"
import addBlog7 from "./blocks/content/blog/blog-a7.js"
import addBlog8 from "./blocks/content/blog/blog-a8.js"
import addBlog9 from "./blocks/content/blog/blog-a9.js"
import addBlog10 from "./blocks/content/blog/blog-a10.js"
import addBlog11 from "./blocks/content/blog/blog-a11.js"
import addHero1 from "./blocks/content/hero/hero1.js"
import addHero2 from "./blocks/content/hero/hero2.js"
import addHero3 from "./blocks/content/hero/hero3.js"
import addHero4 from "./blocks/content/hero/hero4.js"
import addHero5 from "./blocks/content/hero/hero5.js"
import addHero6 from "./blocks/content/hero/hero6.js"
import addHero7 from "./blocks/content/hero/hero7.js"
import addHero8 from "./blocks/content/hero/hero8.js"
import addHero9 from "./blocks/content/hero/hero9.js"
import addGallerywithInformation from "./blocks/content/gallery/gallery_with_information.js"
import addOverlayGridGallery1 from "./blocks/content/gallery/overlayGridGallery1.js"
import addPhotoGallery from "./blocks/content/gallery/photogallery.js"
import addFooter1 from "./blocks/content/footer/footer1.js"
import addFooter2 from "./blocks/content/footer/footer2.js"
import addCompactSignupForm from "./blocks/content/forms/compact_signup_form.js"
import addFeedbackFormWithDropdown from "./blocks/content/forms/feedback_form_with_dropdown.js"
import job_application_form from "./blocks/content/forms/job_application_form.js"
import addLoginFormWithIcons from "./blocks/content/forms/login_form_with_icons.js"
import subscription_form_newsletter from "./blocks/content/forms/subscription_form_newsletter.js"
import addSearchBarwithClearButton from "./blocks/content/forms/search_bar_with_clear_button.js"
import addSearchBoxwithAnimatedUnderlineOnFocus from "./blocks/content/forms/search_box_with_animated_underline_on_focus.js"
import addSearchBoxwithShadowandBorder from "./blocks/content/forms/search_Box_with_Shadow and Border.js"
import addSearchBoxWithAnimatedSearchIcon from "./blocks/content/forms/search_box_with_animated_search_icon.js"

export default (editor) => {
    const bm = editor.BlockManager
    addGrid5x1(bm)
    addGrid4x2(bm)
    addGrid3x3(bm)
    addGrid2x4(bm)
    addGrid1x5(bm)
    addGridSmall(bm)
    addSpanningColumns(bm)
    addSpanningRows(bm)
    addOrangeButton(bm)
    addCyanBlueButton(bm)
    addBrightBlueButton(bm)
    addSuccessGreenButton(bm)
    addDangerRedButton(bm)
    addArrowButton(bm)
    addIconTextButton(bm)
    addIconDeleteButton(bm)
    addIconOutlineButton(bm)
    addIconGradientButton(bm)
    addContainer(bm)
    addMax7xl(bm)
    addMax6xl(bm)
    addMax5xl(bm)
    addMax4xl(bm)
    addMax3xl(bm)
    addMax2xl(bm)
    addMaxxl(bm)
    addClassicNavBar(bm)
    addNavBarLogoCenter(bm)
    addDropdown(bm)
    addSidebar1(bm)
    addSidebar2(bm)
    addHeaderwithLogo(bm)
    addFreshHeaderLogo(bm)
    addCard1(bm)
    addCard2(bm)
    addCard3(bm)
    addCard4(bm)
    addCard5(bm)
    addCard6(bm)
    addCard7(bm)
    addCard8(bm)
    addCard9(bm)
    addCard10(bm)
    addCard11(bm)
    addButton2(bm)
    addButton3(bm)
    addButton4(bm)
    addButton5(bm)
    addButton6(bm)
    addButton8(bm)
    addButton9(bm)
    addButton10(bm)
    addBlog1(bm)
    addBlog2(bm)
    addBlog3(bm)
    addBlog4(bm)
    addBlog5(bm)
    addBlog6(bm)
    addBlog7(bm)
    addBlog8(bm)
    addBlog9(bm)
    addBlog10(bm)
    addBlog11(bm)
    addHero1(bm)
    addHero2(bm)
    addHero3(bm)
    addHero4(bm)
    addHero5(bm)
    addHero6(bm)
    addHero7(bm)
    addHero8(bm)
    addHero9(bm)
    addGallerywithInformation(bm)
    addOverlayGridGallery1(bm)
    addPhotoGallery(bm)
    addFooter1(bm)
    addFooter2(bm)
    addCompactSignupForm(bm)
    addFeedbackFormWithDropdown(bm)
    job_application_form(bm)
    addLoginFormWithIcons(bm)
    subscription_form_newsletter(bm)
    addSearchBarwithClearButton(bm)
    addSearchBoxwithAnimatedUnderlineOnFocus(bm)
    addSearchBoxwithShadowandBorder(bm)
    addSearchBoxWithAnimatedSearchIcon(bm)
}
