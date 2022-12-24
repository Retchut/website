function Navbar(props){
    const handleScroll = props.handleScroll;

    const [ homeKey, homeLabel ]  = [ "home", "Home" ];
    const sections = {
        "projects" : "Projects",
        "games" : "Games",
        "music" : "Music",
        "films" : "Films",
        "shows" : "Shows"
    }

    const LinkButton = ({sectionKey, sectionLabel}) => {
        const textSize = `text-${(sectionKey === "home") ? "xl" : "base"}`;
        return (<button onClick={() => handleScroll(sectionKey)} className={`link-btn ${textSize}`}>{sectionLabel}</button>);
    }

    return (
        // py-4 instead of pt-2 pb-4 
        <nav className="sticky z-30 top-0 pt-2 pb-0 bg-primary">
            <div className="flex justify-between items-center w-full py-2 px-6 background-box">
                <LinkButton sectionKey={homeKey} sectionLabel={homeLabel} />
                <ul>
                    {Object.keys(sections).map((sectionKey) => {
                       return (
                            <li key={`${sectionKey}-link`} className="inline">
                                <LinkButton sectionKey={sectionKey} sectionLabel={sections[sectionKey]} />                            
                            </li>
                        )})
                    }
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;