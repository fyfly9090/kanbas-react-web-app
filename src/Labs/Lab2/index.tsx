import React from "react";
import StyleAttribute from "./StyleAttribute";
import "./index.css"
import IdSelector from "./IdSelector";
import ClassSelector from "./ClassSelector";
import DocumentStructure from "./DocumentStructure";
import CSSColors from "./CSSColors";
import BackgroundColor from "./BackgroundColor";
import StylingBorders from "./StylingBorders";
import PaddingStyling from "./PaddingStyling";
import MarginStyling from "./MarginStyling";
import CornersStyling from "./CornersStyling";
import DimensionsStyling from "./DimensionsStyling";
import RelativePosition from "./RelativePosition";
import AbsolutePosition from "./AbsolutePosition";
import FixedPosition from "./FixedPosition";
import ZIndex from "./ZIndex";
import Floating from "./Floating";
import GridLayour from "./GridLayout";
import Flex from "./Flex"
import ReactIconsSampler from "./ReactIconsSampler";
import GridSystem from "./Bootstrap/GridSystem";
import ResponsiveGridSystem from "./Bootstrap/ResponsiveGridSystem";
import ResponsiveDramatic from "./Bootstrap/ResponsiveDramatic";
import ScreenSizeLabel from "./Bootstrap/ScreenSizeLabel";
import TableStyling from "./Bootstrap/TableStyling";
import TableResponsive from "./Bootstrap/TableResponsive";
import ListsStyling from "./Bootstrap/ListsStyling";
import HyperlinksList from "./Bootstrap/HyperlinksList";
import FormStyling from "./Bootstrap/FormStyling";
import DropdownsStyling from "./Bootstrap/DropdownsStyling";
import SwitchesStyling from "./Bootstrap/SwitchesStyling";
import RangeSliders from "./Bootstrap/RangeSliders";
import AddonsStyling from "./Bootstrap/AddonsStyling";
import ResponsiveForm from "./Bootstrap/ResponsiveForm";
import ResponsiveForm2 from "./Bootstrap/ResponsiveForm2";
import Tabs from "./Bootstrap/Tabs";
import CardsNavigation from "./Bootstrap/CardsNavigation";

export default function Lab2() {
    return (
        <div id="wd-lab2" className="container">
        <StyleAttribute/>
        <IdSelector />    
        <ClassSelector/> 
        <DocumentStructure/>
        <CSSColors />
        <BackgroundColor />
        <StylingBorders />
        <PaddingStyling />
        <MarginStyling />
        <CornersStyling />
        <DimensionsStyling />
        <RelativePosition />
        <AbsolutePosition />
        <FixedPosition />
        <ZIndex />
        <Floating />
        <GridLayour />
        <Flex />
        <ReactIconsSampler />
        <h2>Bootstrap</h2>
        <GridSystem />
        <ResponsiveGridSystem />
        <ResponsiveDramatic />
        <ScreenSizeLabel />
        <TableStyling />
        <TableResponsive />
        <ListsStyling />
        <HyperlinksList />
        <FormStyling />
        <DropdownsStyling />
        <SwitchesStyling />
        <RangeSliders />
        <AddonsStyling />
        <ResponsiveForm />
        <ResponsiveForm2 />
        <Tabs />
        <CardsNavigation />
    </div>
  );
}