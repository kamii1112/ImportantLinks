import React, { useState } from "react";

function Card({ img, title, link, tags, information }) {
    // const textt = tags.map((course) => <p>{course}</p>)

    const [description, setDescription] = useState(false);

    return (
        <div className=" p-5 rounded-2xl group hover:bg-violet-500 transition-all duration-300 flex flex-col items-center bg-slate-900">
            {/* image of the websites comes here */}
            <div className="w-[110%] overflow-hidden group-hover:rounded-lg">
                <img
                    src={img}
                    alt=""
                    className="rounded-md group-hover:scale-110 transform  origin-center transition-all duration-500 w-full h-auto"
                />
            </div>

            {/* card name  */}
            <a href={link} target="_blank"
                className="text-lg font-bold text-white group-hover:text-white transition-all duration-300 capitalize underline cursor-pointer" >
                {title}
            </a>


            <div className="text-white transition-all  duration-300 text-[10px] flex gap-1 flex-wrap justify-center group ">
                {
                    tags.map((tag, index) => (
                        <p key={index} className="py-[1px] px-[3px] bg-slate-400 group-hover:bg-white transition-all duration-300 text-black rounded-lg">{tag}</p>
                    )

                    )
                }
            </div>

            <p className="text-[15px] text-white transition-all duration-300 text-center cursor-pointer"
                onClick={() => setDescription(!description)}>
                {description === true ? (
                    <p>{`${information} `}<span className="font-bold">Hide</span></p>
                ) : (
                    <span className="font-bold">show description</span>
                )}
            </p>


        </div>
    )
}

export default Card;