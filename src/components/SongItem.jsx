import React from "react";

function SongItem({ image, name, desc, id }) {
  return (
    <div className="mix-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#fffffff26]">
      <img className="rounded " src={image} />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
}

export default SongItem;
