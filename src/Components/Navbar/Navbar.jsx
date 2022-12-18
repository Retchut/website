function Navbar(){
    const [ homeKey, homeLabel ]  = [ "home", "Home" ];
    const sections = {
        "projects" : "Projects"
    }

    const LinkButton = ({sectionKey, sectionLabel}) => {
        const textSize = `text-${(sectionKey === "home") ? "xl" : "base"}`;
        return (<a onClick={() => console.log(sectionKey)} className={`py-2 px-4 rounded-xl hover:bg-btn-hover hover:text-btn-hover cursor-pointer ${textSize}`}>{sectionLabel}</a>);
    }

    return (
        // py-4 instead of pt-2 pb-4 
        <nav className="pt-2 pb-4 bg-primary">
            <div className="flex justify-between items-center w-full py-2 px-6 background-box">
                <LinkButton sectionKey={homeKey} sectionLabel={homeLabel} />
                <ul>
                    {Object.keys(sections).map((sectionKey) => {
                       return (
                            <li key={`${sectionKey}-link`}>
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