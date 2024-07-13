import React from "react";

const Copyright = ({name, company, nameLink}) => {
    return(
        <a 
            href={nameLink} 
            target="_blank"
            rel="noopener noreferrer"
            className="group absolute bottom-2 right-2 text-[#f4f5f7] p-2 "
            >
            <p className=" bg-black bg-opacity-50 rounded text-sm p-1 cursor-pointer">&copy; Copyright information</p>
            <div className="hidden group-hover:block absolute bottom-full right-0 mb-2 bg-black bg-opacity-70 text-[#f4f5f7] text-xs p-2 rounded">
                 {name} by {company} is licensed under Creative Commons Attribution
            </div>
        </a>
    );
}

export default Copyright;