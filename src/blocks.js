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
import addBlog1 from "./blocks/content/blog/blog-a1.js"
import addBlog2 from "./blocks/content/blog/blog-a2.js"

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
}
