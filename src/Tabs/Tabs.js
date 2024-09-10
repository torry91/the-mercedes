import TabItem from "./TabItem";

const Tabs = ({scrollToSection,quickFactsRef,firstDriverRef}) => {

    const handleTabClick = (ref , targetId = null) => {
        scrollToSection(ref,targetId);
    }
    return (
    <div className="the-tabs">
        <TabItem tab="Quick Facts" onClick={() => handleTabClick(quickFactsRef)}/>
        <TabItem tab="First Driver"onClick={() => handleTabClick(firstDriverRef , '#scroll-target')}/>
    </div>
)
}
export default Tabs;
